# Caching

To enhance performance and minimize redundant data transfers, Temporary implements various browser caching strategies. By utilizing caching headers, we ensure that previously accessed HTML content isn't redundantly transferred if it's already available in the client's local cache.

## ETags

Temporary leverages ETags for both dynamic and static content, facilitating the validation of the freshness of the cached HTML on the client-side.

### Dynamic Content

For dynamic content, Temporary caters to requests for both complete HTML pages and partial content. It generates a unique hash for the required HTML content using the MD5 (Message Digest Algorithm 5) for each request. This hash is then compared with the one provided in the request's ETag. If the hashes differ, indicating modified content, Temporary serves the updated HTML. Additionally, if the hashes match, signifying no changes, Temporary responds with a `304: http.StatusNotModified`, signaling that the cached version remains up-to-date.

### Static Content

Static content, including full pages and partials rendered at build-time, undergoes hash computation immediately post-rendering. These hashes are preserved in an on-device map. When a request for static content arises, Temporary consults this map. If the hash of the requested content matches the one stored, indicating no changes, a `304: http.StatusNotModified` is included in the response header, leveraging the client's cache. Otherwise, the current HTML is served, ensuring the client receives the most recent content.
