(function anonymous(context
) {
/*
	Index: 1093
	Path:  entities/SmallHero::m_initHeroGeometry
	Type:  Protected
	Kind:  Method
	Super: entities/Entity
	Return: 7 0::void
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;

             /* e */
             const __Math = context.getTopLevel(1)['$BgMath']; // :Math

    return function compiled_m_initHeroGeometry() {
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
        // local7 is assigned before read, skip init
        let local7 = undefined
        // local8 is assigned before read, skip init
        let local8 = undefined
        // local9 is assigned before read, skip init
        let local9 = undefined
        // local10 is assigned before read, skip init
        let local10 = undefined
        let stack0 = undefined;
        let stack1 = undefined;
        let stack2 = undefined;
        let stack3 = undefined;
        let stack4 = undefined;
        let stack5 = undefined;
        let stack6 = undefined;
        let stack7 = undefined;
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
                        local2 = null;
//                        stack0 = null;// JIT: redundant assigment, value unused
                        //JIT: SKIP_NULL_COERCE
                        local4 = null;
//                        stack0 = null;// JIT: redundant assigment, value unused
                        //JIT: SKIP_NULL_COERCE
                        local5 = null;
//                        stack0 = null;// JIT: redundant assigment, value unused
                        //JIT: SKIP_NULL_COERCE
                        local7 = null;
//                        stack0 = null;// JIT: redundant assigment, value unused
                        //JIT: SKIP_NULL_COERCE
                        local8 = null;
//                        stack0 = null;// JIT: redundant assigment, value unused
                        //JIT: SKIP_NULL_COERCE
                        local9 = null;
//                        stack0 = 0;// JIT: redundant assigment, value unused
                        local10 = 0;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::Array
                        stack1 = scope0.findScopeProperty($names[0], true, false);
                        //JIT: Support fast construct:Array/Object
                        stack1 = context.constructFast(stack1, [], $names[0]);
                        // 7 0::heroBodies
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Array  */ 
                        this.$BgheroBodies = stack1;
                        // 7 0::Math
                        /* GenerateLexImports GETLEX */
//                        stack0 = __Math;// JIT: redundant assigment, value unused
                        // 7 0::PI
                        //Possible type:7 0::Math
                        if (!(__Math != undefined && __Math[AX_CLASS_SYMBOL])) {
                            stack0 = __Math['PI'];
                        } else {
                            temp = __Math[AX_CLASS_SYMBOL] ? __Math : sec.box(__Math);
                            stack0 = temp.$BgPI;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[2]);
                            }
                        }
//                        stack1 = 2;// JIT: redundant assigment, value unused
                        stack0 *= 2;
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::numCircles
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::int  */ 
                        stack1 = this.$BgnumCircles;
                        stack0 /= stack1;
                        stack0 = +stack0;
                        local1 = stack0;
//                        stack0 = null;// JIT: redundant assigment, value unused
                        //JIT: SKIP_NULL_COERCE
                        local3 = null;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::Array
                        stack1 = scope0.findScopeProperty($names[0], true, false);
                        //JIT: Support fast construct:Array/Object
                        stack1 = context.constructFast(stack1, [], $names[0]);
                        // 7 0::heroEyeJoints
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Array  */ 
                        this.$BgheroEyeJoints = stack1;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::Array
                        stack1 = scope0.findScopeProperty($names[0], true, false);
                        //JIT: Support fast construct:Array/Object
                        stack1 = context.constructFast(stack1, [], $names[0]);
                        // 7 0::heroSkinJoints
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Array  */ 
                        this.$BgheroSkinJoints = stack1;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::Array
                        stack1 = scope0.findScopeProperty($names[0], true, false);
                        //JIT: Support fast construct:Array/Object
                        stack1 = context.constructFast(stack1, [], $names[0]);
                        // 7 0::heroSkeletonJoints
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Array  */ 
                        this.$BgheroSkeletonJoints = stack1;
                        // 7 0:Box2D.Collision.Shapes::b2CircleShape
                        stack0 = scope0.findScopeProperty($names[3], true, false);
                        //JIT: Support fast construct:b2CircleShape/b2Shape/Object
                        stack0 = context.constructFast(stack0, [], $names[3]);
                        //IR: Drop coerce, reason: redundant
                        local6 = stack0;
                        // 7 0:Box2D.Dynamics::b2FixtureDef
                        stack0 = scope0.findScopeProperty($names[4], true, false);
                        //JIT: Support fast construct:b2FixtureDef/Object
                        stack0 = context.constructFast(stack0, [], $names[4]);
                        //IR: Drop coerce, reason: redundant
                        local8 = stack0;
                        // 7 0:Box2D.Dynamics::b2BodyDef
                        stack0 = scope0.findScopeProperty($names[5], true, false);
                        //JIT: Support fast construct:b2BodyDef/Object
                        stack0 = context.constructFast(stack0, [], $names[5]);
                        //IR: Drop coerce, reason: redundant
                        stack1 = stack0;
                        local4 = stack1;
                        // 7 0:Box2D.Dynamics::b2Body
                        temp = scope0.findScopeProperty($names[6], true, false);
                        stack1 = temp.$Bgb2Body;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[6]);
                        }
                        // 7 0::b2_staticBody
                        //Possible type:7 0:Box2D.Dynamics::b2Body
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['b2_staticBody'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$Bgb2_staticBody;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[7]);
                            }
                        }
                        // 7 0::type
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.type = stack1;
                        } else {
                            context.setproperty($names[8], stack1, stack0);
                        }
//                        stack0 = local4;// JIT: redundant assigment, value unused
                        // 7 0::position
                        //Possible type:7 0:Box2D.Dynamics::b2BodyDef
                        if (!(local4 != undefined && local4[AX_CLASS_SYMBOL])) {
                            stack0 = local4['position'];
                        } else {
                            temp = local4[AX_CLASS_SYMBOL] ? local4 : sec.box(local4);
                            stack0 = temp.$Bgposition;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[9]);
                            }
                        }
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::initXPos
                        /* We sure that this safe get, represented in TRAIT as Slot, type: null  */ 
                        stack1 = this.$BginitXPos;
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[10], true, false);
                        stack2 = temp.$BgUtils;
                        if (stack2 === undefined || typeof stack2 === 'function') {
                            stack2 = temp.axGetProperty($names[10]);
                        }
                        // 7 0::m_scale
                        //Possible type:7 0::Utils
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['m_scale'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$Bgm_scale;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[11]);
                            }
                        }
                        stack1 /= stack2;
                        // 7 0::x
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.x = stack1;
                        } else {
                            context.setproperty($names[12], stack1, stack0);
                        }
//                        stack0 = local4;// JIT: redundant assigment, value unused
                        // 7 0::position
                        if (!(local4 != undefined && local4[AX_CLASS_SYMBOL])) {
                            stack0 = local4['position'];
                        } else {
                            temp = local4[AX_CLASS_SYMBOL] ? local4 : sec.box(local4);
                            stack0 = temp.$Bgposition;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[9]);
                            }
                        }
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::initYPos
                        //Possible type:null
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
                        stack1 = this.$BginitYPos;
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[10], true, false);
                        stack2 = temp.$BgUtils;
                        if (stack2 === undefined || typeof stack2 === 'function') {
                            stack2 = temp.axGetProperty($names[10]);
                        }
                        // 7 0::m_scale
                        //Possible type:7 0::Utils
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['m_scale'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$Bgm_scale;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[11]);
                            }
                        }
                        stack1 /= stack2;
                        // 7 0::y
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.y = stack1;
                        } else {
                            context.setproperty($names[13], stack1, stack0);
                        }
                        // 7 0:Box2D.Collision.Shapes::b2CircleShape
                        stack0 = scope0.findScopeProperty($names[3], true, false);
                        stack1 = 0.01;
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[10], true, false);
                        stack2 = temp.$BgUtils;
                        if (stack2 === undefined || typeof stack2 === 'function') {
                            stack2 = temp.axGetProperty($names[10]);
                        }
                        // 7 0::m_scale
                        //Possible type:7 0::Utils
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['m_scale'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$Bgm_scale;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[11]);
                            }
                        }
                        stack1 /= stack2;
                        //JIT: Support fast construct:b2CircleShape/b2Shape/Object
                        stack0 = context.constructFast(stack0, [stack1], $names[3]);
                        //IR: Drop coerce, reason: redundant
                        local6 = stack0;
//                        stack0 = local8;// JIT: redundant assigment, value unused
//                        stack1 = local6;// JIT: redundant assigment, value unused
                        // 7 0::shape
                        if (!(local8 != undefined && local8[AX_CLASS_SYMBOL])){
                            local8.shape = local6;
                        } else {
                            context.setproperty($names[14], local6, local8);
                        }
//                        stack0 = local8;// JIT: redundant assigment, value unused
//                        stack1 = 0;// JIT: redundant assigment, value unused
                        // 7 0::density
                        if (!(local8 != undefined && local8[AX_CLASS_SYMBOL])){
                            local8.density = 0;
                        } else {
                            context.setproperty($names[15], 0, local8);
                        }
//                        stack0 = local8;// JIT: redundant assigment, value unused
//                        stack1 = 0;// JIT: redundant assigment, value unused
                        // 7 0::friction
                        if (!(local8 != undefined && local8[AX_CLASS_SYMBOL])){
                            local8.friction = 0;
                        } else {
                            context.setproperty($names[16], 0, local8);
                        }
//                        stack0 = local8;// JIT: redundant assigment, value unused
                        // 7 0::filter
                        //Possible type:7 0:Box2D.Collision.Shapes::b2CircleShape
                        if (!(local8 != undefined && local8[AX_CLASS_SYMBOL])) {
                            stack0 = local8['filter'];
                        } else {
                            temp = local8[AX_CLASS_SYMBOL] ? local8 : sec.box(local8);
                            stack0 = temp.$Bgfilter;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[17]);
                            }
                        }
//                        stack1 = -1;// JIT: redundant assigment, value unused
                        // 7 0::groupIndex
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.groupIndex = -1;
                        } else {
                            context.setproperty($names[18], -1, stack0);
                        }
//                        stack0 = local8;// JIT: redundant assigment, value unused
//                        stack1 = 0;// JIT: redundant assigment, value unused
                        // 7 0::restitution
                        if (!(local8 != undefined && local8[AX_CLASS_SYMBOL])){
                            local8.restitution = 0;
                        } else {
                            context.setproperty($names[19], 0, local8);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[10], true, false);
                        stack1 = temp.$BgUtils;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[10]);
                        }
                        // 7 0::m_world
                        //Possible type:7 0::Utils
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['m_world'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$Bgm_world;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[20]);
                            }
                        }
//                        stack2 = local4;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack1, ((_a !== 'object' && _a !== 'function' ) || stack1 == null || stack1[AX_CLASS_SYMBOL]))) {
                           stack1 = stack1.CreateBody(local4);
                        } else {
                            // 7 0::CreateBody
                            {
                                let t = stack1;
                                const m = t.$BgCreateBody || (t = sec.box(stack1), t.$BgCreateBody);
                                if( typeof m === "function" ) { 
                                    stack1 = t.$BgCreateBody (local4);
                                } else { 
                                    stack1 = stack1.axCallProperty($names[21], [local4], false);
                                }
                            }
                        }
                        // 7 0::heart
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0:Box2D.Dynamics::b2Body  */ 
                        this.$Bgheart = stack1;
                        // 7 0:levels::UserData
                        stack0 = scope0.findScopeProperty($names[22], true, false);
//                        stack1 = true;// JIT: redundant assigment, value unused
                        //JIT: Support fast construct:UserData/Object
                        stack0 = context.constructFast(stack0, [true], $names[22]);
                        //IR: Drop coerce, reason: redundant
                        stack1 = stack0;
                        local9 = stack1;
//                        stack1 = true;// JIT: redundant assigment, value unused
                        // 7 0::isHeroBody
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.isHeroBody = true;
                        } else {
                            context.setproperty($names[23], true, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::heart
                        //Possible type:7 0:levels::UserData
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Dynamics::b2Body  */ 
                        stack0 = this.$Bgheart;
//                        stack1 = local9;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.SetUserData(local9);
                        } else {
                            // 7 0::SetUserData
                            {
                                let t = stack0;
                                const m = t.$BgSetUserData || (t = sec.box(stack0), t.$BgSetUserData);
                                if( typeof m === "function" ) { 
                                    m.call(t, local9);
                                } else { 
                                   stack0.axCallProperty($names[24], [local9], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::heart
                        //Possible type:7 0:Box2D.Dynamics::b2Body
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Dynamics::b2Body  */ 
                        stack0 = this.$Bgheart;
//                        stack1 = local8;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.CreateFixture(local8);
                        } else {
                            // 7 0::CreateFixture
                            {
                                let t = stack0;
                                const m = t.$BgCreateFixture || (t = sec.box(stack0), t.$BgCreateFixture);
                                if( typeof m === "function" ) { 
                                    m.call(t, local8);
                                } else { 
                                   stack0.axCallProperty($names[25], [local8], false);
                                }
                            }
                        }
                        // 7 0:Box2D.Dynamics::b2FixtureDef
                        stack0 = scope0.findScopeProperty($names[4], true, false);
                        //JIT: Support fast construct:b2FixtureDef/Object
                        stack0 = context.constructFast(stack0, [], $names[4]);
                        //IR: Drop coerce, reason: redundant
                        local8 = stack0;
                        // 7 0:Box2D.Dynamics::b2BodyDef
                        stack0 = scope0.findScopeProperty($names[5], true, false);
                        //JIT: Support fast construct:b2BodyDef/Object
                        stack0 = context.constructFast(stack0, [], $names[5]);
                        //IR: Drop coerce, reason: redundant
                        stack1 = stack0;
                        local4 = stack1;
                        // 7 0:Box2D.Dynamics::b2Body
                        temp = scope0.findScopeProperty($names[6], true, false);
                        stack1 = temp.$Bgb2Body;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[6]);
                        }
                        // 7 0::b2_staticBody
                        //Possible type:7 0:Box2D.Dynamics::b2Body
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['b2_staticBody'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$Bgb2_staticBody;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[7]);
                            }
                        }
                        // 7 0::type
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.type = stack1;
                        } else {
                            context.setproperty($names[8], stack1, stack0);
                        }
//                        stack0 = local4;// JIT: redundant assigment, value unused
                        // 7 0::position
                        //Possible type:7 0:Box2D.Dynamics::b2BodyDef
                        if (!(local4 != undefined && local4[AX_CLASS_SYMBOL])) {
                            stack0 = local4['position'];
                        } else {
                            temp = local4[AX_CLASS_SYMBOL] ? local4 : sec.box(local4);
                            stack0 = temp.$Bgposition;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[9]);
                            }
                        }
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::initXPos
                        /* We sure that this safe get, represented in TRAIT as Slot, type: null  */ 
                        stack1 = this.$BginitXPos;
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[10], true, false);
                        stack2 = temp.$BgUtils;
                        if (stack2 === undefined || typeof stack2 === 'function') {
                            stack2 = temp.axGetProperty($names[10]);
                        }
                        // 7 0::m_scale
                        //Possible type:7 0::Utils
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['m_scale'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$Bgm_scale;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[11]);
                            }
                        }
                        stack1 /= stack2;
                        // 7 0::x
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.x = stack1;
                        } else {
                            context.setproperty($names[12], stack1, stack0);
                        }
//                        stack0 = local4;// JIT: redundant assigment, value unused
                        // 7 0::position
                        if (!(local4 != undefined && local4[AX_CLASS_SYMBOL])) {
                            stack0 = local4['position'];
                        } else {
                            temp = local4[AX_CLASS_SYMBOL] ? local4 : sec.box(local4);
                            stack0 = temp.$Bgposition;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[9]);
                            }
                        }
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::initYPos
                        //Possible type:null
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
                        stack1 = this.$BginitYPos;
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[10], true, false);
                        stack2 = temp.$BgUtils;
                        if (stack2 === undefined || typeof stack2 === 'function') {
                            stack2 = temp.axGetProperty($names[10]);
                        }
                        // 7 0::m_scale
                        //Possible type:7 0::Utils
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['m_scale'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$Bgm_scale;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[11]);
                            }
                        }
                        stack1 /= stack2;
                        // 7 0::y
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.y = stack1;
                        } else {
                            context.setproperty($names[13], stack1, stack0);
                        }
                        // 7 0:Box2D.Collision.Shapes::b2PolygonShape
                        stack0 = scope0.findScopeProperty($names[26], true, false);
                        //JIT: Support fast construct:b2PolygonShape/b2Shape/Object
                        stack0 = context.constructFast(stack0, [], $names[26]);
                        //IR: Drop coerce, reason: redundant
                        stack1 = stack0;
                        local7 = stack1;
                        stack1 = 16;
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[10], true, false);
                        stack2 = temp.$BgUtils;
                        if (stack2 === undefined || typeof stack2 === 'function') {
                            stack2 = temp.axGetProperty($names[10]);
                        }
                        // 7 0::m_scale
                        //Possible type:7 0::Utils
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['m_scale'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$Bgm_scale;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[11]);
                            }
                        }
                        stack1 /= stack2;
                        stack2 = 16;
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[10], true, false);
                        stack3 = temp.$BgUtils;
                        if (stack3 === undefined || typeof stack3 === 'function') {
                            stack3 = temp.axGetProperty($names[10]);
                        }
                        // 7 0::m_scale
                        //Possible type:7 0::Utils
                        if (!(stack3 != undefined && stack3[AX_CLASS_SYMBOL])) {
                            stack3 = stack3['m_scale'];
                        } else {
                            temp = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);
                            stack3 = temp.$Bgm_scale;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[11]);
                            }
                        }
                        stack2 /= stack3;
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.SetAsBox(stack1, stack2);
                        } else {
                            // 7 0::SetAsBox
                            {
                                let t = stack0;
                                const m = t.$BgSetAsBox || (t = sec.box(stack0), t.$BgSetAsBox);
                                if( typeof m === "function" ) { 
                                    m.call(t, stack1, stack2);
                                } else { 
                                   stack0.axCallProperty($names[27], [stack1, stack2], false);
                                }
                            }
                        }
//                        stack0 = local8;// JIT: redundant assigment, value unused
//                        stack1 = local7;// JIT: redundant assigment, value unused
                        // 7 0::shape
                        if (!(local8 != undefined && local8[AX_CLASS_SYMBOL])){
                            local8.shape = local7;
                        } else {
                            context.setproperty($names[14], local7, local8);
                        }
//                        stack0 = local8;// JIT: redundant assigment, value unused
//                        stack1 = 0;// JIT: redundant assigment, value unused
                        // 7 0::density
                        if (!(local8 != undefined && local8[AX_CLASS_SYMBOL])){
                            local8.density = 0;
                        } else {
                            context.setproperty($names[15], 0, local8);
                        }
//                        stack0 = local8;// JIT: redundant assigment, value unused
//                        stack1 = 0;// JIT: redundant assigment, value unused
                        // 7 0::friction
                        if (!(local8 != undefined && local8[AX_CLASS_SYMBOL])){
                            local8.friction = 0;
                        } else {
                            context.setproperty($names[16], 0, local8);
                        }
//                        stack0 = local8;// JIT: redundant assigment, value unused
//                        stack1 = 0;// JIT: redundant assigment, value unused
                        // 7 0::restitution
                        if (!(local8 != undefined && local8[AX_CLASS_SYMBOL])){
                            local8.restitution = 0;
                        } else {
                            context.setproperty($names[19], 0, local8);
                        }
//                        stack0 = local8;// JIT: redundant assigment, value unused
                        // 7 0::filter
                        //Possible type:7 0:Box2D.Collision.Shapes::b2PolygonShape
                        if (!(local8 != undefined && local8[AX_CLASS_SYMBOL])) {
                            stack0 = local8['filter'];
                        } else {
                            temp = local8[AX_CLASS_SYMBOL] ? local8 : sec.box(local8);
                            stack0 = temp.$Bgfilter;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[17]);
                            }
                        }
//                        stack1 = 0;// JIT: redundant assigment, value unused
                        // 7 0::categoryBits
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.categoryBits = 0;
                        } else {
                            context.setproperty($names[28], 0, stack0);
                        }
//                        stack0 = local8;// JIT: redundant assigment, value unused
                        // 7 0::filter
                        if (!(local8 != undefined && local8[AX_CLASS_SYMBOL])) {
                            stack0 = local8['filter'];
                        } else {
                            temp = local8[AX_CLASS_SYMBOL] ? local8 : sec.box(local8);
                            stack0 = temp.$Bgfilter;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[17]);
                            }
                        }
//                        stack1 = 0;// JIT: redundant assigment, value unused
                        // 7 0::maskBits
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.maskBits = 0;
                        } else {
                            context.setproperty($names[29], 0, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[10], true, false);
                        stack1 = temp.$BgUtils;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[10]);
                        }
                        // 7 0::m_world
                        //Possible type:7 0::Utils
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['m_world'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$Bgm_world;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[20]);
                            }
                        }
//                        stack2 = local4;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack1, ((_a !== 'object' && _a !== 'function' ) || stack1 == null || stack1[AX_CLASS_SYMBOL]))) {
                           stack1 = stack1.CreateBody(local4);
                        } else {
                            // 7 0::CreateBody
                            {
                                let t = stack1;
                                const m = t.$BgCreateBody || (t = sec.box(stack1), t.$BgCreateBody);
                                if( typeof m === "function" ) { 
                                    stack1 = t.$BgCreateBody (local4);
                                } else { 
                                    stack1 = stack1.axCallProperty($names[21], [local4], false);
                                }
                            }
                        }
                        // 7 0::aabbBody
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0:Box2D.Dynamics::b2Body  */ 
                        this.$BgaabbBody = stack1;
                        // 7 0:levels::UserData
                        stack0 = scope0.findScopeProperty($names[22], true, false);
//                        stack1 = true;// JIT: redundant assigment, value unused
                        //JIT: Support fast construct:UserData/Object
                        stack0 = context.constructFast(stack0, [true], $names[22]);
                        //IR: Drop coerce, reason: redundant
                        stack1 = stack0;
                        local9 = stack1;
//                        stack1 = true;// JIT: redundant assigment, value unused
                        // 7 0::isHeroBody
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.isHeroBody = true;
                        } else {
                            context.setproperty($names[23], true, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::aabbBody
                        //Possible type:7 0:levels::UserData
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Dynamics::b2Body  */ 
                        stack0 = this.$BgaabbBody;
//                        stack1 = local9;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.SetUserData(local9);
                        } else {
                            // 7 0::SetUserData
                            {
                                let t = stack0;
                                const m = t.$BgSetUserData || (t = sec.box(stack0), t.$BgSetUserData);
                                if( typeof m === "function" ) { 
                                    m.call(t, local9);
                                } else { 
                                   stack0.axCallProperty($names[24], [local9], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::aabbBody
                        //Possible type:7 0:Box2D.Dynamics::b2Body
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Dynamics::b2Body  */ 
                        stack0 = this.$BgaabbBody;
//                        stack1 = local8;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.CreateFixture(local8);
                        } else {
                            // 7 0::CreateFixture
                            {
                                let t = stack0;
                                const m = t.$BgCreateFixture || (t = sec.box(stack0), t.$BgCreateFixture);
                                if( typeof m === "function" ) { 
                                    m.call(t, local8);
                                } else { 
                                   stack0.axCallProperty($names[25], [local8], false);
                                }
                            }
                        }
                        // 7 0:Box2D.Dynamics::b2FixtureDef
                        stack0 = scope0.findScopeProperty($names[4], true, false);
                        //JIT: Support fast construct:b2FixtureDef/Object
                        stack0 = context.constructFast(stack0, [], $names[4]);
                        //IR: Drop coerce, reason: redundant
                        local8 = stack0;
                        // 7 0:Box2D.Dynamics::b2BodyDef
                        stack0 = scope0.findScopeProperty($names[5], true, false);
                        //JIT: Support fast construct:b2BodyDef/Object
                        stack0 = context.constructFast(stack0, [], $names[5]);
                        //IR: Drop coerce, reason: redundant
                        stack1 = stack0;
                        local4 = stack1;
                        // 7 0:Box2D.Dynamics::b2Body
                        temp = scope0.findScopeProperty($names[6], true, false);
                        stack1 = temp.$Bgb2Body;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[6]);
                        }
                        // 7 0::b2_dynamicBody
                        //Possible type:7 0:Box2D.Dynamics::b2Body
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['b2_dynamicBody'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$Bgb2_dynamicBody;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[30]);
                            }
                        }
                        // 7 0::type
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.type = stack1;
                        } else {
                            context.setproperty($names[8], stack1, stack0);
                        }
//                        stack0 = local4;// JIT: redundant assigment, value unused
//                        stack1 = false;// JIT: redundant assigment, value unused
                        // 7 0::fixedRotation
                        if (!(local4 != undefined && local4[AX_CLASS_SYMBOL])){
                            local4.fixedRotation = false;
                        } else {
                            context.setproperty($names[31], false, local4);
                        }
//                        stack0 = local4;// JIT: redundant assigment, value unused
//                        stack1 = 0.5;// JIT: redundant assigment, value unused
                        // 7 0::linearDamping
                        if (!(local4 != undefined && local4[AX_CLASS_SYMBOL])){
                            local4.linearDamping = 0.5;
                        } else {
                            context.setproperty($names[32], 0.5, local4);
                        }
//                        stack0 = local4;// JIT: redundant assigment, value unused
//                        stack1 = 0.5;// JIT: redundant assigment, value unused
                        // 7 0::angularDamping
                        if (!(local4 != undefined && local4[AX_CLASS_SYMBOL])){
                            local4.angularDamping = 0.5;
                        } else {
                            context.setproperty($names[33], 0.5, local4);
                        }
//                        stack0 = local4;// JIT: redundant assigment, value unused
                        // 7 0::position
                        //Possible type:7 0:Box2D.Dynamics::b2BodyDef
                        if (!(local4 != undefined && local4[AX_CLASS_SYMBOL])) {
                            stack0 = local4['position'];
                        } else {
                            temp = local4[AX_CLASS_SYMBOL] ? local4 : sec.box(local4);
                            stack0 = temp.$Bgposition;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[9]);
                            }
                        }
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::initXPos
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: null  */ 
                        stack1 = this.$BginitXPos;
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[10], true, false);
                        stack2 = temp.$BgUtils;
                        if (stack2 === undefined || typeof stack2 === 'function') {
                            stack2 = temp.axGetProperty($names[10]);
                        }
                        // 7 0::m_scale
                        //Possible type:7 0::Utils
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['m_scale'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$Bgm_scale;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[11]);
                            }
                        }
                        stack1 /= stack2;
                        // 7 0::x
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.x = stack1;
                        } else {
                            context.setproperty($names[12], stack1, stack0);
                        }
//                        stack0 = local4;// JIT: redundant assigment, value unused
                        // 7 0::position
                        if (!(local4 != undefined && local4[AX_CLASS_SYMBOL])) {
                            stack0 = local4['position'];
                        } else {
                            temp = local4[AX_CLASS_SYMBOL] ? local4 : sec.box(local4);
                            stack0 = temp.$Bgposition;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[9]);
                            }
                        }
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::initYPos
                        //Possible type:null
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
                        stack1 = this.$BginitYPos;
//                        stack2 = 7;// JIT: redundant assigment, value unused
                        stack1 += 7;
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[10], true, false);
                        stack2 = temp.$BgUtils;
                        if (stack2 === undefined || typeof stack2 === 'function') {
                            stack2 = temp.axGetProperty($names[10]);
                        }
                        // 7 0::m_scale
                        //Possible type:7 0::Utils
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['m_scale'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$Bgm_scale;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[11]);
                            }
                        }
                        stack1 /= stack2;
                        // 7 0::y
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.y = stack1;
                        } else {
                            context.setproperty($names[13], stack1, stack0);
                        }
                        // 7 0:Box2D.Collision.Shapes::b2CircleShape
                        stack0 = scope0.findScopeProperty($names[3], true, false);
                        stack1 = 6;
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[10], true, false);
                        stack2 = temp.$BgUtils;
                        if (stack2 === undefined || typeof stack2 === 'function') {
                            stack2 = temp.axGetProperty($names[10]);
                        }
                        // 7 0::m_scale
                        //Possible type:7 0::Utils
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['m_scale'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$Bgm_scale;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[11]);
                            }
                        }
                        stack1 /= stack2;
                        //JIT: Support fast construct:b2CircleShape/b2Shape/Object
                        stack0 = context.constructFast(stack0, [stack1], $names[3]);
                        //IR: Drop coerce, reason: redundant
                        local6 = stack0;
//                        stack0 = local8;// JIT: redundant assigment, value unused
//                        stack1 = local6;// JIT: redundant assigment, value unused
                        // 7 0::shape
                        if (!(local8 != undefined && local8[AX_CLASS_SYMBOL])){
                            local8.shape = local6;
                        } else {
                            context.setproperty($names[14], local6, local8);
                        }
//                        stack0 = local8;// JIT: redundant assigment, value unused
//                        stack1 = 0;// JIT: redundant assigment, value unused
                        // 7 0::density
                        if (!(local8 != undefined && local8[AX_CLASS_SYMBOL])){
                            local8.density = 0;
                        } else {
                            context.setproperty($names[15], 0, local8);
                        }
//                        stack0 = local8;// JIT: redundant assigment, value unused
//                        stack1 = 0;// JIT: redundant assigment, value unused
                        // 7 0::friction
                        if (!(local8 != undefined && local8[AX_CLASS_SYMBOL])){
                            local8.friction = 0;
                        } else {
                            context.setproperty($names[16], 0, local8);
                        }
//                        stack0 = local8;// JIT: redundant assigment, value unused
//                        stack1 = 0;// JIT: redundant assigment, value unused
                        // 7 0::restitution
                        if (!(local8 != undefined && local8[AX_CLASS_SYMBOL])){
                            local8.restitution = 0;
                        } else {
                            context.setproperty($names[19], 0, local8);
                        }
//                        stack0 = local8;// JIT: redundant assigment, value unused
                        // 7 0::filter
                        //Possible type:7 0:Box2D.Collision.Shapes::b2CircleShape
                        if (!(local8 != undefined && local8[AX_CLASS_SYMBOL])) {
                            stack0 = local8['filter'];
                        } else {
                            temp = local8[AX_CLASS_SYMBOL] ? local8 : sec.box(local8);
                            stack0 = temp.$Bgfilter;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[17]);
                            }
                        }
//                        stack1 = 4;// JIT: redundant assigment, value unused
                        // 7 0::categoryBits
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.categoryBits = 4;
                        } else {
                            context.setproperty($names[28], 4, stack0);
                        }
//                        stack0 = local8;// JIT: redundant assigment, value unused
                        // 7 0::filter
                        if (!(local8 != undefined && local8[AX_CLASS_SYMBOL])) {
                            stack0 = local8['filter'];
                        } else {
                            temp = local8[AX_CLASS_SYMBOL] ? local8 : sec.box(local8);
                            stack0 = temp.$Bgfilter;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[17]);
                            }
                        }
//                        stack1 = 4;// JIT: redundant assigment, value unused
                        // 7 0::maskBits
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.maskBits = 4;
                        } else {
                            context.setproperty($names[29], 4, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[10], true, false);
                        stack1 = temp.$BgUtils;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[10]);
                        }
                        // 7 0::m_world
                        //Possible type:7 0::Utils
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['m_world'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$Bgm_world;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[20]);
                            }
                        }
//                        stack2 = local4;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack1, ((_a !== 'object' && _a !== 'function' ) || stack1 == null || stack1[AX_CLASS_SYMBOL]))) {
                           stack1 = stack1.CreateBody(local4);
                        } else {
                            // 7 0::CreateBody
                            {
                                let t = stack1;
                                const m = t.$BgCreateBody || (t = sec.box(stack1), t.$BgCreateBody);
                                if( typeof m === "function" ) { 
                                    stack1 = t.$BgCreateBody (local4);
                                } else { 
                                    stack1 = stack1.axCallProperty($names[21], [local4], false);
                                }
                            }
                        }
                        // 7 0::eye_1
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0:Box2D.Dynamics::b2Body  */ 
                        this.$Bgeye_1 = stack1;
                        // 7 0:levels::UserData
                        stack0 = scope0.findScopeProperty($names[22], true, false);
//                        stack1 = true;// JIT: redundant assigment, value unused
                        //JIT: Support fast construct:UserData/Object
                        stack0 = context.constructFast(stack0, [true], $names[22]);
                        //IR: Drop coerce, reason: redundant
                        stack1 = stack0;
                        local9 = stack1;
//                        stack1 = true;// JIT: redundant assigment, value unused
                        // 7 0::isHeroBody
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.isHeroBody = true;
                        } else {
                            context.setproperty($names[23], true, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::eye_1
                        //Possible type:7 0:levels::UserData
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Dynamics::b2Body  */ 
                        stack0 = this.$Bgeye_1;
//                        stack1 = local9;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.SetUserData(local9);
                        } else {
                            // 7 0::SetUserData
                            {
                                let t = stack0;
                                const m = t.$BgSetUserData || (t = sec.box(stack0), t.$BgSetUserData);
                                if( typeof m === "function" ) { 
                                    m.call(t, local9);
                                } else { 
                                   stack0.axCallProperty($names[24], [local9], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::eye_1
                        //Possible type:7 0:Box2D.Dynamics::b2Body
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Dynamics::b2Body  */ 
                        stack0 = this.$Bgeye_1;
//                        stack1 = local8;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.CreateFixture(local8);
                        } else {
                            // 7 0::CreateFixture
                            {
                                let t = stack0;
                                const m = t.$BgCreateFixture || (t = sec.box(stack0), t.$BgCreateFixture);
                                if( typeof m === "function" ) { 
                                    m.call(t, local8);
                                } else { 
                                   stack0.axCallProperty($names[25], [local8], false);
                                }
                            }
                        }
                        // 7 0:Box2D.Dynamics.Joints::b2DistanceJointDef
                        stack0 = scope0.findScopeProperty($names[34], true, false);
                        //JIT: Support fast construct:b2DistanceJointDef/b2JointDef/Object
                        stack0 = context.constructFast(stack0, [], $names[34]);
                        //IR: Drop coerce, reason: redundant
                        stack1 = stack0;
                        local5 = stack1;
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::heart
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Dynamics::b2Body  */ 
                        stack1 = this.$Bgheart;
//                        stack2 = this;// JIT: redundant assigment, value unused
                        // 7 0::eye_1
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Dynamics::b2Body  */ 
                        stack2 = this.$Bgeye_1;
//                        stack3 = this;// JIT: redundant assigment, value unused
                        // 7 0::heart
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Dynamics::b2Body  */ 
                        stack3 = this.$Bgheart;
                        if (!(_a = typeof stack3, ((_a !== 'object' && _a !== 'function' ) || stack3 == null || stack3[AX_CLASS_SYMBOL]))) {
                           stack3 = stack3.GetPosition();
                        } else {
                            // 7 0::GetPosition
                            {
                                let t = stack3;
                                const m = t.$BgGetPosition || (t = sec.box(stack3), t.$BgGetPosition);
                                if( typeof m === "function" ) { 
                                    stack3 = t.$BgGetPosition ();
                                } else { 
                                    stack3 = stack3.axCallProperty($names[35], [], false);
                                }
                            }
                        }
//                        stack4 = this;// JIT: redundant assigment, value unused
                        // 7 0::eye_1
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Dynamics::b2Body  */ 
                        stack4 = this.$Bgeye_1;
                        if (!(_a = typeof stack4, ((_a !== 'object' && _a !== 'function' ) || stack4 == null || stack4[AX_CLASS_SYMBOL]))) {
                           stack4 = stack4.GetPosition();
                        } else {
                            // 7 0::GetPosition
                            {
                                let t = stack4;
                                const m = t.$BgGetPosition || (t = sec.box(stack4), t.$BgGetPosition);
                                if( typeof m === "function" ) { 
                                    stack4 = t.$BgGetPosition ();
                                } else { 
                                    stack4 = stack4.axCallProperty($names[35], [], false);
                                }
                            }
                        }
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.Initialize(stack1, stack2, stack3, stack4);
                        } else {
                            // 7 0::Initialize
                            {
                                let t = stack0;
                                const m = t.$BgInitialize || (t = sec.box(stack0), t.$BgInitialize);
                                if( typeof m === "function" ) { 
                                    m.call(t, stack1, stack2, stack3, stack4);
                                } else { 
                                   stack0.axCallProperty($names[36], [stack1, stack2, stack3, stack4], false);
                                }
                            }
                        }
//                        stack0 = local5;// JIT: redundant assigment, value unused
//                        stack1 = 10;// JIT: redundant assigment, value unused
                        // 7 0::frequencyHz
                        if (!(local5 != undefined && local5[AX_CLASS_SYMBOL])){
                            local5.frequencyHz = 10;
                        } else {
                            context.setproperty($names[37], 10, local5);
                        }
//                        stack0 = local5;// JIT: redundant assigment, value unused
//                        stack1 = 0.1;// JIT: redundant assigment, value unused
                        // 7 0::dampingRatio
                        if (!(local5 != undefined && local5[AX_CLASS_SYMBOL])){
                            local5.dampingRatio = 0.1;
                        } else {
                            context.setproperty($names[38], 0.1, local5);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::heroEyeJoints
                        //Possible type:7 0:Box2D.Dynamics.Joints::b2DistanceJointDef
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack0 = this.$BgheroEyeJoints;
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[10], true, false);
                        stack1 = temp.$BgUtils;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[10]);
                        }
                        // 7 0::m_world
                        //Possible type:7 0::Utils
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['m_world'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$Bgm_world;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[20]);
                            }
                        }
//                        stack2 = local5;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack1, ((_a !== 'object' && _a !== 'function' ) || stack1 == null || stack1[AX_CLASS_SYMBOL]))) {
                           stack1 = stack1.CreateJoint(local5);
                        } else {
                            // 7 0::CreateJoint
                            {
                                let t = stack1;
                                const m = t.$BgCreateJoint || (t = sec.box(stack1), t.$BgCreateJoint);
                                if( typeof m === "function" ) { 
                                    stack1 = t.$BgCreateJoint (local5);
                                } else { 
                                    stack1 = stack1.axCallProperty($names[39], [local5], false);
                                }
                            }
                        }
                        // 7 0:Box2D.Dynamics.Joints::b2DistanceJoint
                        temp = scope0.findScopeProperty($names[40], true, false);
                        stack2 = temp.$Bgb2DistanceJoint;
                        if (stack2 === undefined || typeof stack2 === 'function') {
                            stack2 = temp.axGetProperty($names[40]);
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
                                   stack0.axCallProperty($names[41], [stack1], false);
                                }
                            }
                        }
                        // 7 0:Box2D.Dynamics::b2FixtureDef
                        stack0 = scope0.findScopeProperty($names[4], true, false);
                        //JIT: Support fast construct:b2FixtureDef/Object
                        stack0 = context.constructFast(stack0, [], $names[4]);
                        //IR: Drop coerce, reason: redundant
                        local8 = stack0;
//                        stack0 = 0;// JIT: redundant assigment, value unused
                        local10 = 0;
                        { p = 1103; continue; };
                    case 776:
                        // 7 0:Box2D.Dynamics::b2BodyDef
                        stack0 = scope0.findScopeProperty($names[5], true, false);
                        //JIT: Support fast construct:b2BodyDef/Object
                        stack0 = context.constructFast(stack0, [], $names[5]);
                        //IR: Drop coerce, reason: redundant
                        stack1 = stack0;
                        local4 = stack1;
                        // 7 0:Box2D.Dynamics::b2Body
                        temp = scope0.findScopeProperty($names[6], true, false);
                        stack1 = temp.$Bgb2Body;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[6]);
                        }
                        // 7 0::b2_dynamicBody
                        //Possible type:7 0:Box2D.Dynamics::b2Body
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['b2_dynamicBody'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$Bgb2_dynamicBody;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[30]);
                            }
                        }
                        // 7 0::type
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.type = stack1;
                        } else {
                            context.setproperty($names[8], stack1, stack0);
                        }
//                        stack0 = local4;// JIT: redundant assigment, value unused
//                        stack1 = true;// JIT: redundant assigment, value unused
                        // 7 0::fixedRotation
                        if (!(local4 != undefined && local4[AX_CLASS_SYMBOL])){
                            local4.fixedRotation = true;
                        } else {
                            context.setproperty($names[31], true, local4);
                        }
//                        stack0 = local4;// JIT: redundant assigment, value unused
                        // 7 0::position
                        //Possible type:7 0:Box2D.Dynamics::b2BodyDef
                        if (!(local4 != undefined && local4[AX_CLASS_SYMBOL])) {
                            stack0 = local4['position'];
                        } else {
                            temp = local4[AX_CLASS_SYMBOL] ? local4 : sec.box(local4);
                            stack0 = temp.$Bgposition;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[9]);
                            }
                        }
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::initXPos
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: null  */ 
                        stack1 = this.$BginitXPos;
                        // 7 0::Math
                        /* GenerateLexImports GETLEX */
//                        stack2 = __Math;// JIT: redundant assigment, value unused
                        stack3 = local10;
//                        stack4 = local1;// JIT: redundant assigment, value unused
                        stack3 *= local1;
                        if (!(_a = typeof __Math, ((_a !== 'object' && _a !== 'function' ) || __Math == null || __Math[AX_CLASS_SYMBOL]))) {
                           stack2 = __Math.sin(stack3);
                        } else {
                            // 7 0::sin
                            {
                                let t = __Math;
                                const m = t.$Bgsin || (t = sec.box(__Math), t.$Bgsin);
                                if( typeof m === "function" ) { 
                                    stack2 = t.$Bgsin (stack3);
                                } else { 
                                    stack2 = __Math.axCallProperty($names[42], [stack3], false);
                                }
                            }
                        }
//                        stack3 = this;// JIT: redundant assigment, value unused
                        // 7 0::heroRadius
                        //Possible type:7 0:Box2D.Dynamics::b2Body
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::int  */ 
                        stack3 = this.$BgheroRadius;
//                        stack4 = 1;// JIT: redundant assigment, value unused
                        stack3 *= 1;
                        stack2 *= stack3;
                        stack1 += stack2;
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[10], true, false);
                        stack2 = temp.$BgUtils;
                        if (stack2 === undefined || typeof stack2 === 'function') {
                            stack2 = temp.axGetProperty($names[10]);
                        }
                        // 7 0::m_scale
                        //Possible type:7 0::Utils
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['m_scale'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$Bgm_scale;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[11]);
                            }
                        }
                        stack1 /= stack2;
                        // 7 0::x
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.x = stack1;
                        } else {
                            context.setproperty($names[12], stack1, stack0);
                        }
//                        stack0 = local4;// JIT: redundant assigment, value unused
                        // 7 0::position
                        if (!(local4 != undefined && local4[AX_CLASS_SYMBOL])) {
                            stack0 = local4['position'];
                        } else {
                            temp = local4[AX_CLASS_SYMBOL] ? local4 : sec.box(local4);
                            stack0 = temp.$Bgposition;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[9]);
                            }
                        }
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::initYPos
                        //Possible type:null
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
                        stack1 = this.$BginitYPos;
                        // 7 0::Math
                        /* GenerateLexImports GETLEX */
//                        stack2 = __Math;// JIT: redundant assigment, value unused
                        stack3 = local10;
//                        stack4 = local1;// JIT: redundant assigment, value unused
                        stack3 *= local1;
                        if (!(_a = typeof __Math, ((_a !== 'object' && _a !== 'function' ) || __Math == null || __Math[AX_CLASS_SYMBOL]))) {
                           stack2 = __Math.cos(stack3);
                        } else {
                            // 7 0::cos
                            {
                                let t = __Math;
                                const m = t.$Bgcos || (t = sec.box(__Math), t.$Bgcos);
                                if( typeof m === "function" ) { 
                                    stack2 = t.$Bgcos (stack3);
                                } else { 
                                    stack2 = __Math.axCallProperty($names[43], [stack3], false);
                                }
                            }
                        }
//                        stack3 = this;// JIT: redundant assigment, value unused
                        // 7 0::heroRadius
                        //Possible type:7 0::int
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::int  */ 
                        stack3 = this.$BgheroRadius;
//                        stack4 = 1;// JIT: redundant assigment, value unused
                        stack3 *= 1;
                        stack2 *= stack3;
                        stack1 += stack2;
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[10], true, false);
                        stack2 = temp.$BgUtils;
                        if (stack2 === undefined || typeof stack2 === 'function') {
                            stack2 = temp.axGetProperty($names[10]);
                        }
                        // 7 0::m_scale
                        //Possible type:7 0::Utils
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['m_scale'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$Bgm_scale;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[11]);
                            }
                        }
                        stack1 /= stack2;
                        // 7 0::y
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.y = stack1;
                        } else {
                            context.setproperty($names[13], stack1, stack0);
                        }
//                        stack0 = local4;// JIT: redundant assigment, value unused
//                        stack1 = 0.1;// JIT: redundant assigment, value unused
                        // 7 0::linearDamping
                        if (!(local4 != undefined && local4[AX_CLASS_SYMBOL])){
                            local4.linearDamping = 0.1;
                        } else {
                            context.setproperty($names[32], 0.1, local4);
                        }
//                        stack0 = local4;// JIT: redundant assigment, value unused
//                        stack1 = 0;// JIT: redundant assigment, value unused
                        // 7 0::angularDamping
                        if (!(local4 != undefined && local4[AX_CLASS_SYMBOL])){
                            local4.angularDamping = 0;
                        } else {
                            context.setproperty($names[33], 0, local4);
                        }
                        // 7 0:Box2D.Collision.Shapes::b2CircleShape
                        stack0 = scope0.findScopeProperty($names[3], true, false);
                        stack1 = 2;
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[10], true, false);
                        stack2 = temp.$BgUtils;
                        if (stack2 === undefined || typeof stack2 === 'function') {
                            stack2 = temp.axGetProperty($names[10]);
                        }
                        // 7 0::m_scale
                        //Possible type:7 0::Utils
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['m_scale'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$Bgm_scale;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[11]);
                            }
                        }
                        stack1 /= stack2;
                        //JIT: Support fast construct:b2CircleShape/b2Shape/Object
                        stack0 = context.constructFast(stack0, [stack1], $names[3]);
                        //IR: Drop coerce, reason: redundant
                        local6 = stack0;
//                        stack0 = local8;// JIT: redundant assigment, value unused
//                        stack1 = local6;// JIT: redundant assigment, value unused
                        // 7 0::shape
                        if (!(local8 != undefined && local8[AX_CLASS_SYMBOL])){
                            local8.shape = local6;
                        } else {
                            context.setproperty($names[14], local6, local8);
                        }
//                        stack0 = local8;// JIT: redundant assigment, value unused
//                        stack1 = 1;// JIT: redundant assigment, value unused
                        // 7 0::density
                        if (!(local8 != undefined && local8[AX_CLASS_SYMBOL])){
                            local8.density = 1;
                        } else {
                            context.setproperty($names[15], 1, local8);
                        }
//                        stack0 = local8;// JIT: redundant assigment, value unused
//                        stack1 = 1;// JIT: redundant assigment, value unused
                        // 7 0::friction
                        if (!(local8 != undefined && local8[AX_CLASS_SYMBOL])){
                            local8.friction = 1;
                        } else {
                            context.setproperty($names[16], 1, local8);
                        }
//                        stack0 = local8;// JIT: redundant assigment, value unused
//                        stack1 = 0.5;// JIT: redundant assigment, value unused
                        // 7 0::restitution
                        if (!(local8 != undefined && local8[AX_CLASS_SYMBOL])){
                            local8.restitution = 0.5;
                        } else {
                            context.setproperty($names[19], 0.5, local8);
                        }
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[10], true, false);
                        stack0 = temp.$BgUtils;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[10]);
                        }
                        // 7 0::m_world
                        //Possible type:7 0::Utils
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['m_world'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgm_world;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[20]);
                            }
                        }
//                        stack1 = local4;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                           stack0 = stack0.CreateBody(local4);
                        } else {
                            // 7 0::CreateBody
                            {
                                let t = stack0;
                                const m = t.$BgCreateBody || (t = sec.box(stack0), t.$BgCreateBody);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BgCreateBody (local4);
                                } else { 
                                    stack0 = stack0.axCallProperty($names[21], [local4], false);
                                }
                            }
                        }
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[6], true, false);
                            _e || console.warn('[m_initHeroGeometry] Coerce Type not found:', "b2Body")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        local2 = stack0;
//                        stack0 = local2;// JIT: redundant assigment, value unused
//                        stack1 = local8;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local2, ((_a !== 'object' && _a !== 'function' ) || local2 == null || local2[AX_CLASS_SYMBOL]))) {
                            local2.CreateFixture(local8);
                        } else {
                            // 7 0::CreateFixture
                            {
                                let t = local2;
                                const m = t.$BgCreateFixture || (t = sec.box(local2), t.$BgCreateFixture);
                                if( typeof m === "function" ) { 
                                    m.call(t, local8);
                                } else { 
                                   local2.axCallProperty($names[25], [local8], false);
                                }
                            }
                        }
                        // 7 0:levels::UserData
                        stack0 = scope0.findScopeProperty($names[22], true, false);
//                        stack1 = true;// JIT: redundant assigment, value unused
                        //JIT: Support fast construct:UserData/Object
                        stack0 = context.constructFast(stack0, [true], $names[22]);
                        //IR: Drop coerce, reason: redundant
                        stack1 = stack0;
                        local9 = stack1;
//                        stack1 = true;// JIT: redundant assigment, value unused
                        // 7 0::isHeroBody
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.isHeroBody = true;
                        } else {
                            context.setproperty($names[23], true, stack0);
                        }
//                        stack0 = local2;// JIT: redundant assigment, value unused
//                        stack1 = local9;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local2, ((_a !== 'object' && _a !== 'function' ) || local2 == null || local2[AX_CLASS_SYMBOL]))) {
                            local2.SetUserData(local9);
                        } else {
                            // 7 0::SetUserData
                            {
                                let t = local2;
                                const m = t.$BgSetUserData || (t = sec.box(local2), t.$BgSetUserData);
                                if( typeof m === "function" ) { 
                                    m.call(t, local9);
                                } else { 
                                   local2.axCallProperty($names[24], [local9], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::heroBodies
                        //Possible type:7 0:levels::UserData
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack0 = this.$BgheroBodies;
//                        stack1 = local2;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.push(local2);
                        } else {
                            // 7 0:http://adobe.com/AS3/2006/builtin::push
                            {
                                let t = stack0;
                                const m = t.$Bgpush || (t = sec.box(stack0), t.$Bgpush);
                                if( typeof m === "function" ) { 
                                    m.call(t, local2);
                                } else { 
                                   stack0.axCallProperty($names[41], [local2], false);
                                }
                            }
                        }
                        stack0 = local10;
                        stack1 = 0;
                        if (0 == local10) { p = 1101; continue; };
                        // 7 0:Box2D.Dynamics.Joints::b2DistanceJointDef
                        stack0 = scope0.findScopeProperty($names[34], true, false);
                        //JIT: Support fast construct:b2DistanceJointDef/b2JointDef/Object
                        stack0 = context.constructFast(stack0, [], $names[34]);
                        //IR: Drop coerce, reason: redundant
                        stack1 = stack0;
                        local5 = stack1;
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::heroBodies
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack1 = this.$BgheroBodies;
                        stack2 = local10;
                        // 27 {3, 0, 0:entities, 1:entities:SmallHero, 0:flash.display, 0:flash.filters, 0:http://adobe.com/AS3/2006/builtin, 0:levels, 0:Box2D.Common.Math, 0:Box2D.Dynamics, 3, 2:entities, 0:flash.geom, 0:entities.particles, 0:Box2D.Collision, 0:Box2D.Collision.Shapes, 0:Box2D.Dynamics.Joints, 0:Box2D.Dynamics.Contacts, 5:entities:SmallHero, 5:entities:Entity}::*
                        {
                            let simple = local10;
                            const b_obj = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);

                            if (typeof simple === "number") {
                                stack1 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack1 = b_obj['$Bg' + simple];
                                if (stack1 === undefined || typeof stack1 === 'function') {
                                    const rm = context.runtimename($names[44], local10);
                                    stack1 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
//                        stack2 = this;// JIT: redundant assigment, value unused
                        // 7 0::heroBodies
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack2 = this.$BgheroBodies;
                        stack3 = local10;
                        stack3--;
                        // 27 {3, 0, 0:entities, 1:entities:SmallHero, 0:flash.display, 0:flash.filters, 0:http://adobe.com/AS3/2006/builtin, 0:levels, 0:Box2D.Common.Math, 0:Box2D.Dynamics, 3, 2:entities, 0:flash.geom, 0:entities.particles, 0:Box2D.Collision, 0:Box2D.Collision.Shapes, 0:Box2D.Dynamics.Joints, 0:Box2D.Dynamics.Contacts, 5:entities:SmallHero, 5:entities:Entity}::*
                        {
                            let simple = stack3;
                            const b_obj = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);

                            if (typeof simple === "number") {
                                stack2 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack2 = b_obj['$Bg' + simple];
                                if (stack2 === undefined || typeof stack2 === 'function') {
                                    const rm = context.runtimename($names[44], stack3);
                                    stack2 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
//                        stack3 = this;// JIT: redundant assigment, value unused
                        // 7 0::heroBodies
                        //Possible type:7 0::int
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack3 = this.$BgheroBodies;
                        stack4 = local10;
                        // 27 {3, 0, 0:entities, 1:entities:SmallHero, 0:flash.display, 0:flash.filters, 0:http://adobe.com/AS3/2006/builtin, 0:levels, 0:Box2D.Common.Math, 0:Box2D.Dynamics, 3, 2:entities, 0:flash.geom, 0:entities.particles, 0:Box2D.Collision, 0:Box2D.Collision.Shapes, 0:Box2D.Dynamics.Joints, 0:Box2D.Dynamics.Contacts, 5:entities:SmallHero, 5:entities:Entity}::*
                        {
                            let simple = local10;
                            const b_obj = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);

                            if (typeof simple === "number") {
                                stack3 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack3 = b_obj['$Bg' + simple];
                                if (stack3 === undefined || typeof stack3 === 'function') {
                                    const rm = context.runtimename($names[44], local10);
                                    stack3 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        if (!(_a = typeof stack3, ((_a !== 'object' && _a !== 'function' ) || stack3 == null || stack3[AX_CLASS_SYMBOL]))) {
                           stack3 = stack3.GetPosition();
                        } else {
                            // 9 {3, 0, 0:entities, 1:entities:SmallHero, 0:flash.display, 0:flash.filters, 0:http://adobe.com/AS3/2006/builtin, 0:levels, 0:Box2D.Common.Math, 0:Box2D.Dynamics, 3, 2:entities, 0:flash.geom, 0:entities.particles, 0:Box2D.Collision, 0:Box2D.Collision.Shapes, 0:Box2D.Dynamics.Joints, 0:Box2D.Dynamics.Contacts, 5:entities:SmallHero, 5:entities:Entity}::GetPosition
                            {
                                let t = stack3;
                                const m = t.$BgGetPosition || (t = sec.box(stack3), t.$BgGetPosition);
                                if( typeof m === "function" ) { 
                                    stack3 = t.$BgGetPosition ();
                                } else { 
                                    stack3 = stack3.axCallProperty($names[45], [], false);
                                }
                            }
                        }
//                        stack4 = this;// JIT: redundant assigment, value unused
                        // 7 0::heroBodies
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack4 = this.$BgheroBodies;
                        stack5 = local10;
                        stack5--;
                        // 27 {3, 0, 0:entities, 1:entities:SmallHero, 0:flash.display, 0:flash.filters, 0:http://adobe.com/AS3/2006/builtin, 0:levels, 0:Box2D.Common.Math, 0:Box2D.Dynamics, 3, 2:entities, 0:flash.geom, 0:entities.particles, 0:Box2D.Collision, 0:Box2D.Collision.Shapes, 0:Box2D.Dynamics.Joints, 0:Box2D.Dynamics.Contacts, 5:entities:SmallHero, 5:entities:Entity}::*
                        {
                            let simple = stack5;
                            const b_obj = stack4[AX_CLASS_SYMBOL] ? stack4 : sec.box(stack4);

                            if (typeof simple === "number") {
                                stack4 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack4 = b_obj['$Bg' + simple];
                                if (stack4 === undefined || typeof stack4 === 'function') {
                                    const rm = context.runtimename($names[44], stack5);
                                    stack4 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        if (!(_a = typeof stack4, ((_a !== 'object' && _a !== 'function' ) || stack4 == null || stack4[AX_CLASS_SYMBOL]))) {
                           stack4 = stack4.GetPosition();
                        } else {
                            // 9 {3, 0, 0:entities, 1:entities:SmallHero, 0:flash.display, 0:flash.filters, 0:http://adobe.com/AS3/2006/builtin, 0:levels, 0:Box2D.Common.Math, 0:Box2D.Dynamics, 3, 2:entities, 0:flash.geom, 0:entities.particles, 0:Box2D.Collision, 0:Box2D.Collision.Shapes, 0:Box2D.Dynamics.Joints, 0:Box2D.Dynamics.Contacts, 5:entities:SmallHero, 5:entities:Entity}::GetPosition
                            {
                                let t = stack4;
                                const m = t.$BgGetPosition || (t = sec.box(stack4), t.$BgGetPosition);
                                if( typeof m === "function" ) { 
                                    stack4 = t.$BgGetPosition ();
                                } else { 
                                    stack4 = stack4.axCallProperty($names[45], [], false);
                                }
                            }
                        }
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.Initialize(stack1, stack2, stack3, stack4);
                        } else {
                            // 7 0::Initialize
                            {
                                let t = stack0;
                                const m = t.$BgInitialize || (t = sec.box(stack0), t.$BgInitialize);
                                if( typeof m === "function" ) { 
                                    m.call(t, stack1, stack2, stack3, stack4);
                                } else { 
                                   stack0.axCallProperty($names[36], [stack1, stack2, stack3, stack4], false);
                                }
                            }
                        }
//                        stack0 = local5;// JIT: redundant assigment, value unused
//                        stack1 = 15;// JIT: redundant assigment, value unused
                        // 7 0::frequencyHz
                        if (!(local5 != undefined && local5[AX_CLASS_SYMBOL])){
                            local5.frequencyHz = 15;
                        } else {
                            context.setproperty($names[37], 15, local5);
                        }
//                        stack0 = local5;// JIT: redundant assigment, value unused
//                        stack1 = 0.8;// JIT: redundant assigment, value unused
                        // 7 0::dampingRatio
                        if (!(local5 != undefined && local5[AX_CLASS_SYMBOL])){
                            local5.dampingRatio = 0.8;
                        } else {
                            context.setproperty($names[38], 0.8, local5);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::heroSkinJoints
                        //Possible type:7 0:Box2D.Dynamics.Joints::b2DistanceJointDef
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack0 = this.$BgheroSkinJoints;
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[10], true, false);
                        stack1 = temp.$BgUtils;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[10]);
                        }
                        // 7 0::m_world
                        //Possible type:7 0::Utils
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['m_world'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$Bgm_world;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[20]);
                            }
                        }
//                        stack2 = local5;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack1, ((_a !== 'object' && _a !== 'function' ) || stack1 == null || stack1[AX_CLASS_SYMBOL]))) {
                           stack1 = stack1.CreateJoint(local5);
                        } else {
                            // 7 0::CreateJoint
                            {
                                let t = stack1;
                                const m = t.$BgCreateJoint || (t = sec.box(stack1), t.$BgCreateJoint);
                                if( typeof m === "function" ) { 
                                    stack1 = t.$BgCreateJoint (local5);
                                } else { 
                                    stack1 = stack1.axCallProperty($names[39], [local5], false);
                                }
                            }
                        }
                        // 7 0:Box2D.Dynamics.Joints::b2DistanceJoint
                        temp = scope0.findScopeProperty($names[40], true, false);
                        stack2 = temp.$Bgb2DistanceJoint;
                        if (stack2 === undefined || typeof stack2 === 'function') {
                            stack2 = temp.axGetProperty($names[40]);
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
                                   stack0.axCallProperty($names[41], [stack1], false);
                                }
                            }
                        }
                    case 1101:
                        local10 = (local10 | 0) + 1;
                    case 1103:
                        stack0 = local10;
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::numCircles
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::int  */ 
                        stack1 = this.$BgnumCircles;
                        if (stack1 > local10) { p = 776; continue; };
                        // 7 0:Box2D.Dynamics.Joints::b2DistanceJointDef
                        stack0 = scope0.findScopeProperty($names[34], true, false);
                        //JIT: Support fast construct:b2DistanceJointDef/b2JointDef/Object
                        stack0 = context.constructFast(stack0, [], $names[34]);
                        //IR: Drop coerce, reason: redundant
                        stack1 = stack0;
                        local5 = stack1;
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::heroBodies
                        //Possible type:7 0::int
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack1 = this.$BgheroBodies;
                        stack2 = 0;
                        // 27 {3, 0, 0:entities, 1:entities:SmallHero, 0:flash.display, 0:flash.filters, 0:http://adobe.com/AS3/2006/builtin, 0:levels, 0:Box2D.Common.Math, 0:Box2D.Dynamics, 3, 2:entities, 0:flash.geom, 0:entities.particles, 0:Box2D.Collision, 0:Box2D.Collision.Shapes, 0:Box2D.Dynamics.Joints, 0:Box2D.Dynamics.Contacts, 5:entities:SmallHero, 5:entities:Entity}::*
                        {
                            let simple = 0;
                            const b_obj = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);

                            if (typeof simple === "number") {
                                stack1 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack1 = b_obj['$Bg' + simple];
                                if (stack1 === undefined || typeof stack1 === 'function') {
                                    const rm = context.runtimename($names[44], 0);
                                    stack1 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
//                        stack2 = this;// JIT: redundant assigment, value unused
                        // 7 0::heroBodies
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack2 = this.$BgheroBodies;
//                        stack3 = this;// JIT: redundant assigment, value unused
                        // 7 0::numCircles
                        //Possible type:7 0::Array
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::int  */ 
                        stack3 = this.$BgnumCircles;
                        stack3--;
                        // 27 {3, 0, 0:entities, 1:entities:SmallHero, 0:flash.display, 0:flash.filters, 0:http://adobe.com/AS3/2006/builtin, 0:levels, 0:Box2D.Common.Math, 0:Box2D.Dynamics, 3, 2:entities, 0:flash.geom, 0:entities.particles, 0:Box2D.Collision, 0:Box2D.Collision.Shapes, 0:Box2D.Dynamics.Joints, 0:Box2D.Dynamics.Contacts, 5:entities:SmallHero, 5:entities:Entity}::*
                        {
                            let simple = stack3;
                            const b_obj = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);

                            if (typeof simple === "number") {
                                stack2 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack2 = b_obj['$Bg' + simple];
                                if (stack2 === undefined || typeof stack2 === 'function') {
                                    const rm = context.runtimename($names[44], stack3);
                                    stack2 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
//                        stack3 = this;// JIT: redundant assigment, value unused
                        // 7 0::heroBodies
                        //Possible type:7 0::int
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack3 = this.$BgheroBodies;
                        stack4 = 0;
                        // 27 {3, 0, 0:entities, 1:entities:SmallHero, 0:flash.display, 0:flash.filters, 0:http://adobe.com/AS3/2006/builtin, 0:levels, 0:Box2D.Common.Math, 0:Box2D.Dynamics, 3, 2:entities, 0:flash.geom, 0:entities.particles, 0:Box2D.Collision, 0:Box2D.Collision.Shapes, 0:Box2D.Dynamics.Joints, 0:Box2D.Dynamics.Contacts, 5:entities:SmallHero, 5:entities:Entity}::*
                        {
                            let simple = 0;
                            const b_obj = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);

                            if (typeof simple === "number") {
                                stack3 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack3 = b_obj['$Bg' + simple];
                                if (stack3 === undefined || typeof stack3 === 'function') {
                                    const rm = context.runtimename($names[44], 0);
                                    stack3 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        if (!(_a = typeof stack3, ((_a !== 'object' && _a !== 'function' ) || stack3 == null || stack3[AX_CLASS_SYMBOL]))) {
                           stack3 = stack3.GetPosition();
                        } else {
                            // 9 {3, 0, 0:entities, 1:entities:SmallHero, 0:flash.display, 0:flash.filters, 0:http://adobe.com/AS3/2006/builtin, 0:levels, 0:Box2D.Common.Math, 0:Box2D.Dynamics, 3, 2:entities, 0:flash.geom, 0:entities.particles, 0:Box2D.Collision, 0:Box2D.Collision.Shapes, 0:Box2D.Dynamics.Joints, 0:Box2D.Dynamics.Contacts, 5:entities:SmallHero, 5:entities:Entity}::GetPosition
                            {
                                let t = stack3;
                                const m = t.$BgGetPosition || (t = sec.box(stack3), t.$BgGetPosition);
                                if( typeof m === "function" ) { 
                                    stack3 = t.$BgGetPosition ();
                                } else { 
                                    stack3 = stack3.axCallProperty($names[45], [], false);
                                }
                            }
                        }
//                        stack4 = this;// JIT: redundant assigment, value unused
                        // 7 0::heroBodies
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack4 = this.$BgheroBodies;
//                        stack5 = this;// JIT: redundant assigment, value unused
                        // 7 0::numCircles
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::int  */ 
                        stack5 = this.$BgnumCircles;
                        stack5--;
                        // 27 {3, 0, 0:entities, 1:entities:SmallHero, 0:flash.display, 0:flash.filters, 0:http://adobe.com/AS3/2006/builtin, 0:levels, 0:Box2D.Common.Math, 0:Box2D.Dynamics, 3, 2:entities, 0:flash.geom, 0:entities.particles, 0:Box2D.Collision, 0:Box2D.Collision.Shapes, 0:Box2D.Dynamics.Joints, 0:Box2D.Dynamics.Contacts, 5:entities:SmallHero, 5:entities:Entity}::*
                        {
                            let simple = stack5;
                            const b_obj = stack4[AX_CLASS_SYMBOL] ? stack4 : sec.box(stack4);

                            if (typeof simple === "number") {
                                stack4 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack4 = b_obj['$Bg' + simple];
                                if (stack4 === undefined || typeof stack4 === 'function') {
                                    const rm = context.runtimename($names[44], stack5);
                                    stack4 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        if (!(_a = typeof stack4, ((_a !== 'object' && _a !== 'function' ) || stack4 == null || stack4[AX_CLASS_SYMBOL]))) {
                           stack4 = stack4.GetPosition();
                        } else {
                            // 9 {3, 0, 0:entities, 1:entities:SmallHero, 0:flash.display, 0:flash.filters, 0:http://adobe.com/AS3/2006/builtin, 0:levels, 0:Box2D.Common.Math, 0:Box2D.Dynamics, 3, 2:entities, 0:flash.geom, 0:entities.particles, 0:Box2D.Collision, 0:Box2D.Collision.Shapes, 0:Box2D.Dynamics.Joints, 0:Box2D.Dynamics.Contacts, 5:entities:SmallHero, 5:entities:Entity}::GetPosition
                            {
                                let t = stack4;
                                const m = t.$BgGetPosition || (t = sec.box(stack4), t.$BgGetPosition);
                                if( typeof m === "function" ) { 
                                    stack4 = t.$BgGetPosition ();
                                } else { 
                                    stack4 = stack4.axCallProperty($names[45], [], false);
                                }
                            }
                        }
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.Initialize(stack1, stack2, stack3, stack4);
                        } else {
                            // 7 0::Initialize
                            {
                                let t = stack0;
                                const m = t.$BgInitialize || (t = sec.box(stack0), t.$BgInitialize);
                                if( typeof m === "function" ) { 
                                    m.call(t, stack1, stack2, stack3, stack4);
                                } else { 
                                   stack0.axCallProperty($names[36], [stack1, stack2, stack3, stack4], false);
                                }
                            }
                        }
//                        stack0 = local5;// JIT: redundant assigment, value unused
//                        stack1 = 15;// JIT: redundant assigment, value unused
                        // 7 0::frequencyHz
                        if (!(local5 != undefined && local5[AX_CLASS_SYMBOL])){
                            local5.frequencyHz = 15;
                        } else {
                            context.setproperty($names[37], 15, local5);
                        }
//                        stack0 = local5;// JIT: redundant assigment, value unused
//                        stack1 = 0.8;// JIT: redundant assigment, value unused
                        // 7 0::dampingRatio
                        if (!(local5 != undefined && local5[AX_CLASS_SYMBOL])){
                            local5.dampingRatio = 0.8;
                        } else {
                            context.setproperty($names[38], 0.8, local5);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::heroSkinJoints
                        //Possible type:7 0:Box2D.Dynamics.Joints::b2DistanceJointDef
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack0 = this.$BgheroSkinJoints;
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[10], true, false);
                        stack1 = temp.$BgUtils;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[10]);
                        }
                        // 7 0::m_world
                        //Possible type:7 0::Utils
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['m_world'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$Bgm_world;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[20]);
                            }
                        }
//                        stack2 = local5;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack1, ((_a !== 'object' && _a !== 'function' ) || stack1 == null || stack1[AX_CLASS_SYMBOL]))) {
                           stack1 = stack1.CreateJoint(local5);
                        } else {
                            // 7 0::CreateJoint
                            {
                                let t = stack1;
                                const m = t.$BgCreateJoint || (t = sec.box(stack1), t.$BgCreateJoint);
                                if( typeof m === "function" ) { 
                                    stack1 = t.$BgCreateJoint (local5);
                                } else { 
                                    stack1 = stack1.axCallProperty($names[39], [local5], false);
                                }
                            }
                        }
                        // 7 0:Box2D.Dynamics.Joints::b2DistanceJoint
                        temp = scope0.findScopeProperty($names[40], true, false);
                        stack2 = temp.$Bgb2DistanceJoint;
                        if (stack2 === undefined || typeof stack2 === 'function') {
                            stack2 = temp.axGetProperty($names[40]);
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
                                   stack0.axCallProperty($names[41], [stack1], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::Array
                        stack1 = scope0.findScopeProperty($names[0], true, false);
                        //JIT: Support fast construct:Array/Object
                        stack1 = context.constructFast(stack1, [], $names[0]);
                        // 7 0::heroSkeletonJoints
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Array  */ 
                        this.$BgheroSkeletonJoints = stack1;
//                        stack0 = 0;// JIT: redundant assigment, value unused
                        local10 = 0;
                        { p = 1347; continue; };
                    case 1232:
                        // 7 0:Box2D.Dynamics.Joints::b2DistanceJointDef
                        stack0 = scope0.findScopeProperty($names[34], true, false);
                        //JIT: Support fast construct:b2DistanceJointDef/b2JointDef/Object
                        stack0 = context.constructFast(stack0, [], $names[34]);
                        //IR: Drop coerce, reason: redundant
                        stack1 = stack0;
                        local5 = stack1;
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::heroBodies
                        //Possible type:7 0::Array
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack1 = this.$BgheroBodies;
                        stack2 = local10;
                        // 27 {3, 0, 0:entities, 1:entities:SmallHero, 0:flash.display, 0:flash.filters, 0:http://adobe.com/AS3/2006/builtin, 0:levels, 0:Box2D.Common.Math, 0:Box2D.Dynamics, 3, 2:entities, 0:flash.geom, 0:entities.particles, 0:Box2D.Collision, 0:Box2D.Collision.Shapes, 0:Box2D.Dynamics.Joints, 0:Box2D.Dynamics.Contacts, 5:entities:SmallHero, 5:entities:Entity}::*
                        {
                            let simple = local10;
                            const b_obj = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);

                            if (typeof simple === "number") {
                                stack1 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack1 = b_obj['$Bg' + simple];
                                if (stack1 === undefined || typeof stack1 === 'function') {
                                    const rm = context.runtimename($names[44], local10);
                                    stack1 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
//                        stack2 = this;// JIT: redundant assigment, value unused
                        // 7 0::heroBodies
                        //Possible type:7 0:Box2D.Dynamics.Joints::b2DistanceJoint
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack2 = this.$BgheroBodies;
                        stack3 = local10;
//                        stack4 = this;// JIT: redundant assigment, value unused
                        // 7 0::numCircles
                        //Possible type:7 0::Array
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::int  */ 
                        stack4 = this.$BgnumCircles;
//                        stack5 = 2;// JIT: redundant assigment, value unused
                        stack4 /= 2;
                        stack3 += stack4;
                        // 27 {3, 0, 0:entities, 1:entities:SmallHero, 0:flash.display, 0:flash.filters, 0:http://adobe.com/AS3/2006/builtin, 0:levels, 0:Box2D.Common.Math, 0:Box2D.Dynamics, 3, 2:entities, 0:flash.geom, 0:entities.particles, 0:Box2D.Collision, 0:Box2D.Collision.Shapes, 0:Box2D.Dynamics.Joints, 0:Box2D.Dynamics.Contacts, 5:entities:SmallHero, 5:entities:Entity}::*
                        {
                            let simple = stack3;
                            const b_obj = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);

                            if (typeof simple === "number") {
                                stack2 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack2 = b_obj['$Bg' + simple];
                                if (stack2 === undefined || typeof stack2 === 'function') {
                                    const rm = context.runtimename($names[44], stack3);
                                    stack2 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
//                        stack3 = this;// JIT: redundant assigment, value unused
                        // 7 0::heroBodies
                        //Possible type:7 0::Array
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack3 = this.$BgheroBodies;
                        stack4 = local10;
                        // 27 {3, 0, 0:entities, 1:entities:SmallHero, 0:flash.display, 0:flash.filters, 0:http://adobe.com/AS3/2006/builtin, 0:levels, 0:Box2D.Common.Math, 0:Box2D.Dynamics, 3, 2:entities, 0:flash.geom, 0:entities.particles, 0:Box2D.Collision, 0:Box2D.Collision.Shapes, 0:Box2D.Dynamics.Joints, 0:Box2D.Dynamics.Contacts, 5:entities:SmallHero, 5:entities:Entity}::*
                        {
                            let simple = local10;
                            const b_obj = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);

                            if (typeof simple === "number") {
                                stack3 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack3 = b_obj['$Bg' + simple];
                                if (stack3 === undefined || typeof stack3 === 'function') {
                                    const rm = context.runtimename($names[44], local10);
                                    stack3 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        if (!(_a = typeof stack3, ((_a !== 'object' && _a !== 'function' ) || stack3 == null || stack3[AX_CLASS_SYMBOL]))) {
                           stack3 = stack3.GetPosition();
                        } else {
                            // 9 {3, 0, 0:entities, 1:entities:SmallHero, 0:flash.display, 0:flash.filters, 0:http://adobe.com/AS3/2006/builtin, 0:levels, 0:Box2D.Common.Math, 0:Box2D.Dynamics, 3, 2:entities, 0:flash.geom, 0:entities.particles, 0:Box2D.Collision, 0:Box2D.Collision.Shapes, 0:Box2D.Dynamics.Joints, 0:Box2D.Dynamics.Contacts, 5:entities:SmallHero, 5:entities:Entity}::GetPosition
                            {
                                let t = stack3;
                                const m = t.$BgGetPosition || (t = sec.box(stack3), t.$BgGetPosition);
                                if( typeof m === "function" ) { 
                                    stack3 = t.$BgGetPosition ();
                                } else { 
                                    stack3 = stack3.axCallProperty($names[45], [], false);
                                }
                            }
                        }
//                        stack4 = this;// JIT: redundant assigment, value unused
                        // 7 0::heroBodies
                        //Possible type:7 0::int
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack4 = this.$BgheroBodies;
                        stack5 = local10;
//                        stack6 = this;// JIT: redundant assigment, value unused
                        // 7 0::numCircles
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::int  */ 
                        stack6 = this.$BgnumCircles;
//                        stack7 = 2;// JIT: redundant assigment, value unused
                        stack6 /= 2;
                        stack5 += stack6;
                        // 27 {3, 0, 0:entities, 1:entities:SmallHero, 0:flash.display, 0:flash.filters, 0:http://adobe.com/AS3/2006/builtin, 0:levels, 0:Box2D.Common.Math, 0:Box2D.Dynamics, 3, 2:entities, 0:flash.geom, 0:entities.particles, 0:Box2D.Collision, 0:Box2D.Collision.Shapes, 0:Box2D.Dynamics.Joints, 0:Box2D.Dynamics.Contacts, 5:entities:SmallHero, 5:entities:Entity}::*
                        {
                            let simple = stack5;
                            const b_obj = stack4[AX_CLASS_SYMBOL] ? stack4 : sec.box(stack4);

                            if (typeof simple === "number") {
                                stack4 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack4 = b_obj['$Bg' + simple];
                                if (stack4 === undefined || typeof stack4 === 'function') {
                                    const rm = context.runtimename($names[44], stack5);
                                    stack4 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        if (!(_a = typeof stack4, ((_a !== 'object' && _a !== 'function' ) || stack4 == null || stack4[AX_CLASS_SYMBOL]))) {
                           stack4 = stack4.GetPosition();
                        } else {
                            // 9 {3, 0, 0:entities, 1:entities:SmallHero, 0:flash.display, 0:flash.filters, 0:http://adobe.com/AS3/2006/builtin, 0:levels, 0:Box2D.Common.Math, 0:Box2D.Dynamics, 3, 2:entities, 0:flash.geom, 0:entities.particles, 0:Box2D.Collision, 0:Box2D.Collision.Shapes, 0:Box2D.Dynamics.Joints, 0:Box2D.Dynamics.Contacts, 5:entities:SmallHero, 5:entities:Entity}::GetPosition
                            {
                                let t = stack4;
                                const m = t.$BgGetPosition || (t = sec.box(stack4), t.$BgGetPosition);
                                if( typeof m === "function" ) { 
                                    stack4 = t.$BgGetPosition ();
                                } else { 
                                    stack4 = stack4.axCallProperty($names[45], [], false);
                                }
                            }
                        }
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.Initialize(stack1, stack2, stack3, stack4);
                        } else {
                            // 7 0::Initialize
                            {
                                let t = stack0;
                                const m = t.$BgInitialize || (t = sec.box(stack0), t.$BgInitialize);
                                if( typeof m === "function" ) { 
                                    m.call(t, stack1, stack2, stack3, stack4);
                                } else { 
                                   stack0.axCallProperty($names[36], [stack1, stack2, stack3, stack4], false);
                                }
                            }
                        }
//                        stack0 = local5;// JIT: redundant assigment, value unused
//                        stack1 = 10;// JIT: redundant assigment, value unused
                        // 7 0::frequencyHz
                        if (!(local5 != undefined && local5[AX_CLASS_SYMBOL])){
                            local5.frequencyHz = 10;
                        } else {
                            context.setproperty($names[37], 10, local5);
                        }
//                        stack0 = local5;// JIT: redundant assigment, value unused
//                        stack1 = 0.8;// JIT: redundant assigment, value unused
                        // 7 0::dampingRatio
                        if (!(local5 != undefined && local5[AX_CLASS_SYMBOL])){
                            local5.dampingRatio = 0.8;
                        } else {
                            context.setproperty($names[38], 0.8, local5);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::heroSkeletonJoints
                        //Possible type:7 0:Box2D.Dynamics.Joints::b2DistanceJointDef
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack0 = this.$BgheroSkeletonJoints;
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[10], true, false);
                        stack1 = temp.$BgUtils;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[10]);
                        }
                        // 7 0::m_world
                        //Possible type:7 0::Utils
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['m_world'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$Bgm_world;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[20]);
                            }
                        }
//                        stack2 = local5;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack1, ((_a !== 'object' && _a !== 'function' ) || stack1 == null || stack1[AX_CLASS_SYMBOL]))) {
                           stack1 = stack1.CreateJoint(local5);
                        } else {
                            // 7 0::CreateJoint
                            {
                                let t = stack1;
                                const m = t.$BgCreateJoint || (t = sec.box(stack1), t.$BgCreateJoint);
                                if( typeof m === "function" ) { 
                                    stack1 = t.$BgCreateJoint (local5);
                                } else { 
                                    stack1 = stack1.axCallProperty($names[39], [local5], false);
                                }
                            }
                        }
                        // 7 0:Box2D.Dynamics.Joints::b2DistanceJoint
                        temp = scope0.findScopeProperty($names[40], true, false);
                        stack2 = temp.$Bgb2DistanceJoint;
                        if (stack2 === undefined || typeof stack2 === 'function') {
                            stack2 = temp.axGetProperty($names[40]);
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
                                   stack0.axCallProperty($names[41], [stack1], false);
                                }
                            }
                        }
                        local10 = (local10 | 0) + 1;
                    case 1347:
                        stack0 = local10;
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::numCircles
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::int  */ 
                        stack1 = this.$BgnumCircles;
//                        stack2 = 2;// JIT: redundant assigment, value unused
                        stack1 /= 2;
                        if (stack1 > local10) { p = 1232; continue; };
                        return;
                    }
                }
            }
//# sourceURL=http://jit/entities/SmallHero/m_initHeroGeometry.js
})