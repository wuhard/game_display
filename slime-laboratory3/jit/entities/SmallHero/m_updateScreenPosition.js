(function anonymous(context
) {
/*
	Index: 1075
	Path:  entities/SmallHero::m_updateScreenPosition
	Type:  Public
	Kind:  Method
	Super: entities/Entity
	Return: 7 0::void
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_m_updateScreenPosition(local1 /* Rectangle */) {
        // Possible use a real "this"
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
        let stack7 = undefined;
        let stack8 = undefined;
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
                        local2 = 0;
//                        stack0 = 0;// JIT: redundant assigment, value unused
                        local3 = 0;
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack0 = this.$Bglevel;
                        // 7 0::SPLITTED_FLAG
                        //Possible type:7 0::level
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['SPLITTED_FLAG'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgSPLITTED_FLAG;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[0]);
                            }
                        }
                        if (!stack0) { p = 333; continue; };
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack0 = this.$BgentitySprite;
//                        // JIT: potential type:7 0:flash.geom::Rectangle// JIT: redundant assigment, value unused
                        stack1 = local1;
                        // 7 0::x
                        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])) {
                            stack1 = local1['x'];
                        } else {
                            temp = local1[AX_CLASS_SYMBOL] ? local1 : sec.box(local1);
                            stack1 = temp.$Bgx;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[1]);
                            }
                        }
                        // 7 0::x
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.x = stack1;
                        } else {
                            context.setproperty($names[1], stack1, stack0);
                        }
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack0 = this.$BgentitySprite;
//                        // JIT: potential type:7 0:flash.geom::Rectangle// JIT: redundant assigment, value unused
                        stack1 = local1;
                        // 7 0::y
                        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])) {
                            stack1 = local1['y'];
                        } else {
                            temp = local1[AX_CLASS_SYMBOL] ? local1 : sec.box(local1);
                            stack1 = temp.$Bgy;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[2]);
                            }
                        }
                        // 7 0::y
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.y = stack1;
                        } else {
                            context.setproperty($names[2], stack1, stack0);
                        }
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack0 = this.$BgentitySprite;
                        // 7 0::graphics
                        //Possible type:7 0::entitySprite
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['graphics'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bggraphics;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[3]);
                            }
                        }
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.clear();
                        } else {
                            // 7 0::clear
                            {
                                let t = stack0;
                                const m = t.$Bgclear || (t = sec.box(stack0), t.$Bgclear);
                                if( typeof m === "function" ) { 
                                    m.call(t);
                                } else { 
                                   stack0.axCallProperty($names[4], [], false);
                                }
                            }
                        }
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[5], true, false);
                        stack0 = temp.$BgUtils;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[5]);
                        }
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                           stack0 = stack0.GetSlimeBodyColor();
                        } else {
                            // 7 0::GetSlimeBodyColor
                            {
                                let t = stack0;
                                const m = t.$BgGetSlimeBodyColor || (t = sec.box(stack0), t.$BgGetSlimeBodyColor);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BgGetSlimeBodyColor ();
                                } else { 
                                    stack0 = stack0.axCallProperty($names[6], [], false);
                                }
                            }
                        }
                        stack0 |= 0;
                        local2 = stack0;
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack0 = this.$BgentitySprite;
                        // 7 0::graphics
                        //Possible type:7 0::entitySprite
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['graphics'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bggraphics;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[3]);
                            }
                        }
//                        stack1 = local2;// JIT: redundant assigment, value unused
//                        stack2 = 1;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.beginFill(local2, 1);
                        } else {
                            // 7 0::beginFill
                            {
                                let t = stack0;
                                const m = t.$BgbeginFill || (t = sec.box(stack0), t.$BgbeginFill);
                                if( typeof m === "function" ) { 
                                    m.call(t, local2, 1);
                                } else { 
                                   stack0.axCallProperty($names[7], [local2, 1], false);
                                }
                            }
                        }
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack0 = this.$BgentitySprite;
                        // 7 0::graphics
                        //Possible type:7 0::entitySprite
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['graphics'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bggraphics;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[3]);
                            }
                        }
//                        stack1 = 6;// JIT: redundant assigment, value unused
//                        stack2 = local2;// JIT: redundant assigment, value unused
//                        stack3 = 1;// JIT: redundant assigment, value unused
//                        stack4 = false;// JIT: redundant assigment, value unused
                        // 7 0:flash.display::LineScaleMode
                        temp = scope0.findScopeProperty($names[8], true, false);
                        stack5 = temp.$BgLineScaleMode;
                        if (stack5 === undefined || typeof stack5 === 'function') {
                            stack5 = temp.axGetProperty($names[8]);
                        }
                        // 7 0::NONE
                        //Possible type:7 0:flash.display::LineScaleMode
                        if (!(stack5 != undefined && stack5[AX_CLASS_SYMBOL])) {
                            stack5 = stack5['NONE'];
                        } else {
                            temp = stack5[AX_CLASS_SYMBOL] ? stack5 : sec.box(stack5);
                            stack5 = temp.$BgNONE;
                            if (stack5 === undefined || typeof stack5 === 'function') {
                                stack5 = temp.axGetProperty($names[9]);
                            }
                        }
                        // 7 0:flash.display::CapsStyle
                        temp = scope0.findScopeProperty($names[10], true, false);
                        stack6 = temp.$BgCapsStyle;
                        if (stack6 === undefined || typeof stack6 === 'function') {
                            stack6 = temp.axGetProperty($names[10]);
                        }
                        // 7 0::ROUND
                        //Possible type:7 0:flash.display::CapsStyle
                        if (!(stack6 != undefined && stack6[AX_CLASS_SYMBOL])) {
                            stack6 = stack6['ROUND'];
                        } else {
                            temp = stack6[AX_CLASS_SYMBOL] ? stack6 : sec.box(stack6);
                            stack6 = temp.$BgROUND;
                            if (stack6 === undefined || typeof stack6 === 'function') {
                                stack6 = temp.axGetProperty($names[11]);
                            }
                        }
                        // 7 0:flash.display::JointStyle
                        temp = scope0.findScopeProperty($names[12], true, false);
                        stack7 = temp.$BgJointStyle;
                        if (stack7 === undefined || typeof stack7 === 'function') {
                            stack7 = temp.axGetProperty($names[12]);
                        }
                        // 7 0::ROUND
                        //Possible type:7 0:flash.display::JointStyle
                        if (!(stack7 != undefined && stack7[AX_CLASS_SYMBOL])) {
                            stack7 = stack7['ROUND'];
                        } else {
                            temp = stack7[AX_CLASS_SYMBOL] ? stack7 : sec.box(stack7);
                            stack7 = temp.$BgROUND;
                            if (stack7 === undefined || typeof stack7 === 'function') {
                                stack7 = temp.axGetProperty($names[11]);
                            }
                        }
//                        stack8 = 3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.lineStyle(6, local2, 1, false, stack5, stack6, stack7, 3);
                        } else {
                            // 7 0::lineStyle
                            {
                                let t = stack0;
                                const m = t.$BglineStyle || (t = sec.box(stack0), t.$BglineStyle);
                                if( typeof m === "function" ) { 
                                    m.call(t, 6, local2, 1, false, stack5, stack6, stack7, 3);
                                } else { 
                                   stack0.axCallProperty($names[13], [6, local2, 1, false, stack5, stack6, stack7, 3], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::dead
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Boolean  */ 
                        stack0 = this.$Bgdead;
                        stack1 = false;
                        if (false != stack0) { p = 333; continue; };
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack0 = this.$BgentitySprite;
                        // 7 0::graphics
                        //Possible type:7 0::entitySprite
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['graphics'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bggraphics;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[3]);
                            }
                        }
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::heroBodies
                        //Possible type:undefined
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
                                    const rm = context.runtimename($names[14], 0);
                                    stack1 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        if (!(_a = typeof stack1, ((_a !== 'object' && _a !== 'function' ) || stack1 == null || stack1[AX_CLASS_SYMBOL]))) {
                           stack1 = stack1.GetPosition();
                        } else {
                            // 9 {3, 0, 0:entities, 1:entities:SmallHero, 0:flash.display, 0:flash.filters, 0:http://adobe.com/AS3/2006/builtin, 0:levels, 0:Box2D.Common.Math, 0:Box2D.Dynamics, 3, 2:entities, 0:flash.geom, 0:entities.particles, 0:Box2D.Collision, 0:Box2D.Collision.Shapes, 0:Box2D.Dynamics.Joints, 0:Box2D.Dynamics.Contacts, 5:entities:SmallHero, 5:entities:Entity}::GetPosition
                            {
                                let t = stack1;
                                const m = t.$BgGetPosition || (t = sec.box(stack1), t.$BgGetPosition);
                                if( typeof m === "function" ) { 
                                    stack1 = t.$BgGetPosition ();
                                } else { 
                                    stack1 = stack1.axCallProperty($names[15], [], false);
                                }
                            }
                        }
                        // 9 {3, 0, 0:entities, 1:entities:SmallHero, 0:flash.display, 0:flash.filters, 0:http://adobe.com/AS3/2006/builtin, 0:levels, 0:Box2D.Common.Math, 0:Box2D.Dynamics, 3, 2:entities, 0:flash.geom, 0:entities.particles, 0:Box2D.Collision, 0:Box2D.Collision.Shapes, 0:Box2D.Dynamics.Joints, 0:Box2D.Dynamics.Contacts, 5:entities:SmallHero, 5:entities:Entity}::x
                        //Possible type:7 0::Array
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['x'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$Bgx;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[16]);
                            }
                        }
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[5], true, false);
                        stack2 = temp.$BgUtils;
                        if (stack2 === undefined || typeof stack2 === 'function') {
                            stack2 = temp.axGetProperty($names[5]);
                        }
                        // 7 0::m_scale
                        //Possible type:7 0::Utils
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['m_scale'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$Bgm_scale;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[17]);
                            }
                        }
                        stack1 *= stack2;
//                        // JIT: potential type:7 0:flash.geom::Rectangle// JIT: redundant assigment, value unused
                        stack2 = local1;
                        // 7 0::x
                        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])) {
                            stack2 = local1['x'];
                        } else {
                            temp = local1[AX_CLASS_SYMBOL] ? local1 : sec.box(local1);
                            stack2 = temp.$Bgx;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[1]);
                            }
                        }
                        stack1 -= stack2;
//                        stack2 = this;// JIT: redundant assigment, value unused
                        // 7 0::heroBodies
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack2 = this.$BgheroBodies;
                        stack3 = 0;
                        // 27 {3, 0, 0:entities, 1:entities:SmallHero, 0:flash.display, 0:flash.filters, 0:http://adobe.com/AS3/2006/builtin, 0:levels, 0:Box2D.Common.Math, 0:Box2D.Dynamics, 3, 2:entities, 0:flash.geom, 0:entities.particles, 0:Box2D.Collision, 0:Box2D.Collision.Shapes, 0:Box2D.Dynamics.Joints, 0:Box2D.Dynamics.Contacts, 5:entities:SmallHero, 5:entities:Entity}::*
                        {
                            let simple = 0;
                            const b_obj = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);

                            if (typeof simple === "number") {
                                stack2 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack2 = b_obj['$Bg' + simple];
                                if (stack2 === undefined || typeof stack2 === 'function') {
                                    const rm = context.runtimename($names[14], 0);
                                    stack2 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        if (!(_a = typeof stack2, ((_a !== 'object' && _a !== 'function' ) || stack2 == null || stack2[AX_CLASS_SYMBOL]))) {
                           stack2 = stack2.GetPosition();
                        } else {
                            // 9 {3, 0, 0:entities, 1:entities:SmallHero, 0:flash.display, 0:flash.filters, 0:http://adobe.com/AS3/2006/builtin, 0:levels, 0:Box2D.Common.Math, 0:Box2D.Dynamics, 3, 2:entities, 0:flash.geom, 0:entities.particles, 0:Box2D.Collision, 0:Box2D.Collision.Shapes, 0:Box2D.Dynamics.Joints, 0:Box2D.Dynamics.Contacts, 5:entities:SmallHero, 5:entities:Entity}::GetPosition
                            {
                                let t = stack2;
                                const m = t.$BgGetPosition || (t = sec.box(stack2), t.$BgGetPosition);
                                if( typeof m === "function" ) { 
                                    stack2 = t.$BgGetPosition ();
                                } else { 
                                    stack2 = stack2.axCallProperty($names[15], [], false);
                                }
                            }
                        }
                        // 9 {3, 0, 0:entities, 1:entities:SmallHero, 0:flash.display, 0:flash.filters, 0:http://adobe.com/AS3/2006/builtin, 0:levels, 0:Box2D.Common.Math, 0:Box2D.Dynamics, 3, 2:entities, 0:flash.geom, 0:entities.particles, 0:Box2D.Collision, 0:Box2D.Collision.Shapes, 0:Box2D.Dynamics.Joints, 0:Box2D.Dynamics.Contacts, 5:entities:SmallHero, 5:entities:Entity}::y
                        //Possible type:7 0::Array
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['y'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$Bgy;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[18]);
                            }
                        }
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[5], true, false);
                        stack3 = temp.$BgUtils;
                        if (stack3 === undefined || typeof stack3 === 'function') {
                            stack3 = temp.axGetProperty($names[5]);
                        }
                        // 7 0::m_scale
                        //Possible type:7 0::Utils
                        if (!(stack3 != undefined && stack3[AX_CLASS_SYMBOL])) {
                            stack3 = stack3['m_scale'];
                        } else {
                            temp = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);
                            stack3 = temp.$Bgm_scale;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[17]);
                            }
                        }
                        stack2 *= stack3;
//                        // JIT: potential type:7 0:flash.geom::Rectangle// JIT: redundant assigment, value unused
                        stack3 = local1;
                        // 7 0::y
                        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])) {
                            stack3 = local1['y'];
                        } else {
                            temp = local1[AX_CLASS_SYMBOL] ? local1 : sec.box(local1);
                            stack3 = temp.$Bgy;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[2]);
                            }
                        }
                        stack2 -= stack3;
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.moveTo(stack1, stack2);
                        } else {
                            // 7 0::moveTo
                            {
                                let t = stack0;
                                const m = t.$BgmoveTo || (t = sec.box(stack0), t.$BgmoveTo);
                                if( typeof m === "function" ) { 
                                    m.call(t, stack1, stack2);
                                } else { 
                                   stack0.axCallProperty($names[19], [stack1, stack2], false);
                                }
                            }
                        }
//                        stack0 = 1;// JIT: redundant assigment, value unused
                        local3 = 1;
                        { p = 255; continue; };
                    case 188:
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack0 = this.$BgentitySprite;
                        // 7 0::graphics
                        //Possible type:7 0::entitySprite
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['graphics'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bggraphics;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[3]);
                            }
                        }
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::heroBodies
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack1 = this.$BgheroBodies;
                        stack2 = local3;
                        // 27 {3, 0, 0:entities, 1:entities:SmallHero, 0:flash.display, 0:flash.filters, 0:http://adobe.com/AS3/2006/builtin, 0:levels, 0:Box2D.Common.Math, 0:Box2D.Dynamics, 3, 2:entities, 0:flash.geom, 0:entities.particles, 0:Box2D.Collision, 0:Box2D.Collision.Shapes, 0:Box2D.Dynamics.Joints, 0:Box2D.Dynamics.Contacts, 5:entities:SmallHero, 5:entities:Entity}::*
                        {
                            let simple = local3;
                            const b_obj = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);

                            if (typeof simple === "number") {
                                stack1 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack1 = b_obj['$Bg' + simple];
                                if (stack1 === undefined || typeof stack1 === 'function') {
                                    const rm = context.runtimename($names[14], local3);
                                    stack1 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        if (!(_a = typeof stack1, ((_a !== 'object' && _a !== 'function' ) || stack1 == null || stack1[AX_CLASS_SYMBOL]))) {
                           stack1 = stack1.GetPosition();
                        } else {
                            // 9 {3, 0, 0:entities, 1:entities:SmallHero, 0:flash.display, 0:flash.filters, 0:http://adobe.com/AS3/2006/builtin, 0:levels, 0:Box2D.Common.Math, 0:Box2D.Dynamics, 3, 2:entities, 0:flash.geom, 0:entities.particles, 0:Box2D.Collision, 0:Box2D.Collision.Shapes, 0:Box2D.Dynamics.Joints, 0:Box2D.Dynamics.Contacts, 5:entities:SmallHero, 5:entities:Entity}::GetPosition
                            {
                                let t = stack1;
                                const m = t.$BgGetPosition || (t = sec.box(stack1), t.$BgGetPosition);
                                if( typeof m === "function" ) { 
                                    stack1 = t.$BgGetPosition ();
                                } else { 
                                    stack1 = stack1.axCallProperty($names[15], [], false);
                                }
                            }
                        }
                        // 9 {3, 0, 0:entities, 1:entities:SmallHero, 0:flash.display, 0:flash.filters, 0:http://adobe.com/AS3/2006/builtin, 0:levels, 0:Box2D.Common.Math, 0:Box2D.Dynamics, 3, 2:entities, 0:flash.geom, 0:entities.particles, 0:Box2D.Collision, 0:Box2D.Collision.Shapes, 0:Box2D.Dynamics.Joints, 0:Box2D.Dynamics.Contacts, 5:entities:SmallHero, 5:entities:Entity}::x
                        //Possible type:7 0::Array
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['x'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$Bgx;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[16]);
                            }
                        }
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[5], true, false);
                        stack2 = temp.$BgUtils;
                        if (stack2 === undefined || typeof stack2 === 'function') {
                            stack2 = temp.axGetProperty($names[5]);
                        }
                        // 7 0::m_scale
                        //Possible type:7 0::Utils
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['m_scale'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$Bgm_scale;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[17]);
                            }
                        }
                        stack1 *= stack2;
//                        // JIT: potential type:7 0:flash.geom::Rectangle// JIT: redundant assigment, value unused
                        stack2 = local1;
                        // 7 0::x
                        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])) {
                            stack2 = local1['x'];
                        } else {
                            temp = local1[AX_CLASS_SYMBOL] ? local1 : sec.box(local1);
                            stack2 = temp.$Bgx;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[1]);
                            }
                        }
                        stack1 -= stack2;
//                        stack2 = this;// JIT: redundant assigment, value unused
                        // 7 0::heroBodies
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack2 = this.$BgheroBodies;
                        stack3 = local3;
                        // 27 {3, 0, 0:entities, 1:entities:SmallHero, 0:flash.display, 0:flash.filters, 0:http://adobe.com/AS3/2006/builtin, 0:levels, 0:Box2D.Common.Math, 0:Box2D.Dynamics, 3, 2:entities, 0:flash.geom, 0:entities.particles, 0:Box2D.Collision, 0:Box2D.Collision.Shapes, 0:Box2D.Dynamics.Joints, 0:Box2D.Dynamics.Contacts, 5:entities:SmallHero, 5:entities:Entity}::*
                        {
                            let simple = local3;
                            const b_obj = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);

                            if (typeof simple === "number") {
                                stack2 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack2 = b_obj['$Bg' + simple];
                                if (stack2 === undefined || typeof stack2 === 'function') {
                                    const rm = context.runtimename($names[14], local3);
                                    stack2 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        if (!(_a = typeof stack2, ((_a !== 'object' && _a !== 'function' ) || stack2 == null || stack2[AX_CLASS_SYMBOL]))) {
                           stack2 = stack2.GetPosition();
                        } else {
                            // 9 {3, 0, 0:entities, 1:entities:SmallHero, 0:flash.display, 0:flash.filters, 0:http://adobe.com/AS3/2006/builtin, 0:levels, 0:Box2D.Common.Math, 0:Box2D.Dynamics, 3, 2:entities, 0:flash.geom, 0:entities.particles, 0:Box2D.Collision, 0:Box2D.Collision.Shapes, 0:Box2D.Dynamics.Joints, 0:Box2D.Dynamics.Contacts, 5:entities:SmallHero, 5:entities:Entity}::GetPosition
                            {
                                let t = stack2;
                                const m = t.$BgGetPosition || (t = sec.box(stack2), t.$BgGetPosition);
                                if( typeof m === "function" ) { 
                                    stack2 = t.$BgGetPosition ();
                                } else { 
                                    stack2 = stack2.axCallProperty($names[15], [], false);
                                }
                            }
                        }
                        // 9 {3, 0, 0:entities, 1:entities:SmallHero, 0:flash.display, 0:flash.filters, 0:http://adobe.com/AS3/2006/builtin, 0:levels, 0:Box2D.Common.Math, 0:Box2D.Dynamics, 3, 2:entities, 0:flash.geom, 0:entities.particles, 0:Box2D.Collision, 0:Box2D.Collision.Shapes, 0:Box2D.Dynamics.Joints, 0:Box2D.Dynamics.Contacts, 5:entities:SmallHero, 5:entities:Entity}::y
                        //Possible type:7 0::Array
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['y'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$Bgy;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[18]);
                            }
                        }
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[5], true, false);
                        stack3 = temp.$BgUtils;
                        if (stack3 === undefined || typeof stack3 === 'function') {
                            stack3 = temp.axGetProperty($names[5]);
                        }
                        // 7 0::m_scale
                        //Possible type:7 0::Utils
                        if (!(stack3 != undefined && stack3[AX_CLASS_SYMBOL])) {
                            stack3 = stack3['m_scale'];
                        } else {
                            temp = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);
                            stack3 = temp.$Bgm_scale;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[17]);
                            }
                        }
                        stack2 *= stack3;
//                        // JIT: potential type:7 0:flash.geom::Rectangle// JIT: redundant assigment, value unused
                        stack3 = local1;
                        // 7 0::y
                        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])) {
                            stack3 = local1['y'];
                        } else {
                            temp = local1[AX_CLASS_SYMBOL] ? local1 : sec.box(local1);
                            stack3 = temp.$Bgy;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[2]);
                            }
                        }
                        stack2 -= stack3;
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.lineTo(stack1, stack2);
                        } else {
                            // 7 0::lineTo
                            {
                                let t = stack0;
                                const m = t.$BglineTo || (t = sec.box(stack0), t.$BglineTo);
                                if( typeof m === "function" ) { 
                                    m.call(t, stack1, stack2);
                                } else { 
                                   stack0.axCallProperty($names[20], [stack1, stack2], false);
                                }
                            }
                        }
                        local3 = (local3 | 0) + 1;
                    case 255:
                        stack0 = local3;
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
                                stack1 = temp.axGetProperty($names[21]);
                            }
                        }
                        if (stack1 > local3) { p = 188; continue; };
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack0 = this.$BgentitySprite;
                        // 7 0::graphics
                        //Possible type:7 0::entitySprite
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['graphics'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bggraphics;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[3]);
                            }
                        }
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::heroBodies
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
                                    const rm = context.runtimename($names[14], 0);
                                    stack1 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        if (!(_a = typeof stack1, ((_a !== 'object' && _a !== 'function' ) || stack1 == null || stack1[AX_CLASS_SYMBOL]))) {
                           stack1 = stack1.GetPosition();
                        } else {
                            // 9 {3, 0, 0:entities, 1:entities:SmallHero, 0:flash.display, 0:flash.filters, 0:http://adobe.com/AS3/2006/builtin, 0:levels, 0:Box2D.Common.Math, 0:Box2D.Dynamics, 3, 2:entities, 0:flash.geom, 0:entities.particles, 0:Box2D.Collision, 0:Box2D.Collision.Shapes, 0:Box2D.Dynamics.Joints, 0:Box2D.Dynamics.Contacts, 5:entities:SmallHero, 5:entities:Entity}::GetPosition
                            {
                                let t = stack1;
                                const m = t.$BgGetPosition || (t = sec.box(stack1), t.$BgGetPosition);
                                if( typeof m === "function" ) { 
                                    stack1 = t.$BgGetPosition ();
                                } else { 
                                    stack1 = stack1.axCallProperty($names[15], [], false);
                                }
                            }
                        }
                        // 9 {3, 0, 0:entities, 1:entities:SmallHero, 0:flash.display, 0:flash.filters, 0:http://adobe.com/AS3/2006/builtin, 0:levels, 0:Box2D.Common.Math, 0:Box2D.Dynamics, 3, 2:entities, 0:flash.geom, 0:entities.particles, 0:Box2D.Collision, 0:Box2D.Collision.Shapes, 0:Box2D.Dynamics.Joints, 0:Box2D.Dynamics.Contacts, 5:entities:SmallHero, 5:entities:Entity}::x
                        //Possible type:7 0::Array
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['x'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$Bgx;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[16]);
                            }
                        }
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[5], true, false);
                        stack2 = temp.$BgUtils;
                        if (stack2 === undefined || typeof stack2 === 'function') {
                            stack2 = temp.axGetProperty($names[5]);
                        }
                        // 7 0::m_scale
                        //Possible type:7 0::Utils
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['m_scale'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$Bgm_scale;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[17]);
                            }
                        }
                        stack1 *= stack2;
//                        // JIT: potential type:7 0:flash.geom::Rectangle// JIT: redundant assigment, value unused
                        stack2 = local1;
                        // 7 0::x
                        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])) {
                            stack2 = local1['x'];
                        } else {
                            temp = local1[AX_CLASS_SYMBOL] ? local1 : sec.box(local1);
                            stack2 = temp.$Bgx;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[1]);
                            }
                        }
                        stack1 -= stack2;
//                        stack2 = this;// JIT: redundant assigment, value unused
                        // 7 0::heroBodies
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack2 = this.$BgheroBodies;
                        stack3 = 0;
                        // 27 {3, 0, 0:entities, 1:entities:SmallHero, 0:flash.display, 0:flash.filters, 0:http://adobe.com/AS3/2006/builtin, 0:levels, 0:Box2D.Common.Math, 0:Box2D.Dynamics, 3, 2:entities, 0:flash.geom, 0:entities.particles, 0:Box2D.Collision, 0:Box2D.Collision.Shapes, 0:Box2D.Dynamics.Joints, 0:Box2D.Dynamics.Contacts, 5:entities:SmallHero, 5:entities:Entity}::*
                        {
                            let simple = 0;
                            const b_obj = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);

                            if (typeof simple === "number") {
                                stack2 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack2 = b_obj['$Bg' + simple];
                                if (stack2 === undefined || typeof stack2 === 'function') {
                                    const rm = context.runtimename($names[14], 0);
                                    stack2 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        if (!(_a = typeof stack2, ((_a !== 'object' && _a !== 'function' ) || stack2 == null || stack2[AX_CLASS_SYMBOL]))) {
                           stack2 = stack2.GetPosition();
                        } else {
                            // 9 {3, 0, 0:entities, 1:entities:SmallHero, 0:flash.display, 0:flash.filters, 0:http://adobe.com/AS3/2006/builtin, 0:levels, 0:Box2D.Common.Math, 0:Box2D.Dynamics, 3, 2:entities, 0:flash.geom, 0:entities.particles, 0:Box2D.Collision, 0:Box2D.Collision.Shapes, 0:Box2D.Dynamics.Joints, 0:Box2D.Dynamics.Contacts, 5:entities:SmallHero, 5:entities:Entity}::GetPosition
                            {
                                let t = stack2;
                                const m = t.$BgGetPosition || (t = sec.box(stack2), t.$BgGetPosition);
                                if( typeof m === "function" ) { 
                                    stack2 = t.$BgGetPosition ();
                                } else { 
                                    stack2 = stack2.axCallProperty($names[15], [], false);
                                }
                            }
                        }
                        // 9 {3, 0, 0:entities, 1:entities:SmallHero, 0:flash.display, 0:flash.filters, 0:http://adobe.com/AS3/2006/builtin, 0:levels, 0:Box2D.Common.Math, 0:Box2D.Dynamics, 3, 2:entities, 0:flash.geom, 0:entities.particles, 0:Box2D.Collision, 0:Box2D.Collision.Shapes, 0:Box2D.Dynamics.Joints, 0:Box2D.Dynamics.Contacts, 5:entities:SmallHero, 5:entities:Entity}::y
                        //Possible type:7 0::Array
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['y'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$Bgy;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[18]);
                            }
                        }
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[5], true, false);
                        stack3 = temp.$BgUtils;
                        if (stack3 === undefined || typeof stack3 === 'function') {
                            stack3 = temp.axGetProperty($names[5]);
                        }
                        // 7 0::m_scale
                        //Possible type:7 0::Utils
                        if (!(stack3 != undefined && stack3[AX_CLASS_SYMBOL])) {
                            stack3 = stack3['m_scale'];
                        } else {
                            temp = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);
                            stack3 = temp.$Bgm_scale;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[17]);
                            }
                        }
                        stack2 *= stack3;
//                        // JIT: potential type:7 0:flash.geom::Rectangle// JIT: redundant assigment, value unused
                        stack3 = local1;
                        // 7 0::y
                        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])) {
                            stack3 = local1['y'];
                        } else {
                            temp = local1[AX_CLASS_SYMBOL] ? local1 : sec.box(local1);
                            stack3 = temp.$Bgy;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[2]);
                            }
                        }
                        stack2 -= stack3;
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.lineTo(stack1, stack2);
                        } else {
                            // 7 0::lineTo
                            {
                                let t = stack0;
                                const m = t.$BglineTo || (t = sec.box(stack0), t.$BglineTo);
                                if( typeof m === "function" ) { 
                                    m.call(t, stack1, stack2);
                                } else { 
                                   stack0.axCallProperty($names[20], [stack1, stack2], false);
                                }
                            }
                        }
                    case 333:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::eye1
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack0 = this.$Bgeye1;
                        // 7 0::int
                        temp = scope0.findScopeProperty($names[22], true, false);
                        stack1 = temp.$Bgint;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[22]);
                        }
                        stack2 = context.savedScope.global.object;
//                        stack3 = this;// JIT: redundant assigment, value unused
                        // 7 0::eye_1
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Dynamics::b2Body  */ 
                        stack3 = this.$Bgeye_1;
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
                                    stack3 = stack3.axCallProperty($names[23], [], false);
                                }
                            }
                        }
                        // 7 0::x
                        //Possible type:7 0:Box2D.Dynamics::b2Body
                        if (!(stack3 != undefined && stack3[AX_CLASS_SYMBOL])) {
                            stack3 = stack3['x'];
                        } else {
                            temp = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);
                            stack3 = temp.$Bgx;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[1]);
                            }
                        }
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[5], true, false);
                        stack4 = temp.$BgUtils;
                        if (stack4 === undefined || typeof stack4 === 'function') {
                            stack4 = temp.axGetProperty($names[5]);
                        }
                        // 7 0::m_scale
                        //Possible type:7 0::Utils
                        if (!(stack4 != undefined && stack4[AX_CLASS_SYMBOL])) {
                            stack4 = stack4['m_scale'];
                        } else {
                            temp = stack4[AX_CLASS_SYMBOL] ? stack4 : sec.box(stack4);
                            stack4 = temp.$Bgm_scale;
                            if (stack4 === undefined || typeof stack4 === 'function') {
                                stack4 = temp.axGetProperty($names[17]);
                            }
                        }
                        stack3 *= stack4;
                        stack1 = context.call(stack1, stack2, [stack3], scope0);
                        // 7 0::x
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.x = stack1;
                        } else {
                            context.setproperty($names[1], stack1, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::eye1
                        //Possible type:7 0:flash.display::MovieClip
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack0 = this.$Bgeye1;
                        // 7 0::int
                        temp = scope0.findScopeProperty($names[22], true, false);
                        stack1 = temp.$Bgint;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[22]);
                        }
                        stack2 = context.savedScope.global.object;
//                        stack3 = this;// JIT: redundant assigment, value unused
                        // 7 0::eye_1
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Dynamics::b2Body  */ 
                        stack3 = this.$Bgeye_1;
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
                                    stack3 = stack3.axCallProperty($names[23], [], false);
                                }
                            }
                        }
                        // 7 0::y
                        //Possible type:7 0:Box2D.Dynamics::b2Body
                        if (!(stack3 != undefined && stack3[AX_CLASS_SYMBOL])) {
                            stack3 = stack3['y'];
                        } else {
                            temp = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);
                            stack3 = temp.$Bgy;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[2]);
                            }
                        }
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[5], true, false);
                        stack4 = temp.$BgUtils;
                        if (stack4 === undefined || typeof stack4 === 'function') {
                            stack4 = temp.axGetProperty($names[5]);
                        }
                        // 7 0::m_scale
                        //Possible type:7 0::Utils
                        if (!(stack4 != undefined && stack4[AX_CLASS_SYMBOL])) {
                            stack4 = stack4['m_scale'];
                        } else {
                            temp = stack4[AX_CLASS_SYMBOL] ? stack4 : sec.box(stack4);
                            stack4 = temp.$Bgm_scale;
                            if (stack4 === undefined || typeof stack4 === 'function') {
                                stack4 = temp.axGetProperty($names[17]);
                            }
                        }
                        stack3 *= stack4;
                        stack1 = context.call(stack1, stack2, [stack3], scope0);
                        // 7 0::y
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.y = stack1;
                        } else {
                            context.setproperty($names[2], stack1, stack0);
                        }
                        return;
                    }
                }
            }
//# sourceURL=http://jit/entities/SmallHero/m_updateScreenPosition.js
})