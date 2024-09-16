(function anonymous(context
) {
/*
	Index: 1089
	Path:  entities/SmallHero::m_deleteHero
	Type:  Public
	Kind:  Method
	Super: entities/Entity
	Return: 7 0::void
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_m_deleteHero() {
        // Possible use a real "this"
        // local1 is assigned before read, skip init
        let local1 = undefined
        let stack0 = undefined;
        let stack1 = undefined;
        let stack2 = undefined;
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
//                        stack0 = 0;// JIT: redundant assigment, value unused
                        local1 = 0;
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[0], true, false);
                        stack0 = temp.$BgUtils;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[0]);
                        }
                        // 7 0::world
                        //Possible type:7 0::Utils
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['world'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgworld;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[1]);
                            }
                        }
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack1 = this.$BgentitySprite;
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.removeChild(stack1);
                        } else {
                            // 7 0::removeChild
                            {
                                let t = stack0;
                                const m = t.$BgremoveChild || (t = sec.box(stack0), t.$BgremoveChild);
                                if( typeof m === "function" ) { 
                                    m.call(t, stack1);
                                } else { 
                                   stack0.axCallProperty($names[2], [stack1], false);
                                }
                            }
                        }
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[0], true, false);
                        stack0 = temp.$BgUtils;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[0]);
                        }
                        // 7 0::world
                        //Possible type:7 0::Utils
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['world'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgworld;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[1]);
                            }
                        }
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::eye1
                        //Possible type:7 0::entitySprite
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack1 = this.$Bgeye1;
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.removeChild(stack1);
                        } else {
                            // 7 0::removeChild
                            {
                                let t = stack0;
                                const m = t.$BgremoveChild || (t = sec.box(stack0), t.$BgremoveChild);
                                if( typeof m === "function" ) { 
                                    m.call(t, stack1);
                                } else { 
                                   stack0.axCallProperty($names[2], [stack1], false);
                                }
                            }
                        }
                        // 7 0::entitySprite
                        stack0 = scope0.findScopeProperty($names[3], false, false);
//                        stack1 = null;// JIT: redundant assigment, value unused
                        // 7 0::entitySprite
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.entitySprite = null;
                        } else {
                            context.setproperty($names[3], null, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = null;// JIT: redundant assigment, value unused
                        // 7 0::eye1
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0:flash.display::MovieClip  */ 
                        this.$Bgeye1 = null;
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack0 = this.$BganimationManager;
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.destroy();
                        } else {
                            // 7 0::destroy
                            {
                                let t = stack0;
                                const m = t.$Bgdestroy || (t = sec.box(stack0), t.$Bgdestroy);
                                if( typeof m === "function" ) { 
                                    m.call(t);
                                } else { 
                                   stack0.axCallProperty($names[4], [], false);
                                }
                            }
                        }
                        // 7 0::animationManager
                        stack0 = scope0.findScopeProperty($names[5], false, false);
//                        stack1 = null;// JIT: redundant assigment, value unused
                        // 7 0::animationManager
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.animationManager = null;
                        } else {
                            context.setproperty($names[5], null, stack0);
                        }
                        // 7 0::collisionCircle
                        stack0 = scope0.findScopeProperty($names[6], false, false);
//                        stack1 = null;// JIT: redundant assigment, value unused
                        // 7 0::collisionCircle
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.collisionCircle = null;
                        } else {
                            context.setproperty($names[6], null, stack0);
                        }
                        // 7 0::aabb
                        stack0 = scope0.findScopeProperty($names[7], false, false);
//                        stack1 = null;// JIT: redundant assigment, value unused
                        // 7 0::aabb
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.aabb = null;
                        } else {
                            context.setproperty($names[7], null, stack0);
                        }
//                        stack0 = 0;// JIT: redundant assigment, value unused
                        local1 = 0;
                        { p = 100; continue; };
                    case 79:
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[0], true, false);
                        stack0 = temp.$BgUtils;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[0]);
                        }
                        // 7 0::m_world
                        //Possible type:7 0::Utils
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['m_world'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgm_world;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[8]);
                            }
                        }
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::heroBodies
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack1 = this.$BgheroBodies;
                        stack2 = local1;
                        // 27 {3, 0, 0:entities, 1:entities:SmallHero, 0:flash.display, 0:flash.filters, 0:http://adobe.com/AS3/2006/builtin, 0:levels, 0:Box2D.Common.Math, 0:Box2D.Dynamics, 3, 2:entities, 0:flash.geom, 0:entities.particles, 0:Box2D.Collision, 0:Box2D.Collision.Shapes, 0:Box2D.Dynamics.Joints, 0:Box2D.Dynamics.Contacts, 5:entities:SmallHero, 5:entities:Entity}::*
                        {
                            let simple = local1;
                            const b_obj = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);

                            if (typeof simple === "number") {
                                stack1 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack1 = b_obj['$Bg' + simple];
                                if (stack1 === undefined || typeof stack1 === 'function') {
                                    const rm = context.runtimename($names[9], local1);
                                    stack1 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.DestroyBody(stack1);
                        } else {
                            // 7 0::DestroyBody
                            {
                                let t = stack0;
                                const m = t.$BgDestroyBody || (t = sec.box(stack0), t.$BgDestroyBody);
                                if( typeof m === "function" ) { 
                                    m.call(t, stack1);
                                } else { 
                                   stack0.axCallProperty($names[10], [stack1], false);
                                }
                            }
                        }
                        local1 = (local1 | 0) + 1;
                    case 100:
                        stack0 = local1;
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::heroBodies
                        //Possible type:7 0::Array
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
                                stack1 = temp.axGetProperty($names[11]);
                            }
                        }
                        if (stack1 > local1) { p = 79; continue; };
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[0], true, false);
                        stack0 = temp.$BgUtils;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[0]);
                        }
                        // 7 0::m_world
                        //Possible type:7 0::Utils
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['m_world'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgm_world;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[8]);
                            }
                        }
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::heart
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Dynamics::b2Body  */ 
                        stack1 = this.$Bgheart;
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.DestroyBody(stack1);
                        } else {
                            // 7 0::DestroyBody
                            {
                                let t = stack0;
                                const m = t.$BgDestroyBody || (t = sec.box(stack0), t.$BgDestroyBody);
                                if( typeof m === "function" ) { 
                                    m.call(t, stack1);
                                } else { 
                                   stack0.axCallProperty($names[10], [stack1], false);
                                }
                            }
                        }
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[0], true, false);
                        stack0 = temp.$BgUtils;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[0]);
                        }
                        // 7 0::m_world
                        //Possible type:7 0::Utils
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['m_world'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgm_world;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[8]);
                            }
                        }
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::eye_1
                        //Possible type:7 0:Box2D.Dynamics::b2Body
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Dynamics::b2Body  */ 
                        stack1 = this.$Bgeye_1;
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.DestroyBody(stack1);
                        } else {
                            // 7 0::DestroyBody
                            {
                                let t = stack0;
                                const m = t.$BgDestroyBody || (t = sec.box(stack0), t.$BgDestroyBody);
                                if( typeof m === "function" ) { 
                                    m.call(t, stack1);
                                } else { 
                                   stack0.axCallProperty($names[10], [stack1], false);
                                }
                            }
                        }
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[0], true, false);
                        stack0 = temp.$BgUtils;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[0]);
                        }
                        // 7 0::m_world
                        //Possible type:7 0::Utils
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['m_world'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgm_world;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[8]);
                            }
                        }
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::aabbBody
                        //Possible type:7 0:Box2D.Dynamics::b2Body
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Dynamics::b2Body  */ 
                        stack1 = this.$BgaabbBody;
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.DestroyBody(stack1);
                        } else {
                            // 7 0::DestroyBody
                            {
                                let t = stack0;
                                const m = t.$BgDestroyBody || (t = sec.box(stack0), t.$BgDestroyBody);
                                if( typeof m === "function" ) { 
                                    m.call(t, stack1);
                                } else { 
                                   stack0.axCallProperty($names[10], [stack1], false);
                                }
                            }
                        }
//                        stack0 = 0;// JIT: redundant assigment, value unused
                        local1 = 0;
                        { p = 182; continue; };
                    case 161:
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[0], true, false);
                        stack0 = temp.$BgUtils;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[0]);
                        }
                        // 7 0::m_world
                        //Possible type:7 0::Utils
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['m_world'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgm_world;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[8]);
                            }
                        }
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::heroEyeJoints
                        //Possible type:7 0:Box2D.Dynamics::b2Body
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack1 = this.$BgheroEyeJoints;
                        stack2 = local1;
                        // 27 {3, 0, 0:entities, 1:entities:SmallHero, 0:flash.display, 0:flash.filters, 0:http://adobe.com/AS3/2006/builtin, 0:levels, 0:Box2D.Common.Math, 0:Box2D.Dynamics, 3, 2:entities, 0:flash.geom, 0:entities.particles, 0:Box2D.Collision, 0:Box2D.Collision.Shapes, 0:Box2D.Dynamics.Joints, 0:Box2D.Dynamics.Contacts, 5:entities:SmallHero, 5:entities:Entity}::*
                        {
                            let simple = local1;
                            const b_obj = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);

                            if (typeof simple === "number") {
                                stack1 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack1 = b_obj['$Bg' + simple];
                                if (stack1 === undefined || typeof stack1 === 'function') {
                                    const rm = context.runtimename($names[9], local1);
                                    stack1 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.DestroyJoint(stack1);
                        } else {
                            // 7 0::DestroyJoint
                            {
                                let t = stack0;
                                const m = t.$BgDestroyJoint || (t = sec.box(stack0), t.$BgDestroyJoint);
                                if( typeof m === "function" ) { 
                                    m.call(t, stack1);
                                } else { 
                                   stack0.axCallProperty($names[12], [stack1], false);
                                }
                            }
                        }
                        local1 = (local1 | 0) + 1;
                    case 182:
                        stack0 = local1;
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::heroEyeJoints
                        //Possible type:7 0::Array
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack1 = this.$BgheroEyeJoints;
                        // 7 0::length
                        //Possible type:7 0::Array
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['length'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$Bglength;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[11]);
                            }
                        }
                        if (stack1 > local1) { p = 161; continue; };
//                        stack0 = 0;// JIT: redundant assigment, value unused
                        local1 = 0;
                        { p = 222; continue; };
                    case 201:
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[0], true, false);
                        stack0 = temp.$BgUtils;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[0]);
                        }
                        // 7 0::m_world
                        //Possible type:7 0::Utils
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['m_world'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgm_world;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[8]);
                            }
                        }
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::heroSkinJoints
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack1 = this.$BgheroSkinJoints;
                        stack2 = local1;
                        // 27 {3, 0, 0:entities, 1:entities:SmallHero, 0:flash.display, 0:flash.filters, 0:http://adobe.com/AS3/2006/builtin, 0:levels, 0:Box2D.Common.Math, 0:Box2D.Dynamics, 3, 2:entities, 0:flash.geom, 0:entities.particles, 0:Box2D.Collision, 0:Box2D.Collision.Shapes, 0:Box2D.Dynamics.Joints, 0:Box2D.Dynamics.Contacts, 5:entities:SmallHero, 5:entities:Entity}::*
                        {
                            let simple = local1;
                            const b_obj = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);

                            if (typeof simple === "number") {
                                stack1 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack1 = b_obj['$Bg' + simple];
                                if (stack1 === undefined || typeof stack1 === 'function') {
                                    const rm = context.runtimename($names[9], local1);
                                    stack1 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.DestroyJoint(stack1);
                        } else {
                            // 7 0::DestroyJoint
                            {
                                let t = stack0;
                                const m = t.$BgDestroyJoint || (t = sec.box(stack0), t.$BgDestroyJoint);
                                if( typeof m === "function" ) { 
                                    m.call(t, stack1);
                                } else { 
                                   stack0.axCallProperty($names[12], [stack1], false);
                                }
                            }
                        }
                        local1 = (local1 | 0) + 1;
                    case 222:
                        stack0 = local1;
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::heroSkinJoints
                        //Possible type:7 0::Array
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack1 = this.$BgheroSkinJoints;
                        // 7 0::length
                        //Possible type:7 0::Array
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['length'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$Bglength;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[11]);
                            }
                        }
                        if (stack1 > local1) { p = 201; continue; };
//                        stack0 = 0;// JIT: redundant assigment, value unused
                        local1 = 0;
                        { p = 262; continue; };
                    case 241:
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[0], true, false);
                        stack0 = temp.$BgUtils;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[0]);
                        }
                        // 7 0::m_world
                        //Possible type:7 0::Utils
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['m_world'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgm_world;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[8]);
                            }
                        }
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::heroSkeletonJoints
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack1 = this.$BgheroSkeletonJoints;
                        stack2 = local1;
                        // 27 {3, 0, 0:entities, 1:entities:SmallHero, 0:flash.display, 0:flash.filters, 0:http://adobe.com/AS3/2006/builtin, 0:levels, 0:Box2D.Common.Math, 0:Box2D.Dynamics, 3, 2:entities, 0:flash.geom, 0:entities.particles, 0:Box2D.Collision, 0:Box2D.Collision.Shapes, 0:Box2D.Dynamics.Joints, 0:Box2D.Dynamics.Contacts, 5:entities:SmallHero, 5:entities:Entity}::*
                        {
                            let simple = local1;
                            const b_obj = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);

                            if (typeof simple === "number") {
                                stack1 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack1 = b_obj['$Bg' + simple];
                                if (stack1 === undefined || typeof stack1 === 'function') {
                                    const rm = context.runtimename($names[9], local1);
                                    stack1 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.DestroyJoint(stack1);
                        } else {
                            // 7 0::DestroyJoint
                            {
                                let t = stack0;
                                const m = t.$BgDestroyJoint || (t = sec.box(stack0), t.$BgDestroyJoint);
                                if( typeof m === "function" ) { 
                                    m.call(t, stack1);
                                } else { 
                                   stack0.axCallProperty($names[12], [stack1], false);
                                }
                            }
                        }
                        local1 = (local1 | 0) + 1;
                    case 262:
                        stack0 = local1;
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::heroSkeletonJoints
                        //Possible type:7 0::Array
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack1 = this.$BgheroSkeletonJoints;
                        // 7 0::length
                        //Possible type:7 0::Array
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['length'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$Bglength;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[11]);
                            }
                        }
                        if (stack1 > local1) { p = 241; continue; };
                        return;
                    }
                }
            }
//# sourceURL=http://jit/entities/SmallHero/m_deleteHero.js
})