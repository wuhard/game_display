(function anonymous(context
) {
/*
	Index: 1117
	Path:  entities/Hero::m_setPipe
	Type:  Public
	Kind:  Method
	Super: entities/Entity
	Return: 7 0::void
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_m_setPipe(local1 /* Boolean */) {
        // Possible use a real "this"
        /* Force Boolean coerce */
        local1 = (!!local1);

        let stack0 = undefined;
        let stack1 = undefined;
        let scope0 = undefined;
        let temp = undefined;
        let sec = context.sec;
        let $names = context.names;

        
        let p = 0;
        while (true) {
            switch (p) {
                    case 0:
                        //IR: PUSHSCOPE removed, reason: unused
                        // unreachable
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::IS_FROST
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Boolean  */ 
                        stack0 = this.$BgIS_FROST;
                        if (stack0) { p = 11; continue; };
                        return;
                    case 11:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::IS_PIPE
                        //Possible type:7 0::Boolean
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Boolean  */ 
                        stack0 = this.$BgIS_PIPE;
                        // JIT: potential type:7 0::Boolean
                        stack1 = local1;
                        if (local1 != stack0) { p = 21; continue; };
                        return;
                    case 21:
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        // JIT: potential type:7 0::Boolean// JIT: redundant assigment, value unused
                        stack1 = local1;
                        // 7 0::IS_PIPE
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Boolean  */ 
                        this.$BgIS_PIPE = (!!local1);
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::IS_PIPE
                        //Possible type:7 0::Boolean
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Boolean  */ 
                        stack0 = this.$BgIS_PIPE;
                        if (!stack0) { p = 68; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::heroFrostFixture
                        //Possible type:7 0::Boolean
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Dynamics::b2Fixture  */ 
                        stack0 = this.$BgheroFrostFixture;
//                        stack1 = 0;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.SetFriction(0);
                        } else {
                            // 7 0::SetFriction
                            {
                                let t = stack0;
                                const m = t.$BgSetFriction || (t = sec.box(stack0), t.$BgSetFriction);
                                if( typeof m === "function" ) { 
                                    m.call(t, 0);
                                } else { 
                                   stack0.axCallProperty($names[0], [0], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::heroFrostFixture
                        //Possible type:7 0:Box2D.Dynamics::b2Fixture
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Dynamics::b2Fixture  */ 
                        stack0 = this.$BgheroFrostFixture;
//                        stack1 = 0;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.SetDensity(0);
                        } else {
                            // 7 0::SetDensity
                            {
                                let t = stack0;
                                const m = t.$BgSetDensity || (t = sec.box(stack0), t.$BgSetDensity);
                                if( typeof m === "function" ) { 
                                    m.call(t, 0);
                                } else { 
                                   stack0.axCallProperty($names[1], [0], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::heroFrostFixture
                        //Possible type:7 0:Box2D.Dynamics::b2Fixture
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Dynamics::b2Fixture  */ 
                        stack0 = this.$BgheroFrostFixture;
//                        stack1 = 0;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.SetRestitution(0);
                        } else {
                            // 7 0::SetRestitution
                            {
                                let t = stack0;
                                const m = t.$BgSetRestitution || (t = sec.box(stack0), t.$BgSetRestitution);
                                if( typeof m === "function" ) { 
                                    m.call(t, 0);
                                } else { 
                                   stack0.axCallProperty($names[2], [0], false);
                                }
                            }
                        }
                        //JIT: Emit inline return
                        return;
                    case 68:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::heroFrostFixture
                        //Possible type:7 0:Box2D.Dynamics::b2Fixture
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Dynamics::b2Fixture  */ 
                        stack0 = this.$BgheroFrostFixture;
//                        stack1 = 0.2;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.SetFriction(0.2);
                        } else {
                            // 7 0::SetFriction
                            {
                                let t = stack0;
                                const m = t.$BgSetFriction || (t = sec.box(stack0), t.$BgSetFriction);
                                if( typeof m === "function" ) { 
                                    m.call(t, 0.2);
                                } else { 
                                   stack0.axCallProperty($names[0], [0.2], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::heroFrostFixture
                        //Possible type:7 0:Box2D.Dynamics::b2Fixture
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Dynamics::b2Fixture  */ 
                        stack0 = this.$BgheroFrostFixture;
//                        stack1 = 0.1;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.SetDensity(0.1);
                        } else {
                            // 7 0::SetDensity
                            {
                                let t = stack0;
                                const m = t.$BgSetDensity || (t = sec.box(stack0), t.$BgSetDensity);
                                if( typeof m === "function" ) { 
                                    m.call(t, 0.1);
                                } else { 
                                   stack0.axCallProperty($names[1], [0.1], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::heroFrostFixture
                        //Possible type:7 0:Box2D.Dynamics::b2Fixture
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Dynamics::b2Fixture  */ 
                        stack0 = this.$BgheroFrostFixture;
//                        stack1 = 0.0001;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.SetRestitution(0.0001);
                        } else {
                            // 7 0::SetRestitution
                            {
                                let t = stack0;
                                const m = t.$BgSetRestitution || (t = sec.box(stack0), t.$BgSetRestitution);
                                if( typeof m === "function" ) { 
                                    m.call(t, 0.0001);
                                } else { 
                                   stack0.axCallProperty($names[2], [0.0001], false);
                                }
                            }
                        }
                    case 98:
                        return;
                    }
                }
            }
//# sourceURL=http://jit/entities/Hero/m_setPipe.js
})