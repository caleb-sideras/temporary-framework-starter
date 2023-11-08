// Copyright 2019 The Go Authors. All rights reserved.
// Use of this source code is governed by a BSD-style
// license that can be found in the LICENSE file.

// Package xcontext is a package to offer the extra functionality we need
// from contexts that is not available from the standard context package.
package xcontext

import (
	"context"
	"fmt"
	"time"
)

// Detach returns a context that keeps all the values of its parent context
// but detaches from the cancellation and error handling.
func Detach(ctx context.Context) detachedContext { return detachedContext{ctx} }

type detachedContext struct{ parent context.Context }

func (dctx detachedContext) String() string {
	return fmt.Sprintf("detachedContext{parent: %v}", dctx.parent)
}
func (v detachedContext) Deadline() (time.Time, bool)       { return time.Time{}, false }
func (v detachedContext) Done() <-chan struct{}             { return nil }
func (v detachedContext) Err() error                        { return nil }
func (v detachedContext) Value(key interface{}) interface{} { return v.parent.Value(key) }
func (v detachedContext) GetContext() context.Context       { return v.parent }

type LifelineContext struct {
	Ctx context.Context
}

func (*LifelineContext) Deadline() (time.Time, bool) { return time.Time{}, false }
func (*LifelineContext) Done() <-chan struct{}       { return nil }
func (*LifelineContext) Err() error                  { return nil }

func (l *LifelineContext) Value(key interface{}) interface{} {
	return l.Ctx.Value(key)
}

type contextWithoutDeadline struct {
	ctx context.Context
}

func (*contextWithoutDeadline) Deadline() (time.Time, bool) { return time.Time{}, false }
func (*contextWithoutDeadline) Done() <-chan struct{}       { return nil }
func (*contextWithoutDeadline) Err() error                  { return nil }

func (l *contextWithoutDeadline) Value(key interface{}) interface{} {
	return l.ctx.Value(key)
}
