(function anonymous(context
) {
/*
	Index: 1647
	Path:  levels/collisions/TickTockCollision::m_switchTickTock
	Type:  Public
	Kind:  Method
	Super: levels/collisions/LevelCollision
	Return: *
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_m_switchTickTock(local1 /* Boolean */) {
        // Possible use a real "this"
        /* Force Boolean coerce */
        local1 = (!!local1);

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
                        // JIT: potential type:7 0::Boolean
                        stack0 = local1;
                        stack0 = !!local1;
                        stack1 = stack0;
                        if (!stack1) { p = 15; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 2:levels.collisions::IS_TICK
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Boolean  */ 
                        stack0 = this.$BgIS_TICK;
                        stack0 = !!stack0;
                    case 15:
                        if (!stack0) { p = 70; continue; };
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack0 = this.$BglevelCollisionSprite;
//                        stack1 = 1;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.gotoAndStop(1);
                        } else {
                            // 7 0::gotoAndStop
                            {
                                let t = stack0;
                                const m = t.$BggotoAndStop || (t = sec.box(stack0), t.$BggotoAndStop);
                                if( typeof m === "function" ) { 
                                    m.call(t, 1);
                                } else { 
                                   stack0.axCallProperty($names[0], [1], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 2:levels.collisions::body
                        //Possible type:7 0::levelCollisionSprite
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Dynamics::b2Body  */ 
                        stack0 = this.$Bgbody;
                        // 7 0:Box2D.Common.Math::b2Vec2
                        stack1 = scope0.findScopeProperty($names[1], true, false);
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack2 = this.$BgoriginalXPos;
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[2], true, false);
                        stack3 = temp.$BgUtils;
                        if (stack3 === undefined || typeof stack3 === 'function') {
                            stack3 = temp.axGetProperty($names[2]);
                        }
                        // 7 0::m_scale
                        //Possible type:7 0::Utils
                        if (!(stack3 != undefined && stack3[AX_CLASS_SYMBOL])) {
                            stack3 = stack3['m_scale'];
                        } else {
                            temp = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);
                            stack3 = temp.$Bgm_scale;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[3]);
                            }
                        }
                        stack2 /= stack3;
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack3 = this.$BgoriginalYPos;
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[2], true, false);
                        stack4 = temp.$BgUtils;
                        if (stack4 === undefined || typeof stack4 === 'function') {
                            stack4 = temp.axGetProperty($names[2]);
                        }
                        // 7 0::m_scale
                        //Possible type:7 0::Utils
                        if (!(stack4 != undefined && stack4[AX_CLASS_SYMBOL])) {
                            stack4 = stack4['m_scale'];
                        } else {
                            temp = stack4[AX_CLASS_SYMBOL] ? stack4 : sec.box(stack4);
                            stack4 = temp.$Bgm_scale;
                            if (stack4 === undefined || typeof stack4 === 'function') {
                                stack4 = temp.axGetProperty($names[3]);
                            }
                        }
                        stack3 /= stack4;
                        //JIT: Support fast construct:b2Vec2/Object
                        stack1 = context.constructFast(stack1, [stack2, stack3], $names[1]);
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.SetPosition(stack1);
                        } else {
                            // 7 0::SetPosition
                            {
                                let t = stack0;
                                const m = t.$BgSetPosition || (t = sec.box(stack0), t.$BgSetPosition);
                                if( typeof m === "function" ) { 
                                    m.call(t, stack1);
                                } else { 
                                   stack0.axCallProperty($names[4], [stack1], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = true;// JIT: redundant assigment, value unused
                        // 7 2:levels.collisions::IS_VISIBLE
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Boolean  */ 
                        this.$BgIS_VISIBLE = true;
                        //JIT: Emit inline return
                        return;
                    case 70:
                        // JIT: potential type:7 0::Boolean
                        stack0 = local1;
                        stack0 = !local1;
                        stack1 = stack0;
                        if (!stack1) { p = 83; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 2:levels.collisions::IS_TICK
                        //Possible type:7 0:Box2D.Dynamics::b2Body
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Boolean  */ 
                        stack0 = this.$BgIS_TICK;
                        stack0 = !stack0;
                    case 83:
                        if (!stack0) { p = 138; continue; };
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack0 = this.$BglevelCollisionSprite;
//                        stack1 = 2;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.gotoAndStop(2);
                        } else {
                            // 7 0::gotoAndStop
                            {
                                let t = stack0;
                                const m = t.$BggotoAndStop || (t = sec.box(stack0), t.$BggotoAndStop);
                                if( typeof m === "function" ) { 
                                    m.call(t, 2);
                                } else { 
                                   stack0.axCallProperty($names[0], [2], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 2:levels.collisions::body
                        //Possible type:7 0::levelCollisionSprite
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Dynamics::b2Body  */ 
                        stack0 = this.$Bgbody;
                        // 7 0:Box2D.Common.Math::b2Vec2
                        stack1 = scope0.findScopeProperty($names[1], true, false);
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack2 = this.$BgoriginalXPos;
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[2], true, false);
                        stack3 = temp.$BgUtils;
                        if (stack3 === undefined || typeof stack3 === 'function') {
                            stack3 = temp.axGetProperty($names[2]);
                        }
                        // 7 0::m_scale
                        //Possible type:7 0::Utils
                        if (!(stack3 != undefined && stack3[AX_CLASS_SYMBOL])) {
                            stack3 = stack3['m_scale'];
                        } else {
                            temp = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);
                            stack3 = temp.$Bgm_scale;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[3]);
                            }
                        }
                        stack2 /= stack3;
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack3 = this.$BgoriginalYPos;
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[2], true, false);
                        stack4 = temp.$BgUtils;
                        if (stack4 === undefined || typeof stack4 === 'function') {
                            stack4 = temp.axGetProperty($names[2]);
                        }
                        // 7 0::m_scale
                        //Possible type:7 0::Utils
                        if (!(stack4 != undefined && stack4[AX_CLASS_SYMBOL])) {
                            stack4 = stack4['m_scale'];
                        } else {
                            temp = stack4[AX_CLASS_SYMBOL] ? stack4 : sec.box(stack4);
                            stack4 = temp.$Bgm_scale;
                            if (stack4 === undefined || typeof stack4 === 'function') {
                                stack4 = temp.axGetProperty($names[3]);
                            }
                        }
                        stack3 /= stack4;
                        //JIT: Support fast construct:b2Vec2/Object
                        stack1 = context.constructFast(stack1, [stack2, stack3], $names[1]);
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.SetPosition(stack1);
                        } else {
                            // 7 0::SetPosition
                            {
                                let t = stack0;
                                const m = t.$BgSetPosition || (t = sec.box(stack0), t.$BgSetPosition);
                                if( typeof m === "function" ) { 
                                    m.call(t, stack1);
                                } else { 
                                   stack0.axCallProperty($names[4], [stack1], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = true;// JIT: redundant assigment, value unused
                        // 7 2:levels.collisions::IS_VISIBLE
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Boolean  */ 
                        this.$BgIS_VISIBLE = true;
                        //JIT: Emit inline return
                        return;
                    case 138:
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = false;// JIT: redundant assigment, value unused
                        // 7 2:levels.collisions::IS_VISIBLE
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Boolean  */ 
                        this.$BgIS_VISIBLE = false;
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack0 = this.$BglevelCollisionSprite;
//                        stack1 = 3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.gotoAndStop(3);
                        } else {
                            // 7 0::gotoAndStop
                            {
                                let t = stack0;
                                const m = t.$BggotoAndStop || (t = sec.box(stack0), t.$BggotoAndStop);
                                if( typeof m === "function" ) { 
                                    m.call(t, 3);
                                } else { 
                                   stack0.axCallProperty($names[0], [3], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 2:levels.collisions::body
                        //Possible type:7 0::levelCollisionSprite
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Dynamics::b2Body  */ 
                        stack0 = this.$Bgbody;
                        // 7 0:Box2D.Common.Math::b2Vec2
                        stack1 = scope0.findScopeProperty($names[1], true, false);
//                        stack2 = -100;// JIT: redundant assigment, value unused
//                        stack3 = -100;// JIT: redundant assigment, value unused
                        //JIT: Support fast construct:b2Vec2/Object
                        stack1 = context.constructFast(stack1, [-100, -100], $names[1]);
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.SetPosition(stack1);
                        } else {
                            // 7 0::SetPosition
                            {
                                let t = stack0;
                                const m = t.$BgSetPosition || (t = sec.box(stack0), t.$BgSetPosition);
                                if( typeof m === "function" ) { 
                                    m.call(t, stack1);
                                } else { 
                                   stack0.axCallProperty($names[4], [stack1], false);
                                }
                            }
                        }
                    case 169:
                        return;
                    }
                }
            }
//# sourceURL=http://jit/levels/collisions/TickTockCollision/m_switchTickTock.js
})