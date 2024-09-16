(function anonymous(context
) {
/*
	Index: 3075
	Path:  slime_laboratory3_fla/SlimeSplashEyes_422::m_frame1
	Type:  PackageInternal
	Kind:  Method
	Super: flash/display/MovieClip
	Return: *
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;

             /* e */
             const __Math = context.getTopLevel(0)['$BgMath']; // :Math

    return function compiled_m_frame1() {
        // Possible use a real "this"

        let stack0 = undefined;
        let stack1 = undefined;
        let stack2 = undefined;
        let stack3 = undefined;
        let stack4 = undefined;
        let scope0 = undefined;
        let temp = undefined;
        let sec = context.sec;
        let $names = context.names;

        
        let p = 0;
        while (true) {
            switch (p) {
                    case 0:
                        stack0 = this;
                        scope0 = context.savedScope.extend(this);
                        // 7 0::Math
                        /* GenerateLexImports GETLEX */
//                        stack0 = __Math;// JIT: redundant assigment, value unused
                        if (!(_a = typeof __Math, ((_a !== 'object' && _a !== 'function' ) || __Math == null || __Math[AX_CLASS_SYMBOL]))) {
                           stack0 = __Math.random();
                        } else {
                            // 7 0::random
                            {
                                let t = __Math;
                                const m = t.$Bgrandom || (t = sec.box(__Math), t.$Bgrandom);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$Bgrandom ();
                                } else { 
                                    stack0 = __Math.axCallProperty($names[1], [], false);
                                }
                            }
                        }
//                        stack1 = 100;// JIT: redundant assigment, value unused
                        stack0 *= 100;
                        stack1 = 50;
                        if (!(50 < stack0)) { p = 55; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::int
                        temp = scope0.findScopeProperty($names[2], true, false);
                        stack1 = temp.$Bgint;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[2]);
                        }
                        stack2 = context.savedScope.global.object;
                        // 7 0::Math
                        /* GenerateLexImports GETLEX */
//                        stack3 = __Math;// JIT: redundant assigment, value unused
                        if (!(_a = typeof __Math, ((_a !== 'object' && _a !== 'function' ) || __Math == null || __Math[AX_CLASS_SYMBOL]))) {
                           stack3 = __Math.random();
                        } else {
                            // 7 0::random
                            {
                                let t = __Math;
                                const m = t.$Bgrandom || (t = sec.box(__Math), t.$Bgrandom);
                                if( typeof m === "function" ) { 
                                    stack3 = t.$Bgrandom ();
                                } else { 
                                    stack3 = __Math.axCallProperty($names[1], [], false);
                                }
                            }
                        }
//                        stack4 = 60;// JIT: redundant assigment, value unused
                        stack3 *= 60;
                        stack1 = context.call(stack1, stack2, [stack3], scope0);
                        // 7 0::rand
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::int  */ 
                        this.$Bgrand = (stack1|0);
                        // 7 0::gotoAndPlay
                        /* We sure that this scope owner, represented in TRAIT as Method  */ 
//                        stack0 = this;// JIT: redundant assigment, value unused
                        stack1 = 1;
//                        stack2 = this;// JIT: redundant assigment, value unused
                        // 7 0::rand
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::int  */ 
                        stack2 = this.$Bgrand;
                        stack1 += stack2;
                        /* We sure that this safe call, represented in TRAIT as Method  */ 
                        this.$BggotoAndPlay(stack1);
                        //JIT: Emit inline return
                        return;
                    case 55:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::int
                        temp = scope0.findScopeProperty($names[2], true, false);
                        stack1 = temp.$Bgint;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[2]);
                        }
                        stack2 = context.savedScope.global.object;
                        // 7 0::Math
                        /* GenerateLexImports GETLEX */
//                        stack3 = __Math;// JIT: redundant assigment, value unused
                        if (!(_a = typeof __Math, ((_a !== 'object' && _a !== 'function' ) || __Math == null || __Math[AX_CLASS_SYMBOL]))) {
                           stack3 = __Math.random();
                        } else {
                            // 7 0::random
                            {
                                let t = __Math;
                                const m = t.$Bgrandom || (t = sec.box(__Math), t.$Bgrandom);
                                if( typeof m === "function" ) { 
                                    stack3 = t.$Bgrandom ();
                                } else { 
                                    stack3 = __Math.axCallProperty($names[1], [], false);
                                }
                            }
                        }
//                        stack4 = 30;// JIT: redundant assigment, value unused
                        stack3 *= 30;
                        stack1 = context.call(stack1, stack2, [stack3], scope0);
                        // 7 0::rand
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::int  */ 
                        this.$Bgrand = (stack1|0);
                        // 7 0::gotoAndPlay
                        /* We sure that this scope owner, represented in TRAIT as Method  */ 
//                        stack0 = this;// JIT: redundant assigment, value unused
                        stack1 = 90;
//                        stack2 = this;// JIT: redundant assigment, value unused
                        // 7 0::rand
                        //Possible type:7 0::int
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::int  */ 
                        stack2 = this.$Bgrand;
                        stack1 += stack2;
                        /* We sure that this safe call, represented in TRAIT as Method  */ 
                        this.$BggotoAndPlay(stack1);
                    case 88:
                        return;
                    }
                }
            }
//# sourceURL=http://jit/slime_laboratory3_fla/SlimeSplashEyes_422/m_frame1.js
})