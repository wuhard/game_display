(function anonymous(context
) {
/*
	Index: 1628
	Path:  levels/collisions/LaserCollision::m_update
	Type:  Public
	Kind:  Method
	Super: levels/collisions/LevelCollision
	Return: 7 0::void
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;

             /* e */
             const __Math = context.getTopLevel(1)['$BgMath']; // :Math

    return function compiled_m_update() {
        // Possible use a real "this"
        // local1 is assigned before read, skip init
        let local1 = undefined
        // local2 is assigned before read, skip init
        let local2 = undefined
        // local3 is assigned before read, skip init
        let local3 = undefined
        // local4 is assigned before read, skip init
        let local4 = undefined
        // local5 is assigned before read, skip init
        let local5 = undefined
        // local6 is assigned before read, skip init
        let local6 = undefined
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
//                        stack0 = null;// JIT: redundant assigment, value unused
                        //JIT: SKIP_NULL_COERCE
                        local3 = null;
//                        stack0 = null;// JIT: redundant assigment, value unused
                        //JIT: SKIP_NULL_COERCE
                        local4 = null;
                        stack0 = 0;
                        stack0 = +0;
                        local1 = stack0;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::pauseTime
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Boolean  */ 
                        stack0 = this.$BgpauseTime;
                        if (!stack0) { p = 67; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        stack1 = this;
                        local5 = stack1;
                        // 7 0::pauseCounter
                        //Possible type:7 0::Boolean
                        /* We sure that this safe get, represented in TRAIT as Slot, type: null  */ 
                        stack0 = this.$BgpauseCounter;
                        stack0 = +stack0;
                        stack1 = stack0;
                        stack1++;
                        local6 = stack1;
//                        stack1 = local5;// JIT: redundant assigment, value unused
//                        stack2 = local6;// JIT: redundant assigment, value unused
                        // 7 0::pauseCounter
                        if (!(local5 != undefined && local5[AX_CLASS_SYMBOL])){
                            local5.pauseCounter = local6;
                        } else {
                            context.setproperty($names[0], local6, local5);
                        }
                        //IR: KILL removed, reason: prevent optimisation
                        //IR: KILL removed, reason: prevent optimisation
                        stack1 = 15;
                        if (!(15 < stack0)) { p = 63; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = false;// JIT: redundant assigment, value unused
                        // 7 0::pauseTime
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Boolean  */ 
                        this.$BgpauseTime = false;
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = 0;// JIT: redundant assigment, value unused
                        // 7 0::pauseCounter
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: null  */ 
                        this.$BgpauseCounter = 0;
                    case 63:
                        { p = 161; continue; };
                    case 67:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::clockwiseRotation
                        //Possible type:null
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Boolean  */ 
                        stack0 = this.$BgclockwiseRotation;
                        if (!stack0) { p = 121; continue; };
                        stack0 = 2;
                        stack0 = +2;
                        local1 = stack0;
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::currentAngle
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
                        stack1 = this.$BgcurrentAngle;
//                        stack2 = local1;// JIT: redundant assigment, value unused
                        stack1 += local1;
                        // 7 0::currentAngle
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Number  */ 
                        this.$BgcurrentAngle = (+stack1);
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::currentAngle
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
                        stack0 = this.$BgcurrentAngle;
                        stack1 = 135;
                        if (!(135 < stack0)) { p = 117; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = 135;// JIT: redundant assigment, value unused
                        // 7 0::currentAngle
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Number  */ 
                        this.$BgcurrentAngle = 135;
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = false;// JIT: redundant assigment, value unused
                        // 7 0::clockwiseRotation
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Boolean  */ 
                        this.$BgclockwiseRotation = false;
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = true;// JIT: redundant assigment, value unused
                        // 7 0::pauseTime
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Boolean  */ 
                        this.$BgpauseTime = true;
                    case 117:
                        { p = 161; continue; };
                    case 121:
                        stack0 = 2;
                        stack0 = +2;
                        local1 = stack0;
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::currentAngle
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
                        stack1 = this.$BgcurrentAngle;
//                        stack2 = local1;// JIT: redundant assigment, value unused
                        stack1 -= local1;
                        // 7 0::currentAngle
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Number  */ 
                        this.$BgcurrentAngle = (+stack1);
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::currentAngle
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
                        stack0 = this.$BgcurrentAngle;
                        stack1 = 45;
                        if (!(45 > stack0)) { p = 161; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = 45;// JIT: redundant assigment, value unused
                        // 7 0::currentAngle
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Number  */ 
                        this.$BgcurrentAngle = 45;
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = true;// JIT: redundant assigment, value unused
                        // 7 0::clockwiseRotation
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Boolean  */ 
                        this.$BgclockwiseRotation = true;
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = true;// JIT: redundant assigment, value unused
                        // 7 0::pauseTime
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Boolean  */ 
                        this.$BgpauseTime = true;
                    case 161:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 2:levels.collisions::body
                        //Possible type:7 0::Number
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Dynamics::b2Body  */ 
                        stack0 = this.$Bgbody;
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::currentAngle
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
                        stack1 = this.$BgcurrentAngle;
                        // 7 0::Math
                        /* GenerateLexImports GETLEX */
//                        stack2 = __Math;// JIT: redundant assigment, value unused
                        // 7 0::PI
                        //Possible type:7 0::Math
                        if (!(__Math != undefined && __Math[AX_CLASS_SYMBOL])) {
                            stack2 = __Math['PI'];
                        } else {
                            temp = __Math[AX_CLASS_SYMBOL] ? __Math : sec.box(__Math);
                            stack2 = temp.$BgPI;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[2]);
                            }
                        }
                        stack1 *= stack2;
//                        stack2 = 180;// JIT: redundant assigment, value unused
                        stack1 /= 180;
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.SetAngle(stack1);
                        } else {
                            // 7 0::SetAngle
                            {
                                let t = stack0;
                                const m = t.$BgSetAngle || (t = sec.box(stack0), t.$BgSetAngle);
                                if( typeof m === "function" ) { 
                                    m.call(t, stack1);
                                } else { 
                                   stack0.axCallProperty($names[3], [stack1], false);
                                }
                            }
                        }
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack0 = this.$BglevelCollisionSprite;
                        // 9 {3, 0:Box2D.Dynamics, 0:Box2D.Collision.Shapes, 0, 0:Box2D.Common.Math, 2:levels.collisions, 0:levels, 0:Box2D.Collision, 3, 0:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.events, 0:flash.geom, 0:entities, 0:Box2D.Dynamics.Joints, 0:Box2D.Dynamics.Contacts, 1:levels.collisions:LaserCollision, 5:levels.collisions:LaserCollision, 5:levels.collisions:LevelCollision}::gfxHandle
                        //Possible type:7 0::levelCollisionSprite
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['gfxHandle'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BggfxHandle;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[4]);
                            }
                        }
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::currentAngle
                        //Possible type:7 0::Number
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
                        stack1 = this.$BgcurrentAngle;
//                        stack2 = 8;// JIT: redundant assigment, value unused
                        stack1 *= 8;
                        // 9 {3, 0:Box2D.Dynamics, 0:Box2D.Collision.Shapes, 0, 0:Box2D.Common.Math, 2:levels.collisions, 0:levels, 0:Box2D.Collision, 3, 0:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.events, 0:flash.geom, 0:entities, 0:Box2D.Dynamics.Joints, 0:Box2D.Dynamics.Contacts, 1:levels.collisions:LaserCollision, 5:levels.collisions:LaserCollision, 5:levels.collisions:LevelCollision}::rotation
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.rotation = stack1;
                        } else {
                            context.setproperty($names[5], stack1, stack0);
                        }
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack0 = this.$BglevelCollisionSprite;
                        // 9 {3, 0:Box2D.Dynamics, 0:Box2D.Collision.Shapes, 0, 0:Box2D.Common.Math, 2:levels.collisions, 0:levels, 0:Box2D.Collision, 3, 0:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.events, 0:flash.geom, 0:entities, 0:Box2D.Dynamics.Joints, 0:Box2D.Dynamics.Contacts, 1:levels.collisions:LaserCollision, 5:levels.collisions:LaserCollision, 5:levels.collisions:LevelCollision}::cannon
                        //Possible type:7 0::levelCollisionSprite
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['cannon'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgcannon;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[6]);
                            }
                        }
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::currentAngle
                        //Possible type:7 0::Number
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
                        stack1 = this.$BgcurrentAngle;
                        // 9 {3, 0:Box2D.Dynamics, 0:Box2D.Collision.Shapes, 0, 0:Box2D.Common.Math, 2:levels.collisions, 0:levels, 0:Box2D.Collision, 3, 0:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.events, 0:flash.geom, 0:entities, 0:Box2D.Dynamics.Joints, 0:Box2D.Dynamics.Contacts, 1:levels.collisions:LaserCollision, 5:levels.collisions:LaserCollision, 5:levels.collisions:LevelCollision}::rotation
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.rotation = stack1;
                        } else {
                            context.setproperty($names[5], stack1, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 2:levels.collisions::body
                        //Possible type:7 0::Number
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Dynamics::b2Body  */ 
                        stack1 = this.$Bgbody;
                        // 7 0:Box2D.Common.Math::b2Vec2
                        stack2 = scope0.findScopeProperty($names[7], true, false);
                        stack3 = 18.1;
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[8], true, false);
                        stack4 = temp.$BgUtils;
                        if (stack4 === undefined || typeof stack4 === 'function') {
                            stack4 = temp.axGetProperty($names[8]);
                        }
                        // 7 0::m_scale
                        //Possible type:7 0::Utils
                        if (!(stack4 != undefined && stack4[AX_CLASS_SYMBOL])) {
                            stack4 = stack4['m_scale'];
                        } else {
                            temp = stack4[AX_CLASS_SYMBOL] ? stack4 : sec.box(stack4);
                            stack4 = temp.$Bgm_scale;
                            if (stack4 === undefined || typeof stack4 === 'function') {
                                stack4 = temp.axGetProperty($names[9]);
                            }
                        }
                        stack3 /= stack4;
//                        stack4 = 0;// JIT: redundant assigment, value unused
                        //JIT: Support fast construct:b2Vec2/Object
                        stack2 = context.constructFast(stack2, [stack3, 0], $names[7]);
                        if (!(_a = typeof stack1, ((_a !== 'object' && _a !== 'function' ) || stack1 == null || stack1[AX_CLASS_SYMBOL]))) {
                           stack1 = stack1.GetWorldPoint(stack2);
                        } else {
                            // 7 0::GetWorldPoint
                            {
                                let t = stack1;
                                const m = t.$BgGetWorldPoint || (t = sec.box(stack1), t.$BgGetWorldPoint);
                                if( typeof m === "function" ) { 
                                    stack1 = t.$BgGetWorldPoint (stack2);
                                } else { 
                                    stack1 = stack1.axCallProperty($names[10], [stack2], false);
                                }
                            }
                        }
                        // 7 2:levels.collisions::p1
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: null  */ 
                        this.$Bgp1 = stack1;
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 2:levels.collisions::body
                        //Possible type:7 0:Box2D.Dynamics::b2Body
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Dynamics::b2Body  */ 
                        stack1 = this.$Bgbody;
                        // 7 0:Box2D.Common.Math::b2Vec2
                        stack2 = scope0.findScopeProperty($names[7], true, false);
                        stack3 = 150.1;
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[8], true, false);
                        stack4 = temp.$BgUtils;
                        if (stack4 === undefined || typeof stack4 === 'function') {
                            stack4 = temp.axGetProperty($names[8]);
                        }
                        // 7 0::m_scale
                        //Possible type:7 0::Utils
                        if (!(stack4 != undefined && stack4[AX_CLASS_SYMBOL])) {
                            stack4 = stack4['m_scale'];
                        } else {
                            temp = stack4[AX_CLASS_SYMBOL] ? stack4 : sec.box(stack4);
                            stack4 = temp.$Bgm_scale;
                            if (stack4 === undefined || typeof stack4 === 'function') {
                                stack4 = temp.axGetProperty($names[9]);
                            }
                        }
                        stack3 /= stack4;
//                        stack4 = 0;// JIT: redundant assigment, value unused
                        //JIT: Support fast construct:b2Vec2/Object
                        stack2 = context.constructFast(stack2, [stack3, 0], $names[7]);
                        if (!(_a = typeof stack1, ((_a !== 'object' && _a !== 'function' ) || stack1 == null || stack1[AX_CLASS_SYMBOL]))) {
                           stack1 = stack1.GetWorldPoint(stack2);
                        } else {
                            // 7 0::GetWorldPoint
                            {
                                let t = stack1;
                                const m = t.$BgGetWorldPoint || (t = sec.box(stack1), t.$BgGetWorldPoint);
                                if( typeof m === "function" ) { 
                                    stack1 = t.$BgGetWorldPoint (stack2);
                                } else { 
                                    stack1 = stack1.axCallProperty($names[10], [stack2], false);
                                }
                            }
                        }
                        // 7 2:levels.collisions::p2
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0:Box2D.Common.Math::b2Vec2  */ 
                        this.$Bgp2 = stack1;
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[8], true, false);
                        stack0 = temp.$BgUtils;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[8]);
                        }
                        // 7 0::m_world
                        //Possible type:7 0::Utils
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['m_world'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgm_world;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[11]);
                            }
                        }
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 2:levels.collisions::p1
                        //Possible type:7 0:Box2D.Dynamics::b2Body
                        /* We sure that this safe get, represented in TRAIT as Slot, type: null  */ 
                        stack1 = this.$Bgp1;
//                        stack2 = this;// JIT: redundant assigment, value unused
                        // 7 2:levels.collisions::p2
                        //Possible type:7 0:Box2D.Common.Math::b2Vec2
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Common.Math::b2Vec2  */ 
                        stack2 = this.$Bgp2;
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                           stack0 = stack0.RayCastOne(stack1, stack2);
                        } else {
                            // 7 0::RayCastOne
                            {
                                let t = stack0;
                                const m = t.$BgRayCastOne || (t = sec.box(stack0), t.$BgRayCastOne);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BgRayCastOne (stack1, stack2);
                                } else { 
                                    stack0 = stack0.axCallProperty($names[12], [stack1, stack2], false);
                                }
                            }
                        }
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[13], true, false);
                            _e || console.warn('[m_update] Coerce Type not found:', "b2Fixture")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        local2 = stack0;
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = 1;// JIT: redundant assigment, value unused
                        // 7 2:levels.collisions::lambda
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Number  */ 
                        this.$Bglambda = 1;
                        stack0 = local2;
                        if (!local2) { p = 343; continue; };
                        // 7 0:Box2D.Collision::b2RayCastInput
                        stack0 = scope0.findScopeProperty($names[14], true, false);
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 2:levels.collisions::p1
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: null  */ 
                        stack1 = this.$Bgp1;
//                        stack2 = this;// JIT: redundant assigment, value unused
                        // 7 2:levels.collisions::p2
                        //Possible type:7 0:Box2D.Common.Math::b2Vec2
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Common.Math::b2Vec2  */ 
                        stack2 = this.$Bgp2;
                        //JIT: Support fast construct:b2RayCastInput/Object
                        stack0 = context.constructFast(stack0, [stack1, stack2], $names[14]);
                        //IR: Drop coerce, reason: redundant
                        local3 = stack0;
                        // 7 0:Box2D.Collision::b2RayCastOutput
                        stack0 = scope0.findScopeProperty($names[15], true, false);
                        //JIT: Support fast construct:b2RayCastOutput/Object
                        stack0 = context.constructFast(stack0, [], $names[15]);
                        //IR: Drop coerce, reason: redundant
                        local4 = stack0;
//                        stack0 = local2;// JIT: redundant assigment, value unused
//                        stack1 = local4;// JIT: redundant assigment, value unused
//                        stack2 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local2, ((_a !== 'object' && _a !== 'function' ) || local2 == null || local2[AX_CLASS_SYMBOL]))) {
                            local2.RayCast(local4, local3);
                        } else {
                            // 7 0::RayCast
                            {
                                let t = local2;
                                const m = t.$BgRayCast || (t = sec.box(local2), t.$BgRayCast);
                                if( typeof m === "function" ) { 
                                    m.call(t, local4, local3);
                                } else { 
                                   local2.axCallProperty($names[16], [local4, local3], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = local4;// JIT: redundant assigment, value unused
                        // 7 0::fraction
                        //Possible type:null
                        if (!(local4 != undefined && local4[AX_CLASS_SYMBOL])) {
                            stack1 = local4['fraction'];
                        } else {
                            temp = local4[AX_CLASS_SYMBOL] ? local4 : sec.box(local4);
                            stack1 = temp.$Bgfraction;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[17]);
                            }
                        }
                        // 7 2:levels.collisions::lambda
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Number  */ 
                        this.$Bglambda = (+stack1);
                    case 343:
                        stack0 = local2;
                        stack1 = null;
                        //JIT: Emit inline return
                        if (null == local2) { return; }
//                        stack0 = local2;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local2, ((_a !== 'object' && _a !== 'function' ) || local2 == null || local2[AX_CLASS_SYMBOL]))) {
                           stack0 = local2.GetBody();
                        } else {
                            // 7 0::GetBody
                            {
                                let t = local2;
                                const m = t.$BgGetBody || (t = sec.box(local2), t.$BgGetBody);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BgGetBody ();
                                } else { 
                                    stack0 = local2.axCallProperty($names[18], [], false);
                                }
                            }
                        }
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                           stack0 = stack0.GetUserData();
                        } else {
                            // 7 0::GetUserData
                            {
                                let t = stack0;
                                const m = t.$BgGetUserData || (t = sec.box(stack0), t.$BgGetUserData);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BgGetUserData ();
                                } else { 
                                    stack0 = stack0.axCallProperty($names[19], [], false);
                                }
                            }
                        }
                        stack1 = null;
                        //JIT: Emit inline return
                        if (null == stack0) { return; }
//                        stack0 = local2;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local2, ((_a !== 'object' && _a !== 'function' ) || local2 == null || local2[AX_CLASS_SYMBOL]))) {
                           stack0 = local2.GetBody();
                        } else {
                            // 7 0::GetBody
                            {
                                let t = local2;
                                const m = t.$BgGetBody || (t = sec.box(local2), t.$BgGetBody);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BgGetBody ();
                                } else { 
                                    stack0 = local2.axCallProperty($names[18], [], false);
                                }
                            }
                        }
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                           stack0 = stack0.GetUserData();
                        } else {
                            // 7 0::GetUserData
                            {
                                let t = stack0;
                                const m = t.$BgGetUserData || (t = sec.box(stack0), t.$BgGetUserData);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BgGetUserData ();
                                } else { 
                                    stack0 = stack0.axCallProperty($names[19], [], false);
                                }
                            }
                        }
                        // 9 {3, 0:Box2D.Dynamics, 0:Box2D.Collision.Shapes, 0, 0:Box2D.Common.Math, 2:levels.collisions, 0:levels, 0:Box2D.Collision, 3, 0:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.events, 0:flash.geom, 0:entities, 0:Box2D.Dynamics.Joints, 0:Box2D.Dynamics.Contacts, 1:levels.collisions:LaserCollision, 5:levels.collisions:LaserCollision, 5:levels.collisions:LevelCollision}::isHeroBody
                        //Possible type:7 0:Box2D.Collision::b2RayCastOutput
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['isHeroBody'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgisHeroBody;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[20]);
                            }
                        }
                        //JIT: Emit inline return
                        if (!stack0) { return; }
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack0 = this.$Bglevel;
                        // 7 0::hero
                        //Possible type:7 0::level
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['hero'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bghero;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[21]);
                            }
                        }
                        // 7 0::animationManager
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['animationManager'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BganimationManager;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[22]);
                            }
                        }
                        // 7 0:entities::AnimationManager
                        temp = scope0.findScopeProperty($names[23], true, false);
                        stack1 = temp.$BgAnimationManager;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[23]);
                        }
                        // 7 0::GameOverAction
                        //Possible type:7 0:entities::AnimationManager
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['GameOverAction'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$BgGameOverAction;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[24]);
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
                                   stack0.axCallProperty($names[25], [stack1], false);
                                }
                            }
                        }
                    case 398:
                        return;
                    }
                }
            }
//# sourceURL=http://jit/levels/collisions/LaserCollision/m_update.js
})