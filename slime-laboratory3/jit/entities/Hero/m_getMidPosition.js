(function anonymous(context
) {
/*
	Index: 1124
	Path:  entities/Hero::m_getMidPosition
	Type:  Public
	Kind:  Method
	Super: entities/Entity
	Return: 7 0:Box2D.Common.Math::b2Vec2
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_m_getMidPosition() {
        // Possible use a real "this"
        // local1 is assigned before read, skip init
        let local1 = undefined
        // local2 is assigned before read, skip init
        let local2 = undefined
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
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::IS_FROST
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Boolean  */ 
                        stack0 = this.$BgIS_FROST;
                        if (!stack0) { p = 52; continue; };
                        // 7 0:Box2D.Common.Math::b2Vec2
                        stack0 = scope0.findScopeProperty($names[0], true, false);
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::heroFrostBody
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Dynamics::b2Body  */ 
                        stack1 = this.$BgheroFrostBody;
                        if (!(_a = typeof stack1, ((_a !== 'object' && _a !== 'function' ) || stack1 == null || stack1[AX_CLASS_SYMBOL]))) {
                           stack1 = stack1.GetPosition();
                        } else {
                            // 7 0::GetPosition
                            {
                                let t = stack1;
                                const m = t.$BgGetPosition || (t = sec.box(stack1), t.$BgGetPosition);
                                if( typeof m === "function" ) { 
                                    stack1 = t.$BgGetPosition ();
                                } else { 
                                    stack1 = stack1.axCallProperty($names[1], [], false);
                                }
                            }
                        }
                        // 7 0::x
                        //Possible type:7 0:Box2D.Dynamics::b2Body
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['x'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$Bgx;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[2]);
                            }
                        }
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[3], true, false);
                        stack2 = temp.$BgUtils;
                        if (stack2 === undefined || typeof stack2 === 'function') {
                            stack2 = temp.axGetProperty($names[3]);
                        }
                        // 7 0::m_scale
                        //Possible type:7 0::Utils
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['m_scale'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$Bgm_scale;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[4]);
                            }
                        }
                        stack1 *= stack2;
//                        stack2 = this;// JIT: redundant assigment, value unused
                        // 7 0::heroFrostBody
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Dynamics::b2Body  */ 
                        stack2 = this.$BgheroFrostBody;
                        if (!(_a = typeof stack2, ((_a !== 'object' && _a !== 'function' ) || stack2 == null || stack2[AX_CLASS_SYMBOL]))) {
                           stack2 = stack2.GetPosition();
                        } else {
                            // 7 0::GetPosition
                            {
                                let t = stack2;
                                const m = t.$BgGetPosition || (t = sec.box(stack2), t.$BgGetPosition);
                                if( typeof m === "function" ) { 
                                    stack2 = t.$BgGetPosition ();
                                } else { 
                                    stack2 = stack2.axCallProperty($names[1], [], false);
                                }
                            }
                        }
                        // 7 0::y
                        //Possible type:7 0:Box2D.Dynamics::b2Body
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['y'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$Bgy;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[5]);
                            }
                        }
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[3], true, false);
                        stack3 = temp.$BgUtils;
                        if (stack3 === undefined || typeof stack3 === 'function') {
                            stack3 = temp.axGetProperty($names[3]);
                        }
                        // 7 0::m_scale
                        //Possible type:7 0::Utils
                        if (!(stack3 != undefined && stack3[AX_CLASS_SYMBOL])) {
                            stack3 = stack3['m_scale'];
                        } else {
                            temp = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);
                            stack3 = temp.$Bgm_scale;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[4]);
                            }
                        }
                        stack2 *= stack3;
                        //JIT: Support fast construct:b2Vec2/Object
                        stack0 = context.constructFast(stack0, [stack1, stack2], $names[0]);
                        return stack0;
                    case 52:
                        // 7 0:Box2D.Common.Math::b2Vec2
                        stack0 = scope0.findScopeProperty($names[0], true, false);
//                        stack1 = 0;// JIT: redundant assigment, value unused
                        //IR: DUP changed to PUSH*, reason: prevent optimisation
//                        stack2 = 0;// JIT: redundant assigment, value unused
                        //JIT: Support fast construct:b2Vec2/Object
                        stack0 = context.constructFast(stack0, [0, 0], $names[0]);
                        //IR: Drop coerce, reason: redundant
                        local1 = stack0;
//                        stack0 = 0;// JIT: redundant assigment, value unused
                        local2 = 0;
                        { p = 121; continue; };
                    case 70:
//                        stack0 = local1;// JIT: redundant assigment, value unused
//                        stack1 = local1;// JIT: redundant assigment, value unused
                        // 7 0::x
                        //Possible type:undefined
                        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])) {
                            stack1 = local1['x'];
                        } else {
                            temp = local1[AX_CLASS_SYMBOL] ? local1 : sec.box(local1);
                            stack1 = temp.$Bgx;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[2]);
                            }
                        }
//                        stack2 = this;// JIT: redundant assigment, value unused
                        // 7 0::heroBodies
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack2 = this.$BgheroBodies;
                        stack3 = local2;
                        // 27 {3, 0:flash.geom, 0, 3, 0:entities, 2:entities, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.filters, 0:levels, 0:entities.particles, 0:Box2D.Dynamics, 0:Box2D.Collision, 0:Box2D.Collision.Shapes, 0:Box2D.Dynamics.Joints, 0:Box2D.Dynamics.Contacts, 0:Box2D.Common.Math, 1:entities:Hero, 5:entities:Hero, 5:entities:Entity}::*
                        {
                            let simple = local2;
                            const b_obj = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);

                            if (typeof simple === "number") {
                                stack2 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack2 = b_obj['$Bg' + simple];
                                if (stack2 === undefined || typeof stack2 === 'function') {
                                    const rm = context.runtimename($names[6], local2);
                                    stack2 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        if (!(_a = typeof stack2, ((_a !== 'object' && _a !== 'function' ) || stack2 == null || stack2[AX_CLASS_SYMBOL]))) {
                           stack2 = stack2.GetPosition();
                        } else {
                            // 9 {3, 0:flash.geom, 0, 3, 0:entities, 2:entities, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.filters, 0:levels, 0:entities.particles, 0:Box2D.Dynamics, 0:Box2D.Collision, 0:Box2D.Collision.Shapes, 0:Box2D.Dynamics.Joints, 0:Box2D.Dynamics.Contacts, 0:Box2D.Common.Math, 1:entities:Hero, 5:entities:Hero, 5:entities:Entity}::GetPosition
                            {
                                let t = stack2;
                                const m = t.$BgGetPosition || (t = sec.box(stack2), t.$BgGetPosition);
                                if( typeof m === "function" ) { 
                                    stack2 = t.$BgGetPosition ();
                                } else { 
                                    stack2 = stack2.axCallProperty($names[7], [], false);
                                }
                            }
                        }
                        // 9 {3, 0:flash.geom, 0, 3, 0:entities, 2:entities, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.filters, 0:levels, 0:entities.particles, 0:Box2D.Dynamics, 0:Box2D.Collision, 0:Box2D.Collision.Shapes, 0:Box2D.Dynamics.Joints, 0:Box2D.Dynamics.Contacts, 0:Box2D.Common.Math, 1:entities:Hero, 5:entities:Hero, 5:entities:Entity}::x
                        //Possible type:7 0::Array
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['x'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$Bgx;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[8]);
                            }
                        }
                        stack1 += stack2;
                        // 7 0::x
                        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])){
                            local1.x = stack1;
                        } else {
                            context.setproperty($names[2], stack1, local1);
                        }
//                        stack0 = local1;// JIT: redundant assigment, value unused
//                        stack1 = local1;// JIT: redundant assigment, value unused
                        // 7 0::y
                        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])) {
                            stack1 = local1['y'];
                        } else {
                            temp = local1[AX_CLASS_SYMBOL] ? local1 : sec.box(local1);
                            stack1 = temp.$Bgy;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[5]);
                            }
                        }
//                        stack2 = this;// JIT: redundant assigment, value unused
                        // 7 0::heroBodies
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack2 = this.$BgheroBodies;
                        stack3 = local2;
                        // 27 {3, 0:flash.geom, 0, 3, 0:entities, 2:entities, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.filters, 0:levels, 0:entities.particles, 0:Box2D.Dynamics, 0:Box2D.Collision, 0:Box2D.Collision.Shapes, 0:Box2D.Dynamics.Joints, 0:Box2D.Dynamics.Contacts, 0:Box2D.Common.Math, 1:entities:Hero, 5:entities:Hero, 5:entities:Entity}::*
                        {
                            let simple = local2;
                            const b_obj = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);

                            if (typeof simple === "number") {
                                stack2 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack2 = b_obj['$Bg' + simple];
                                if (stack2 === undefined || typeof stack2 === 'function') {
                                    const rm = context.runtimename($names[6], local2);
                                    stack2 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        if (!(_a = typeof stack2, ((_a !== 'object' && _a !== 'function' ) || stack2 == null || stack2[AX_CLASS_SYMBOL]))) {
                           stack2 = stack2.GetPosition();
                        } else {
                            // 9 {3, 0:flash.geom, 0, 3, 0:entities, 2:entities, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.filters, 0:levels, 0:entities.particles, 0:Box2D.Dynamics, 0:Box2D.Collision, 0:Box2D.Collision.Shapes, 0:Box2D.Dynamics.Joints, 0:Box2D.Dynamics.Contacts, 0:Box2D.Common.Math, 1:entities:Hero, 5:entities:Hero, 5:entities:Entity}::GetPosition
                            {
                                let t = stack2;
                                const m = t.$BgGetPosition || (t = sec.box(stack2), t.$BgGetPosition);
                                if( typeof m === "function" ) { 
                                    stack2 = t.$BgGetPosition ();
                                } else { 
                                    stack2 = stack2.axCallProperty($names[7], [], false);
                                }
                            }
                        }
                        // 9 {3, 0:flash.geom, 0, 3, 0:entities, 2:entities, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.filters, 0:levels, 0:entities.particles, 0:Box2D.Dynamics, 0:Box2D.Collision, 0:Box2D.Collision.Shapes, 0:Box2D.Dynamics.Joints, 0:Box2D.Dynamics.Contacts, 0:Box2D.Common.Math, 1:entities:Hero, 5:entities:Hero, 5:entities:Entity}::y
                        //Possible type:7 0::Array
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['y'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$Bgy;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[9]);
                            }
                        }
                        stack1 += stack2;
                        // 7 0::y
                        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])){
                            local1.y = stack1;
                        } else {
                            context.setproperty($names[5], stack1, local1);
                        }
                        local2 = (local2 | 0) + 1;
                    case 121:
                        stack0 = local2;
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::heroBodies
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack1 = this.$BgheroBodies;
                        // 7 0::length
                        //Possible type:7 0::Array
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['length'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$Bglength;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[10]);
                            }
                        }
                        if (stack1 > local2) { p = 70; continue; };
//                        stack0 = local1;// JIT: redundant assigment, value unused
//                        stack1 = local1;// JIT: redundant assigment, value unused
                        // 7 0::x
                        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])) {
                            stack1 = local1['x'];
                        } else {
                            temp = local1[AX_CLASS_SYMBOL] ? local1 : sec.box(local1);
                            stack1 = temp.$Bgx;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[2]);
                            }
                        }
//                        stack2 = this;// JIT: redundant assigment, value unused
                        // 7 0::heroBodies
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack2 = this.$BgheroBodies;
                        // 7 0::length
                        //Possible type:7 0::Array
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['length'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$Bglength;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[10]);
                            }
                        }
                        stack1 /= stack2;
                        // 7 0::x
                        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])){
                            local1.x = stack1;
                        } else {
                            context.setproperty($names[2], stack1, local1);
                        }
//                        stack0 = local1;// JIT: redundant assigment, value unused
//                        stack1 = local1;// JIT: redundant assigment, value unused
                        // 7 0::y
                        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])) {
                            stack1 = local1['y'];
                        } else {
                            temp = local1[AX_CLASS_SYMBOL] ? local1 : sec.box(local1);
                            stack1 = temp.$Bgy;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[5]);
                            }
                        }
//                        stack2 = this;// JIT: redundant assigment, value unused
                        // 7 0::heroBodies
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack2 = this.$BgheroBodies;
                        // 7 0::length
                        //Possible type:7 0::Array
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['length'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$Bglength;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[10]);
                            }
                        }
                        stack1 /= stack2;
                        // 7 0::y
                        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])){
                            local1.y = stack1;
                        } else {
                            context.setproperty($names[5], stack1, local1);
                        }
//                        stack0 = local1;// JIT: redundant assigment, value unused
//                        stack1 = local1;// JIT: redundant assigment, value unused
                        // 7 0::x
                        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])) {
                            stack1 = local1['x'];
                        } else {
                            temp = local1[AX_CLASS_SYMBOL] ? local1 : sec.box(local1);
                            stack1 = temp.$Bgx;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[2]);
                            }
                        }
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[3], true, false);
                        stack2 = temp.$BgUtils;
                        if (stack2 === undefined || typeof stack2 === 'function') {
                            stack2 = temp.axGetProperty($names[3]);
                        }
                        // 7 0::m_scale
                        //Possible type:7 0::Utils
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['m_scale'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$Bgm_scale;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[4]);
                            }
                        }
                        stack1 *= stack2;
                        // 7 0::x
                        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])){
                            local1.x = stack1;
                        } else {
                            context.setproperty($names[2], stack1, local1);
                        }
//                        stack0 = local1;// JIT: redundant assigment, value unused
//                        stack1 = local1;// JIT: redundant assigment, value unused
                        // 7 0::y
                        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])) {
                            stack1 = local1['y'];
                        } else {
                            temp = local1[AX_CLASS_SYMBOL] ? local1 : sec.box(local1);
                            stack1 = temp.$Bgy;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[5]);
                            }
                        }
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[3], true, false);
                        stack2 = temp.$BgUtils;
                        if (stack2 === undefined || typeof stack2 === 'function') {
                            stack2 = temp.axGetProperty($names[3]);
                        }
                        // 7 0::m_scale
                        //Possible type:7 0::Utils
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['m_scale'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$Bgm_scale;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[4]);
                            }
                        }
                        stack1 *= stack2;
                        // 7 0::y
                        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])){
                            local1.y = stack1;
                        } else {
                            context.setproperty($names[5], stack1, local1);
                        }
                        stack0 = local1;
                        return local1;
                    }
                }
            }
//# sourceURL=http://jit/entities/Hero/m_getMidPosition.js
})