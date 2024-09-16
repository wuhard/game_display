(function anonymous(context
) {
/*
	Index: 1080
	Path:  entities/SmallHero::m_splat
	Type:  Public
	Kind:  Method
	Super: entities/Entity
	Return: 7 0::void
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;

             /* e */
             const __Math = context.getTopLevel(7)['$BgMath']; // :Math

    return function compiled_m_splat() {
        // Possible use a real "this"
        // local1 is assigned before read, skip init
        let local1 = undefined
        // local2 is assigned before read, skip init
        let local2 = undefined
        // local3 is assigned before read, skip init
        let local3 = undefined
        let stack0 = undefined;
        let stack1 = undefined;
        let stack2 = undefined;
        let stack3 = undefined;
        let stack4 = undefined;
        let stack5 = undefined;
        let stack6 = undefined;
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
//                        stack0 = null;// JIT: redundant assigment, value unused
                        //JIT: SKIP_NULL_COERCE
                        local2 = null;
//                        stack0 = NaN;// JIT: redundant assigment, value unused
                        local3 = NaN;
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = true;// JIT: redundant assigment, value unused
                        // 7 0::isSplatted
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Boolean  */ 
                        this.$BgisSplatted = true;
//                        stack0 = 0;// JIT: redundant assigment, value unused
                        local1 = 0;
                        { p = 41; continue; };
                    case 24:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::heroSkinJoints
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack0 = this.$BgheroSkinJoints;
                        stack1 = local1;
                        // 27 {3, 0, 0:entities, 1:entities:SmallHero, 0:flash.display, 0:flash.filters, 0:http://adobe.com/AS3/2006/builtin, 0:levels, 0:Box2D.Common.Math, 0:Box2D.Dynamics, 3, 2:entities, 0:flash.geom, 0:entities.particles, 0:Box2D.Collision, 0:Box2D.Collision.Shapes, 0:Box2D.Dynamics.Joints, 0:Box2D.Dynamics.Contacts, 5:entities:SmallHero, 5:entities:Entity}::*
                        {
                            let simple = local1;
                            const b_obj = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);

                            if (typeof simple === "number") {
                                stack0 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack0 = b_obj['$Bg' + simple];
                                if (stack0 === undefined || typeof stack0 === 'function') {
                                    const rm = context.runtimename($names[0], local1);
                                    stack0 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
//                        stack1 = 2;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.SetFrequency(2);
                        } else {
                            // 9 {3, 0, 0:entities, 1:entities:SmallHero, 0:flash.display, 0:flash.filters, 0:http://adobe.com/AS3/2006/builtin, 0:levels, 0:Box2D.Common.Math, 0:Box2D.Dynamics, 3, 2:entities, 0:flash.geom, 0:entities.particles, 0:Box2D.Collision, 0:Box2D.Collision.Shapes, 0:Box2D.Dynamics.Joints, 0:Box2D.Dynamics.Contacts, 5:entities:SmallHero, 5:entities:Entity}::SetFrequency
                            {
                                let t = stack0;
                                const m = t.$BgSetFrequency || (t = sec.box(stack0), t.$BgSetFrequency);
                                if( typeof m === "function" ) { 
                                    m.call(t, 2);
                                } else { 
                                   stack0.axCallProperty($names[1], [2], false);
                                }
                            }
                        }
                        local1 = (local1 | 0) + 1;
                    case 41:
                        stack0 = local1;
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::heroSkinJoints
                        //Possible type:undefined
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
                                stack1 = temp.axGetProperty($names[2]);
                            }
                        }
                        if (stack1 > local1) { p = 24; continue; };
//                        stack0 = 0;// JIT: redundant assigment, value unused
                        local1 = 0;
                        { p = 77; continue; };
                    case 60:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::heroSkeletonJoints
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack0 = this.$BgheroSkeletonJoints;
                        stack1 = local1;
                        // 27 {3, 0, 0:entities, 1:entities:SmallHero, 0:flash.display, 0:flash.filters, 0:http://adobe.com/AS3/2006/builtin, 0:levels, 0:Box2D.Common.Math, 0:Box2D.Dynamics, 3, 2:entities, 0:flash.geom, 0:entities.particles, 0:Box2D.Collision, 0:Box2D.Collision.Shapes, 0:Box2D.Dynamics.Joints, 0:Box2D.Dynamics.Contacts, 5:entities:SmallHero, 5:entities:Entity}::*
                        {
                            let simple = local1;
                            const b_obj = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);

                            if (typeof simple === "number") {
                                stack0 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack0 = b_obj['$Bg' + simple];
                                if (stack0 === undefined || typeof stack0 === 'function') {
                                    const rm = context.runtimename($names[0], local1);
                                    stack0 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
//                        stack1 = 2;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.SetFrequency(2);
                        } else {
                            // 9 {3, 0, 0:entities, 1:entities:SmallHero, 0:flash.display, 0:flash.filters, 0:http://adobe.com/AS3/2006/builtin, 0:levels, 0:Box2D.Common.Math, 0:Box2D.Dynamics, 3, 2:entities, 0:flash.geom, 0:entities.particles, 0:Box2D.Collision, 0:Box2D.Collision.Shapes, 0:Box2D.Dynamics.Joints, 0:Box2D.Dynamics.Contacts, 5:entities:SmallHero, 5:entities:Entity}::SetFrequency
                            {
                                let t = stack0;
                                const m = t.$BgSetFrequency || (t = sec.box(stack0), t.$BgSetFrequency);
                                if( typeof m === "function" ) { 
                                    m.call(t, 2);
                                } else { 
                                   stack0.axCallProperty($names[1], [2], false);
                                }
                            }
                        }
                        local1 = (local1 | 0) + 1;
                    case 77:
                        stack0 = local1;
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::heroSkeletonJoints
                        //Possible type:undefined
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
                                stack1 = temp.axGetProperty($names[2]);
                            }
                        }
                        if (stack1 > local1) { p = 60; continue; };
//                        stack0 = 0;// JIT: redundant assigment, value unused
                        local1 = 0;
                        { p = 135; continue; };
                    case 96:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::heroBodies
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack0 = this.$BgheroBodies;
                        stack1 = local1;
                        // 27 {3, 0, 0:entities, 1:entities:SmallHero, 0:flash.display, 0:flash.filters, 0:http://adobe.com/AS3/2006/builtin, 0:levels, 0:Box2D.Common.Math, 0:Box2D.Dynamics, 3, 2:entities, 0:flash.geom, 0:entities.particles, 0:Box2D.Collision, 0:Box2D.Collision.Shapes, 0:Box2D.Dynamics.Joints, 0:Box2D.Dynamics.Contacts, 5:entities:SmallHero, 5:entities:Entity}::*
                        {
                            let simple = local1;
                            const b_obj = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);

                            if (typeof simple === "number") {
                                stack0 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack0 = b_obj['$Bg' + simple];
                                if (stack0 === undefined || typeof stack0 === 'function') {
                                    const rm = context.runtimename($names[0], local1);
                                    stack0 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                           stack0 = stack0.GetFixtureList();
                        } else {
                            // 9 {3, 0, 0:entities, 1:entities:SmallHero, 0:flash.display, 0:flash.filters, 0:http://adobe.com/AS3/2006/builtin, 0:levels, 0:Box2D.Common.Math, 0:Box2D.Dynamics, 3, 2:entities, 0:flash.geom, 0:entities.particles, 0:Box2D.Collision, 0:Box2D.Collision.Shapes, 0:Box2D.Dynamics.Joints, 0:Box2D.Dynamics.Contacts, 5:entities:SmallHero, 5:entities:Entity}::GetFixtureList
                            {
                                let t = stack0;
                                const m = t.$BgGetFixtureList || (t = sec.box(stack0), t.$BgGetFixtureList);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BgGetFixtureList ();
                                } else { 
                                    stack0 = stack0.axCallProperty($names[3], [], false);
                                }
                            }
                        }
//                        stack1 = 0.1;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.SetFriction(0.1);
                        } else {
                            // 9 {3, 0, 0:entities, 1:entities:SmallHero, 0:flash.display, 0:flash.filters, 0:http://adobe.com/AS3/2006/builtin, 0:levels, 0:Box2D.Common.Math, 0:Box2D.Dynamics, 3, 2:entities, 0:flash.geom, 0:entities.particles, 0:Box2D.Collision, 0:Box2D.Collision.Shapes, 0:Box2D.Dynamics.Joints, 0:Box2D.Dynamics.Contacts, 5:entities:SmallHero, 5:entities:Entity}::SetFriction
                            {
                                let t = stack0;
                                const m = t.$BgSetFriction || (t = sec.box(stack0), t.$BgSetFriction);
                                if( typeof m === "function" ) { 
                                    m.call(t, 0.1);
                                } else { 
                                   stack0.axCallProperty($names[4], [0.1], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::heroBodies
                        //Possible type:7 0::Array
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack0 = this.$BgheroBodies;
                        stack1 = local1;
                        // 27 {3, 0, 0:entities, 1:entities:SmallHero, 0:flash.display, 0:flash.filters, 0:http://adobe.com/AS3/2006/builtin, 0:levels, 0:Box2D.Common.Math, 0:Box2D.Dynamics, 3, 2:entities, 0:flash.geom, 0:entities.particles, 0:Box2D.Collision, 0:Box2D.Collision.Shapes, 0:Box2D.Dynamics.Joints, 0:Box2D.Dynamics.Contacts, 5:entities:SmallHero, 5:entities:Entity}::*
                        {
                            let simple = local1;
                            const b_obj = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);

                            if (typeof simple === "number") {
                                stack0 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack0 = b_obj['$Bg' + simple];
                                if (stack0 === undefined || typeof stack0 === 'function') {
                                    const rm = context.runtimename($names[0], local1);
                                    stack0 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                           stack0 = stack0.GetFixtureList();
                        } else {
                            // 9 {3, 0, 0:entities, 1:entities:SmallHero, 0:flash.display, 0:flash.filters, 0:http://adobe.com/AS3/2006/builtin, 0:levels, 0:Box2D.Common.Math, 0:Box2D.Dynamics, 3, 2:entities, 0:flash.geom, 0:entities.particles, 0:Box2D.Collision, 0:Box2D.Collision.Shapes, 0:Box2D.Dynamics.Joints, 0:Box2D.Dynamics.Contacts, 5:entities:SmallHero, 5:entities:Entity}::GetFixtureList
                            {
                                let t = stack0;
                                const m = t.$BgGetFixtureList || (t = sec.box(stack0), t.$BgGetFixtureList);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BgGetFixtureList ();
                                } else { 
                                    stack0 = stack0.axCallProperty($names[3], [], false);
                                }
                            }
                        }
//                        stack1 = 0;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.SetRestitution(0);
                        } else {
                            // 9 {3, 0, 0:entities, 1:entities:SmallHero, 0:flash.display, 0:flash.filters, 0:http://adobe.com/AS3/2006/builtin, 0:levels, 0:Box2D.Common.Math, 0:Box2D.Dynamics, 3, 2:entities, 0:flash.geom, 0:entities.particles, 0:Box2D.Collision, 0:Box2D.Collision.Shapes, 0:Box2D.Dynamics.Joints, 0:Box2D.Dynamics.Contacts, 5:entities:SmallHero, 5:entities:Entity}::SetRestitution
                            {
                                let t = stack0;
                                const m = t.$BgSetRestitution || (t = sec.box(stack0), t.$BgSetRestitution);
                                if( typeof m === "function" ) { 
                                    m.call(t, 0);
                                } else { 
                                   stack0.axCallProperty($names[5], [0], false);
                                }
                            }
                        }
                        local1 = (local1 | 0) + 1;
                    case 135:
                        stack0 = local1;
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::heroBodies
                        //Possible type:undefined
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
                                stack1 = temp.axGetProperty($names[2]);
                            }
                        }
                        if (stack1 > local1) { p = 96; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::magnitude
                        //Possible type:7 0::Array
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
                        stack0 = this.$Bgmagnitude;
                        stack1 = 1;
                        //JIT: Emit inline return
                        if (1 == stack0) { return; }
//                        stack0 = 0;// JIT: redundant assigment, value unused
                        local1 = 0;
                        { p = 347; continue; };
                    case 164:
                        // 7 0::SlimeParticle
                        stack0 = scope0.findScopeProperty($names[6], true, false);
                        stack0 = context.constructprop($names[6], stack0, []);
                        //IR: Drop coerce, reason: redundant
                        local2 = stack0;
//                        stack0 = local2;// JIT: redundant assigment, value unused
                        // 7 0::Math
                        /* GenerateLexImports GETLEX */
//                        stack1 = __Math;// JIT: redundant assigment, value unused
                        if (!(_a = typeof __Math, ((_a !== 'object' && _a !== 'function' ) || __Math == null || __Math[AX_CLASS_SYMBOL]))) {
                           stack1 = __Math.random();
                        } else {
                            // 7 0::random
                            {
                                let t = __Math;
                                const m = t.$Bgrandom || (t = sec.box(__Math), t.$Bgrandom);
                                if( typeof m === "function" ) { 
                                    stack1 = t.$Bgrandom ();
                                } else { 
                                    stack1 = __Math.axCallProperty($names[8], [], false);
                                }
                            }
                        }
//                        stack2 = 0.7;// JIT: redundant assigment, value unused
                        stack1 *= 0.7;
//                        stack2 = 0.3;// JIT: redundant assigment, value unused
                        stack1 += 0.3;
                        // 7 0::alpha
                        if (!(local2 != undefined && local2[AX_CLASS_SYMBOL])){
                            local2.alpha = stack1;
                        } else {
                            context.setproperty($names[9], stack1, local2);
                        }
//                        stack0 = local2;// JIT: redundant assigment, value unused
                        // 7 0::Math
                        /* GenerateLexImports GETLEX */
//                        stack1 = __Math;// JIT: redundant assigment, value unused
                        if (!(_a = typeof __Math, ((_a !== 'object' && _a !== 'function' ) || __Math == null || __Math[AX_CLASS_SYMBOL]))) {
                           stack1 = __Math.random();
                        } else {
                            // 7 0::random
                            {
                                let t = __Math;
                                const m = t.$Bgrandom || (t = sec.box(__Math), t.$Bgrandom);
                                if( typeof m === "function" ) { 
                                    stack1 = t.$Bgrandom ();
                                } else { 
                                    stack1 = __Math.axCallProperty($names[8], [], false);
                                }
                            }
                        }
//                        stack2 = 0.5;// JIT: redundant assigment, value unused
                        stack1 *= 0.5;
//                        stack2 = this;// JIT: redundant assigment, value unused
                        // 7 0::magnitude
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
                        stack2 = this.$Bgmagnitude;
                        stack2--;
                        stack1 += stack2;
                        // 7 0::scaleX
                        if (!(local2 != undefined && local2[AX_CLASS_SYMBOL])){
                            local2.scaleX = stack1;
                        } else {
                            context.setproperty($names[10], stack1, local2);
                        }
//                        stack0 = local2;// JIT: redundant assigment, value unused
//                        stack1 = local2;// JIT: redundant assigment, value unused
                        // 7 0::scaleX
                        //Possible type:7 0::Math
                        if (!(local2 != undefined && local2[AX_CLASS_SYMBOL])) {
                            stack1 = local2['scaleX'];
                        } else {
                            temp = local2[AX_CLASS_SYMBOL] ? local2 : sec.box(local2);
                            stack1 = temp.$BgscaleX;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[10]);
                            }
                        }
                        // 7 0::scaleY
                        if (!(local2 != undefined && local2[AX_CLASS_SYMBOL])){
                            local2.scaleY = stack1;
                        } else {
                            context.setproperty($names[11], stack1, local2);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::currentMidPosition
                        //Possible type:7 0::SlimeParticle
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Common.Math::b2Vec2  */ 
                        stack0 = this.$BgcurrentMidPosition;
                        // 7 0::x
                        //Possible type:7 0:Box2D.Common.Math::b2Vec2
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['x'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgx;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[12]);
                            }
                        }
                        // 7 0::Math
                        /* GenerateLexImports GETLEX */
//                        stack1 = __Math;// JIT: redundant assigment, value unused
                        if (!(_a = typeof __Math, ((_a !== 'object' && _a !== 'function' ) || __Math == null || __Math[AX_CLASS_SYMBOL]))) {
                           stack1 = __Math.random();
                        } else {
                            // 7 0::random
                            {
                                let t = __Math;
                                const m = t.$Bgrandom || (t = sec.box(__Math), t.$Bgrandom);
                                if( typeof m === "function" ) { 
                                    stack1 = t.$Bgrandom ();
                                } else { 
                                    stack1 = __Math.axCallProperty($names[8], [], false);
                                }
                            }
                        }
//                        stack2 = this;// JIT: redundant assigment, value unused
                        // 7 0::heroRadius
                        //Possible type:7 0::Number
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::int  */ 
                        stack2 = this.$BgheroRadius;
                        stack1 *= stack2;
//                        stack2 = this;// JIT: redundant assigment, value unused
                        // 7 0::magnitude
                        //Possible type:7 0::int
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
                        stack2 = this.$Bgmagnitude;
                        stack1 *= stack2;
//                        stack2 = 1.8;// JIT: redundant assigment, value unused
                        stack1 *= 1.8;
//                        stack2 = this;// JIT: redundant assigment, value unused
                        // 7 0::heroRadius
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::int  */ 
                        stack2 = this.$BgheroRadius;
//                        stack3 = this;// JIT: redundant assigment, value unused
                        // 7 0::magnitude
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
                        stack3 = this.$Bgmagnitude;
                        stack2 *= stack3;
//                        stack3 = 0.9;// JIT: redundant assigment, value unused
                        stack2 *= 0.9;
                        stack1 -= stack2;
                        stack0 += stack1;
                        stack0 = +stack0;
                        local3 = stack0;
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack0 = this.$Bglevel;
                        // 7 0::particlesManager
                        //Possible type:7 0::level
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['particlesManager'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgparticlesManager;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[13]);
                            }
                        }
//                        stack1 = local2;// JIT: redundant assigment, value unused
//                        stack2 = local3;// JIT: redundant assigment, value unused
//                        stack3 = this;// JIT: redundant assigment, value unused
                        // 7 0::currentMidPosition
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Common.Math::b2Vec2  */ 
                        stack3 = this.$BgcurrentMidPosition;
                        // 7 0::y
                        //Possible type:7 0:Box2D.Common.Math::b2Vec2
                        if (!(stack3 != undefined && stack3[AX_CLASS_SYMBOL])) {
                            stack3 = stack3['y'];
                        } else {
                            temp = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);
                            stack3 = temp.$Bgy;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[14]);
                            }
                        }
                        // 7 0::Math
                        /* GenerateLexImports GETLEX */
//                        stack4 = __Math;// JIT: redundant assigment, value unused
                        if (!(_a = typeof __Math, ((_a !== 'object' && _a !== 'function' ) || __Math == null || __Math[AX_CLASS_SYMBOL]))) {
                           stack4 = __Math.random();
                        } else {
                            // 7 0::random
                            {
                                let t = __Math;
                                const m = t.$Bgrandom || (t = sec.box(__Math), t.$Bgrandom);
                                if( typeof m === "function" ) { 
                                    stack4 = t.$Bgrandom ();
                                } else { 
                                    stack4 = __Math.axCallProperty($names[8], [], false);
                                }
                            }
                        }
//                        stack5 = this;// JIT: redundant assigment, value unused
                        // 7 0::heroRadius
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::int  */ 
                        stack5 = this.$BgheroRadius;
                        stack4 *= stack5;
//                        stack5 = this;// JIT: redundant assigment, value unused
                        // 7 0::magnitude
                        //Possible type:7 0::int
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
                        stack5 = this.$Bgmagnitude;
                        stack4 *= stack5;
//                        stack5 = 1.2;// JIT: redundant assigment, value unused
                        stack4 *= 1.2;
//                        stack5 = this;// JIT: redundant assigment, value unused
                        // 7 0::heroRadius
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::int  */ 
                        stack5 = this.$BgheroRadius;
//                        stack6 = this;// JIT: redundant assigment, value unused
                        // 7 0::magnitude
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
                        stack6 = this.$Bgmagnitude;
                        stack5 *= stack6;
//                        stack6 = 0.6;// JIT: redundant assigment, value unused
                        stack5 *= 0.6;
                        stack4 -= stack5;
                        stack3 += stack4;
                        stack4 = local3;
//                        stack5 = this;// JIT: redundant assigment, value unused
                        // 7 0::currentMidPosition
                        //Possible type:7 0::int
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Common.Math::b2Vec2  */ 
                        stack5 = this.$BgcurrentMidPosition;
                        // 7 0::x
                        //Possible type:7 0:Box2D.Common.Math::b2Vec2
                        if (!(stack5 != undefined && stack5[AX_CLASS_SYMBOL])) {
                            stack5 = stack5['x'];
                        } else {
                            temp = stack5[AX_CLASS_SYMBOL] ? stack5 : sec.box(stack5);
                            stack5 = temp.$Bgx;
                            if (stack5 === undefined || typeof stack5 === 'function') {
                                stack5 = temp.axGetProperty($names[12]);
                            }
                        }
                        stack4 -= stack5;
//                        stack5 = 2;// JIT: redundant assigment, value unused
                        stack4 /= 2;
                        // 7 0::Math
                        /* GenerateLexImports GETLEX */
//                        stack5 = __Math;// JIT: redundant assigment, value unused
                        if (!(_a = typeof __Math, ((_a !== 'object' && _a !== 'function' ) || __Math == null || __Math[AX_CLASS_SYMBOL]))) {
                           stack5 = __Math.random();
                        } else {
                            // 7 0::random
                            {
                                let t = __Math;
                                const m = t.$Bgrandom || (t = sec.box(__Math), t.$Bgrandom);
                                if( typeof m === "function" ) { 
                                    stack5 = t.$Bgrandom ();
                                } else { 
                                    stack5 = __Math.axCallProperty($names[8], [], false);
                                }
                            }
                        }
//                        stack6 = 4;// JIT: redundant assigment, value unused
                        stack5 *= 4;
//                        stack6 = 2;// JIT: redundant assigment, value unused
                        stack5 += 2;
                        stack5 = -stack5;
//                        stack6 = 0.89;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.pushParticle(local2, local3, stack3, stack4, stack5, 0.89);
                        } else {
                            // 7 0::pushParticle
                            {
                                let t = stack0;
                                const m = t.$BgpushParticle || (t = sec.box(stack0), t.$BgpushParticle);
                                if( typeof m === "function" ) { 
                                    m.call(t, local2, local3, stack3, stack4, stack5, 0.89);
                                } else { 
                                   stack0.axCallProperty($names[15], [local2, local3, stack3, stack4, stack5, 0.89], false);
                                }
                            }
                        }
                        local1 = (local1 | 0) + 1;
                    case 347:
                        stack0 = local1;
                        stack1 = 10;
//                        stack2 = this;// JIT: redundant assigment, value unused
                        // 7 0::magnitude
                        //Possible type:7 0::int
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
                        stack2 = this.$Bgmagnitude;
                        stack1 *= stack2;
                        if (stack1 > local1) { p = 164; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        /* We sure that this safe call, represented in TRAIT as Method  */ 
                        this.$BgonTop();
                        // 7 0::SoundSystem
                        temp = scope0.findScopeProperty($names[16], true, false);
                        stack0 = temp.$BgSoundSystem;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[16]);
                        }
//                        stack1 = "decrease";// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.PlaySound("decrease");
                        } else {
                            // 7 0::PlaySound
                            {
                                let t = stack0;
                                const m = t.$BgPlaySound || (t = sec.box(stack0), t.$BgPlaySound);
                                if( typeof m === "function" ) { 
                                    m.call(t, "decrease");
                                } else { 
                                   stack0.axCallProperty($names[17], ["decrease"], false);
                                }
                            }
                        }
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[18], true, false);
                        stack0 = temp.$BgUtils;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[18]);
                        }
//                        stack1 = 1;// JIT: redundant assigment, value unused
                        // 7 0::PlayerLifes
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.PlayerLifes = 1;
                        } else {
                            context.setproperty($names[19], 1, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = 1;// JIT: redundant assigment, value unused
                        // 7 0::magnitude
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Number  */ 
                        this.$Bgmagnitude = 1;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        /* We sure that this safe call, represented in TRAIT as Method  */ 
                        this.$BgscaleSlime();
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack0 = this.$Bglevel;
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.heroResettedSize();
                        } else {
                            // 7 0::heroResettedSize
                            {
                                let t = stack0;
                                const m = t.$BgheroResettedSize || (t = sec.box(stack0), t.$BgheroResettedSize);
                                if( typeof m === "function" ) { 
                                    m.call(t);
                                } else { 
                                   stack0.axCallProperty($names[20], [], false);
                                }
                            }
                        }
                    case 400:
                        return;
                    }
                }
            }
//# sourceURL=http://jit/entities/SmallHero/m_splat.js
})