(function anonymous(context
) {
/*
	Index: 1112
	Path:  entities/Hero::m_stickBody
	Type:  Public
	Kind:  Method
	Super: entities/Entity
	Return: 7 0::void
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_m_stickBody(local1 /* b2Body */, local2 /* b2Body */) {
        // Possible use a real "this"
        // local3 is assigned before read, skip init
        let local3 = undefined
        let stack0 = undefined;
        let stack1 = undefined;
        let stack2 = undefined;
        let stack3 = undefined;
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
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[0], true, false);
                        stack0 = temp.$BgUtils;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[0]);
                        }
                        // 7 0::CurrentLevel
                        //Possible type:7 0::Utils
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['CurrentLevel'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgCurrentLevel;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[1]);
                            }
                        }
                        stack1 = 103;
                        if (103 != stack0) { p = 43; continue; };
//                        // JIT: potential type:7 0:Box2D.Dynamics::b2Body// JIT: redundant assigment, value unused
                        stack0 = local1;
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack0 = local1.GetUserData();
                        } else {
                            // 7 0::GetUserData
                            {
                                let t = local1;
                                const m = t.$BgGetUserData || (t = sec.box(local1), t.$BgGetUserData);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BgGetUserData ();
                                } else { 
                                    stack0 = local1.axCallProperty($names[2], [], false);
                                }
                            }
                        }
                        // 9 {3, 0:flash.geom, 0, 3, 0:entities, 2:entities, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.filters, 0:levels, 0:entities.particles, 0:Box2D.Dynamics, 0:Box2D.Collision, 0:Box2D.Collision.Shapes, 0:Box2D.Dynamics.Joints, 0:Box2D.Dynamics.Contacts, 0:Box2D.Common.Math, 1:entities:Hero, 5:entities:Hero, 5:entities:Entity}::isSticked
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['isSticked'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgisSticked;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[3]);
                            }
                        }
                        stack0 = !!stack0;
                        stack1 = stack0;
                        if (stack1) { p = 34; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::isSplatted
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Boolean  */ 
                        stack0 = this.$BgisSplatted;
                        stack0 = !!stack0;
                    case 34:
                        if (!stack0) { p = 39; continue; };
                        return;
                    case 39:
                        { p = 84; continue; };
                    case 43:
//                        // JIT: potential type:7 0:Box2D.Dynamics::b2Body// JIT: redundant assigment, value unused
                        stack0 = local1;
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack0 = local1.GetUserData();
                        } else {
                            // 7 0::GetUserData
                            {
                                let t = local1;
                                const m = t.$BgGetUserData || (t = sec.box(local1), t.$BgGetUserData);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BgGetUserData ();
                                } else { 
                                    stack0 = local1.axCallProperty($names[2], [], false);
                                }
                            }
                        }
                        // 9 {3, 0:flash.geom, 0, 3, 0:entities, 2:entities, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.filters, 0:levels, 0:entities.particles, 0:Box2D.Dynamics, 0:Box2D.Collision, 0:Box2D.Collision.Shapes, 0:Box2D.Dynamics.Joints, 0:Box2D.Dynamics.Contacts, 0:Box2D.Common.Math, 1:entities:Hero, 5:entities:Hero, 5:entities:Entity}::isSticked
                        //Possible type:7 0::Boolean
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['isSticked'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgisSticked;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[3]);
                            }
                        }
                        
                        stack0 = !!stack0;
                        stack1 = stack0;
                        if (stack1) { p = 68; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::stickCounter
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::int  */ 
                        stack0 = this.$BgstickCounter;
                        stack1 = 0;
                        stack0 = stack0 > 0;
                        
                        stack0 = !!stack0;
                    case 68:
                        stack1 = stack0;
                        if (stack1) { p = 79; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::isSplatted
                        //Possible type:7 0::int
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Boolean  */ 
                        stack0 = this.$BgisSplatted;
                        stack0 = !!stack0;
                    case 79:
                        if (!stack0) { p = 84; continue; };
                        return;
                    case 84:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::stickyJoints
                        //Possible type:7 0::Boolean
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack0 = this.$BgstickyJoints;
                        stack1 = null;
                        if (null != stack0) { p = 102; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::Array
                        stack1 = scope0.findScopeProperty($names[4], true, false);
                        //JIT: Support fast construct:Array/Object
                        stack1 = context.constructFast(stack1, [], $names[4]);
                        // 7 0::stickyJoints
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Array  */ 
                        this.$BgstickyJoints = stack1;
                    case 102:
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack0 = this.$BganimationManager;
                        // 7 0:entities::AnimationManager
                        temp = scope0.findScopeProperty($names[5], true, false);
                        stack1 = temp.$BgAnimationManager;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[5]);
                        }
                        // 7 0::GroundCollisionAction
                        //Possible type:7 0:entities::AnimationManager
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['GroundCollisionAction'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$BgGroundCollisionAction;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[6]);
                            }
                        }
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.performAction(stack1);
                        } else {
                            // 7 0::performAction
                            {
                                let t = stack0;
                                const m = t.$BgperformAction || (t = sec.box(stack0), t.$BgperformAction);
                                if( typeof m === "function" ) { 
                                    m.call(t, stack1);
                                } else { 
                                   stack0.axCallProperty($names[7], [stack1], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = true;// JIT: redundant assigment, value unused
                        // 7 0::IS_STICKED
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Boolean  */ 
                        this.$BgIS_STICKED = true;
//                        // JIT: potential type:7 0:Box2D.Dynamics::b2Body// JIT: redundant assigment, value unused
                        stack0 = local1;
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack0 = local1.GetUserData();
                        } else {
                            // 7 0::GetUserData
                            {
                                let t = local1;
                                const m = t.$BgGetUserData || (t = sec.box(local1), t.$BgGetUserData);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BgGetUserData ();
                                } else { 
                                    stack0 = local1.axCallProperty($names[2], [], false);
                                }
                            }
                        }
//                        stack1 = true;// JIT: redundant assigment, value unused
                        // 9 {3, 0:flash.geom, 0, 3, 0:entities, 2:entities, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.filters, 0:levels, 0:entities.particles, 0:Box2D.Dynamics, 0:Box2D.Collision, 0:Box2D.Collision.Shapes, 0:Box2D.Dynamics.Joints, 0:Box2D.Dynamics.Contacts, 0:Box2D.Common.Math, 1:entities:Hero, 5:entities:Hero, 5:entities:Entity}::isSticked
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.isSticked = true;
                        } else {
                            context.setproperty($names[3], true, stack0);
                        }
                        // 7 0:Box2D.Dynamics.Joints::b2RevoluteJointDef
                        stack0 = scope0.findScopeProperty($names[8], true, false);
                        //JIT: Support fast construct:b2RevoluteJointDef/b2JointDef/Object
                        stack0 = context.constructFast(stack0, [], $names[8]);
                        //IR: Drop coerce, reason: redundant
                        local3 = stack0;
//                        stack0 = local3;// JIT: redundant assigment, value unused
//                        // JIT: potential type:7 0:Box2D.Dynamics::b2Body// JIT: redundant assigment, value unused
                        stack1 = local1;
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[0], true, false);
                        stack2 = temp.$BgUtils;
                        if (stack2 === undefined || typeof stack2 === 'function') {
                            stack2 = temp.axGetProperty($names[0]);
                        }
                        // 7 0::m_world
                        //Possible type:7 0::Utils
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['m_world'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$Bgm_world;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[9]);
                            }
                        }
                        if (!(_a = typeof stack2, ((_a !== 'object' && _a !== 'function' ) || stack2 == null || stack2[AX_CLASS_SYMBOL]))) {
                           stack2 = stack2.GetGroundBody();
                        } else {
                            // 7 0::GetGroundBody
                            {
                                let t = stack2;
                                const m = t.$BgGetGroundBody || (t = sec.box(stack2), t.$BgGetGroundBody);
                                if( typeof m === "function" ) { 
                                    stack2 = t.$BgGetGroundBody ();
                                } else { 
                                    stack2 = stack2.axCallProperty($names[10], [], false);
                                }
                            }
                        }
//                        // JIT: potential type:7 0:Box2D.Dynamics::b2Body// JIT: redundant assigment, value unused
                        stack3 = local1;
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack3 = local1.GetPosition();
                        } else {
                            // 7 0::GetPosition
                            {
                                let t = local1;
                                const m = t.$BgGetPosition || (t = sec.box(local1), t.$BgGetPosition);
                                if( typeof m === "function" ) { 
                                    stack3 = t.$BgGetPosition ();
                                } else { 
                                    stack3 = local1.axCallProperty($names[11], [], false);
                                }
                            }
                        }
                        if (!(_a = typeof local3, ((_a !== 'object' && _a !== 'function' ) || local3 == null || local3[AX_CLASS_SYMBOL]))) {
                            local3.Initialize(local1, stack2, stack3);
                        } else {
                            // 7 0::Initialize
                            {
                                let t = local3;
                                const m = t.$BgInitialize || (t = sec.box(local3), t.$BgInitialize);
                                if( typeof m === "function" ) { 
                                    m.call(t, local1, stack2, stack3);
                                } else { 
                                   local3.axCallProperty($names[12], [local1, stack2, stack3], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::stickyJoints
                        //Possible type:7 0:Box2D.Dynamics.Joints::b2RevoluteJointDef
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack0 = this.$BgstickyJoints;
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[0], true, false);
                        stack1 = temp.$BgUtils;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[0]);
                        }
                        // 7 0::m_world
                        //Possible type:7 0::Utils
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['m_world'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$Bgm_world;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[9]);
                            }
                        }
//                        stack2 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack1, ((_a !== 'object' && _a !== 'function' ) || stack1 == null || stack1[AX_CLASS_SYMBOL]))) {
                           stack1 = stack1.CreateJoint(local3);
                        } else {
                            // 7 0::CreateJoint
                            {
                                let t = stack1;
                                const m = t.$BgCreateJoint || (t = sec.box(stack1), t.$BgCreateJoint);
                                if( typeof m === "function" ) { 
                                    stack1 = t.$BgCreateJoint (local3);
                                } else { 
                                    stack1 = stack1.axCallProperty($names[13], [local3], false);
                                }
                            }
                        }
                        // 7 0:Box2D.Dynamics.Joints::b2RevoluteJoint
                        temp = scope0.findScopeProperty($names[14], true, false);
                        stack2 = temp.$Bgb2RevoluteJoint;
                        if (stack2 === undefined || typeof stack2 === 'function') {
                            stack2 = temp.axGetProperty($names[14]);
                        }
                        stack1 = (_a = typeof stack1, ((_a !== 'object' && _a !== 'function' ) || stack1 == null || stack1[AX_CLASS_SYMBOL])) ? stack2.axAsType(stack1) : stack1;
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.push(stack1);
                        } else {
                            // 7 0:http://adobe.com/AS3/2006/builtin::push
                            {
                                let t = stack0;
                                const m = t.$Bgpush || (t = sec.box(stack0), t.$Bgpush);
                                if( typeof m === "function" ) { 
                                    m.call(t, stack1);
                                } else { 
                                   stack0.axCallProperty($names[15], [stack1], false);
                                }
                            }
                        }
                        return;
                    }
                }
            }
//# sourceURL=http://jit/entities/Hero/m_stickBody.js
})