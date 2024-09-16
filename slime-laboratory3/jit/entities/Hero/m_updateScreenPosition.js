(function anonymous(context
) {
/*
	Index: 1121
	Path:  entities/Hero::m_updateScreenPosition
	Type:  Public
	Kind:  Method
	Super: entities/Entity
	Return: 7 0::void
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;

             /* e */
             const __Math = context.getTopLevel(12)['$BgMath']; // :Math
             const flash_geom__Point_def = context.getTopLevel(24); // flash.geom:Point

    return function compiled_m_updateScreenPosition(local1 /* Rectangle */) {
        // Possible use a real "this"
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
        // local11 is assigned before read, skip init
        let local11 = undefined
        // local12 is assigned before read, skip init
        let local12 = undefined
        // local13 is assigned before read, skip init
        let local13 = undefined
        let stack0 = undefined;
        let stack1 = undefined;
        let stack2 = undefined;
        let stack3 = undefined;
        let stack4 = undefined;
        let stack5 = undefined;
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
//                        stack0 = NaN;// JIT: redundant assigment, value unused
                        local7 = NaN;
//                        stack0 = NaN;// JIT: redundant assigment, value unused
                        local8 = NaN;
//                        stack0 = NaN;// JIT: redundant assigment, value unused
                        local9 = NaN;
//                        stack0 = NaN;// JIT: redundant assigment, value unused
                        local10 = NaN;
//                        stack0 = NaN;// JIT: redundant assigment, value unused
                        local11 = NaN;
//                        stack0 = NaN;// JIT: redundant assigment, value unused
                        local12 = NaN;
//                        stack0 = null;// JIT: redundant assigment, value unused
                        //JIT: SKIP_NULL_COERCE
                        local13 = null;
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
                                stack1 = temp.axGetProperty($names[0]);
                            }
                        }
                        // 7 0::x
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.x = stack1;
                        } else {
                            context.setproperty($names[0], stack1, stack0);
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
                                stack1 = temp.axGetProperty($names[1]);
                            }
                        }
                        // 7 0::y
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.y = stack1;
                        } else {
                            context.setproperty($names[1], stack1, stack0);
                        }
                        // 7 0:Box2D.Common.Math::b2Vec2
                        stack0 = scope0.findScopeProperty($names[2], true, false);
                        //JIT: Support fast construct:b2Vec2/Object
                        stack0 = context.constructFast(stack0, [], $names[2]);
                        //IR: Drop coerce, reason: redundant
                        local3 = stack0;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        /* We sure that this safe call, represented in TRAIT as Method  */ 
                        stack0 = this.$BggetMidPosition();
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[2], true, false);
                            _e || console.warn('[m_updateScreenPosition] Coerce Type not found:', "b2Vec2")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        local4 = stack0;
//                        stack0 = 1.3;// JIT: redundant assigment, value unused
                        //IR: CONVERT_D removed, reason: arguments strictly number
                        local5 = 1.3;
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
                        local6 = stack0;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::IS_FROST
                        //Possible type:7 0::Utils
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Boolean  */ 
                        stack0 = this.$BgIS_FROST;
                        if (!stack0) { p = 102; continue; };
//                        stack0 = 9109486;// JIT: redundant assigment, value unused
                        local6 = 9109486;
                    case 102:
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
//                        stack1 = local6;// JIT: redundant assigment, value unused
//                        stack2 = 1;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.beginFill(local6, 1);
                        } else {
                            // 7 0::beginFill
                            {
                                let t = stack0;
                                const m = t.$BgbeginFill || (t = sec.box(stack0), t.$BgbeginFill);
                                if( typeof m === "function" ) { 
                                    m.call(t, local6, 1);
                                } else { 
                                   stack0.axCallProperty($names[7], [local6, 1], false);
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
//                        stack1 = 1;// JIT: redundant assigment, value unused
//                        stack2 = local6;// JIT: redundant assigment, value unused
//                        stack3 = 1;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.lineStyle(1, local6, 1);
                        } else {
                            // 7 0::lineStyle
                            {
                                let t = stack0;
                                const m = t.$BglineStyle || (t = sec.box(stack0), t.$BglineStyle);
                                if( typeof m === "function" ) { 
                                    m.call(t, 1, local6, 1);
                                } else { 
                                   stack0.axCallProperty($names[8], [1, local6, 1], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::dead
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Boolean  */ 
                        stack0 = this.$Bgdead;
                        stack1 = false;
                        //JIT: Emit inline return
                        if (false != stack0) { return; }
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[5], true, false);
                        stack0 = temp.$BgUtils;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[5]);
                        }
                        // 7 0::IS_ANDROID
                        //Possible type:7 0::Utils
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['IS_ANDROID'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgIS_ANDROID;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[9]);
                            }
                        }
                        stack0 = !!stack0;
                        stack1 = stack0;
                        if (stack1) { p = 161; continue; };
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[5], true, false);
                        stack0 = temp.$BgUtils;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[5]);
                        }
                        // 7 0::LOW_RES
                        //Possible type:7 0::Utils
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['LOW_RES'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgLOW_RES;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[10]);
                            }
                        }
                        stack0 = !!stack0;
                    case 161:
                        if (!stack0) { p = 592; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::IS_FROST
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Boolean  */ 
                        stack0 = this.$BgIS_FROST;
                        if (!stack0) { p = 435; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::heroFrostBody
                        //Possible type:7 0::Boolean
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Dynamics::b2Body  */ 
                        stack0 = this.$BgheroFrostBody;
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                           stack0 = stack0.GetAngle();
                        } else {
                            // 7 0::GetAngle
                            {
                                let t = stack0;
                                const m = t.$BgGetAngle || (t = sec.box(stack0), t.$BgGetAngle);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BgGetAngle ();
                                } else { 
                                    stack0 = stack0.axCallProperty($names[11], [], false);
                                }
                            }
                        }
                        stack0 = -stack0;
                        stack0 = +stack0;
                        local9 = stack0;
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
                                stack0 = temp.axGetProperty($names[13]);
                            }
                        }
//                        stack1 = 2;// JIT: redundant assigment, value unused
                        stack0 *= 2;
//                        stack1 = 10;// JIT: redundant assigment, value unused
                        stack0 /= 10;
                        stack0 = +stack0;
                        local12 = stack0;
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
                        /* We sure that this safe call, represented in TRAIT as Method  */ 
                        stack1 = this.$BggetMidPosition();
                        // 7 0::x
                        //Possible type:undefined
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['x'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$Bgx;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[0]);
                            }
                        }
                        // 7 0::Math
                        /* GenerateLexImports GETLEX */
//                        stack2 = __Math;// JIT: redundant assigment, value unused
                        stack3 = 0;
//                        stack4 = local9;// JIT: redundant assigment, value unused
                        stack3 += local9;
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
                                    stack2 = __Math.axCallProperty($names[14], [stack3], false);
                                }
                            }
                        }
//                        stack3 = 14;// JIT: redundant assigment, value unused
                        stack2 *= 14;
                        stack1 += stack2;
//                        // JIT: potential type:7 0:flash.geom::Rectangle// JIT: redundant assigment, value unused
                        stack2 = local1;
                        // 7 0::x
                        //Possible type:7 0::Math
                        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])) {
                            stack2 = local1['x'];
                        } else {
                            temp = local1[AX_CLASS_SYMBOL] ? local1 : sec.box(local1);
                            stack2 = temp.$Bgx;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[0]);
                            }
                        }
                        stack1 -= stack2;
//                        stack2 = this;// JIT: redundant assigment, value unused
                        /* We sure that this safe call, represented in TRAIT as Method  */ 
                        stack2 = this.$BggetMidPosition();
                        // 7 0::y
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['y'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$Bgy;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[1]);
                            }
                        }
                        // 7 0::Math
                        /* GenerateLexImports GETLEX */
//                        stack3 = __Math;// JIT: redundant assigment, value unused
                        stack4 = 0;
//                        stack5 = local9;// JIT: redundant assigment, value unused
                        stack4 += local9;
                        if (!(_a = typeof __Math, ((_a !== 'object' && _a !== 'function' ) || __Math == null || __Math[AX_CLASS_SYMBOL]))) {
                           stack3 = __Math.cos(stack4);
                        } else {
                            // 7 0::cos
                            {
                                let t = __Math;
                                const m = t.$Bgcos || (t = sec.box(__Math), t.$Bgcos);
                                if( typeof m === "function" ) { 
                                    stack3 = t.$Bgcos (stack4);
                                } else { 
                                    stack3 = __Math.axCallProperty($names[15], [stack4], false);
                                }
                            }
                        }
//                        stack4 = 14;// JIT: redundant assigment, value unused
                        stack3 *= 14;
                        stack2 += stack3;
//                        // JIT: potential type:7 0:flash.geom::Rectangle// JIT: redundant assigment, value unused
                        stack3 = local1;
                        // 7 0::y
                        //Possible type:7 0::Math
                        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])) {
                            stack3 = local1['y'];
                        } else {
                            temp = local1[AX_CLASS_SYMBOL] ? local1 : sec.box(local1);
                            stack3 = temp.$Bgy;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[1]);
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
                                   stack0.axCallProperty($names[16], [stack1, stack2], false);
                                }
                            }
                        }
//                        stack0 = 1;// JIT: redundant assigment, value unused
                        local2 = 1;
                        { p = 350; continue; };
                    case 275:
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
                        /* We sure that this safe call, represented in TRAIT as Method  */ 
                        stack1 = this.$BggetMidPosition();
                        // 7 0::x
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['x'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$Bgx;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[0]);
                            }
                        }
                        // 7 0::Math
                        /* GenerateLexImports GETLEX */
//                        stack2 = __Math;// JIT: redundant assigment, value unused
                        stack3 = local12;
//                        stack4 = local2;// JIT: redundant assigment, value unused
                        stack3 *= local2;
//                        stack4 = local9;// JIT: redundant assigment, value unused
                        stack3 += local9;
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
                                    stack2 = __Math.axCallProperty($names[14], [stack3], false);
                                }
                            }
                        }
//                        stack3 = 14;// JIT: redundant assigment, value unused
                        stack2 *= 14;
                        stack1 += stack2;
//                        // JIT: potential type:7 0:flash.geom::Rectangle// JIT: redundant assigment, value unused
                        stack2 = local1;
                        // 7 0::x
                        //Possible type:7 0::Math
                        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])) {
                            stack2 = local1['x'];
                        } else {
                            temp = local1[AX_CLASS_SYMBOL] ? local1 : sec.box(local1);
                            stack2 = temp.$Bgx;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[0]);
                            }
                        }
                        stack1 -= stack2;
//                        stack2 = this;// JIT: redundant assigment, value unused
                        /* We sure that this safe call, represented in TRAIT as Method  */ 
                        stack2 = this.$BggetMidPosition();
                        // 7 0::y
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['y'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$Bgy;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[1]);
                            }
                        }
                        // 7 0::Math
                        /* GenerateLexImports GETLEX */
//                        stack3 = __Math;// JIT: redundant assigment, value unused
                        stack4 = local12;
//                        stack5 = local2;// JIT: redundant assigment, value unused
                        stack4 *= local2;
//                        stack5 = local9;// JIT: redundant assigment, value unused
                        stack4 += local9;
                        if (!(_a = typeof __Math, ((_a !== 'object' && _a !== 'function' ) || __Math == null || __Math[AX_CLASS_SYMBOL]))) {
                           stack3 = __Math.cos(stack4);
                        } else {
                            // 7 0::cos
                            {
                                let t = __Math;
                                const m = t.$Bgcos || (t = sec.box(__Math), t.$Bgcos);
                                if( typeof m === "function" ) { 
                                    stack3 = t.$Bgcos (stack4);
                                } else { 
                                    stack3 = __Math.axCallProperty($names[15], [stack4], false);
                                }
                            }
                        }
//                        stack4 = 14;// JIT: redundant assigment, value unused
                        stack3 *= 14;
                        stack2 += stack3;
//                        // JIT: potential type:7 0:flash.geom::Rectangle// JIT: redundant assigment, value unused
                        stack3 = local1;
                        // 7 0::y
                        //Possible type:7 0::Math
                        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])) {
                            stack3 = local1['y'];
                        } else {
                            temp = local1[AX_CLASS_SYMBOL] ? local1 : sec.box(local1);
                            stack3 = temp.$Bgy;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[1]);
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
                                   stack0.axCallProperty($names[17], [stack1, stack2], false);
                                }
                            }
                        }
                        local2 = (local2 | 0) + 1;
                    case 350:
                        stack0 = local2;
                        stack1 = 10;
                        if (10 > local2) { p = 275; continue; };
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
                        /* We sure that this safe call, represented in TRAIT as Method  */ 
                        stack1 = this.$BggetMidPosition();
                        // 7 0::x
                        //Possible type:undefined
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['x'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$Bgx;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[0]);
                            }
                        }
                        // 7 0::Math
                        /* GenerateLexImports GETLEX */
//                        stack2 = __Math;// JIT: redundant assigment, value unused
                        stack3 = local12;
//                        stack4 = 0;// JIT: redundant assigment, value unused
                        stack3 *= 0;
//                        stack4 = local9;// JIT: redundant assigment, value unused
                        stack3 += local9;
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
                                    stack2 = __Math.axCallProperty($names[14], [stack3], false);
                                }
                            }
                        }
//                        stack3 = 14;// JIT: redundant assigment, value unused
                        stack2 *= 14;
                        stack1 += stack2;
//                        // JIT: potential type:7 0:flash.geom::Rectangle// JIT: redundant assigment, value unused
                        stack2 = local1;
                        // 7 0::x
                        //Possible type:7 0::Math
                        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])) {
                            stack2 = local1['x'];
                        } else {
                            temp = local1[AX_CLASS_SYMBOL] ? local1 : sec.box(local1);
                            stack2 = temp.$Bgx;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[0]);
                            }
                        }
                        stack1 -= stack2;
//                        stack2 = this;// JIT: redundant assigment, value unused
                        /* We sure that this safe call, represented in TRAIT as Method  */ 
                        stack2 = this.$BggetMidPosition();
                        // 7 0::y
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['y'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$Bgy;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[1]);
                            }
                        }
                        // 7 0::Math
                        /* GenerateLexImports GETLEX */
//                        stack3 = __Math;// JIT: redundant assigment, value unused
                        stack4 = local12;
//                        stack5 = 0;// JIT: redundant assigment, value unused
                        stack4 *= 0;
//                        stack5 = local9;// JIT: redundant assigment, value unused
                        stack4 += local9;
                        if (!(_a = typeof __Math, ((_a !== 'object' && _a !== 'function' ) || __Math == null || __Math[AX_CLASS_SYMBOL]))) {
                           stack3 = __Math.cos(stack4);
                        } else {
                            // 7 0::cos
                            {
                                let t = __Math;
                                const m = t.$Bgcos || (t = sec.box(__Math), t.$Bgcos);
                                if( typeof m === "function" ) { 
                                    stack3 = t.$Bgcos (stack4);
                                } else { 
                                    stack3 = __Math.axCallProperty($names[15], [stack4], false);
                                }
                            }
                        }
//                        stack4 = 14;// JIT: redundant assigment, value unused
                        stack3 *= 14;
                        stack2 += stack3;
//                        // JIT: potential type:7 0:flash.geom::Rectangle// JIT: redundant assigment, value unused
                        stack3 = local1;
                        // 7 0::y
                        //Possible type:7 0::Math
                        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])) {
                            stack3 = local1['y'];
                        } else {
                            temp = local1[AX_CLASS_SYMBOL] ? local1 : sec.box(local1);
                            stack3 = temp.$Bgy;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[1]);
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
                                   stack0.axCallProperty($names[17], [stack1, stack2], false);
                                }
                            }
                        }
                        { p = 592; continue; };
                    case 435:
                        // 7 0::Array
                        stack0 = scope0.findScopeProperty($names[18], true, false);
                        //JIT: Support fast construct:Array/Object
                        stack0 = context.constructFast(stack0, [], $names[18]);
                        //IR: Drop coerce, reason: redundant
                        local13 = stack0;
//                        stack0 = 0;// JIT: redundant assigment, value unused
                        local2 = 0;
                        { p = 565; continue; };
                    case 451:
//                        stack0 = local3;// JIT: redundant assigment, value unused
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::heroBodies
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack1 = this.$BgheroBodies;
                        stack2 = local2;
                        // 27 {3, 0:flash.geom, 0, 3, 0:entities, 2:entities, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.filters, 0:levels, 0:entities.particles, 0:Box2D.Dynamics, 0:Box2D.Collision, 0:Box2D.Collision.Shapes, 0:Box2D.Dynamics.Joints, 0:Box2D.Dynamics.Contacts, 0:Box2D.Common.Math, 1:entities:Hero, 5:entities:Hero, 5:entities:Entity}::*
                        {
                            let simple = local2;
                            const b_obj = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);

                            if (typeof simple === "number") {
                                stack1 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack1 = b_obj['$Bg' + simple];
                                if (stack1 === undefined || typeof stack1 === 'function') {
                                    const rm = context.runtimename($names[19], local2);
                                    stack1 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        if (!(_a = typeof stack1, ((_a !== 'object' && _a !== 'function' ) || stack1 == null || stack1[AX_CLASS_SYMBOL]))) {
                           stack1 = stack1.GetPosition();
                        } else {
                            // 9 {3, 0:flash.geom, 0, 3, 0:entities, 2:entities, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.filters, 0:levels, 0:entities.particles, 0:Box2D.Dynamics, 0:Box2D.Collision, 0:Box2D.Collision.Shapes, 0:Box2D.Dynamics.Joints, 0:Box2D.Dynamics.Contacts, 0:Box2D.Common.Math, 1:entities:Hero, 5:entities:Hero, 5:entities:Entity}::GetPosition
                            {
                                let t = stack1;
                                const m = t.$BgGetPosition || (t = sec.box(stack1), t.$BgGetPosition);
                                if( typeof m === "function" ) { 
                                    stack1 = t.$BgGetPosition ();
                                } else { 
                                    stack1 = stack1.axCallProperty($names[20], [], false);
                                }
                            }
                        }
                        // 9 {3, 0:flash.geom, 0, 3, 0:entities, 2:entities, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.filters, 0:levels, 0:entities.particles, 0:Box2D.Dynamics, 0:Box2D.Collision, 0:Box2D.Collision.Shapes, 0:Box2D.Dynamics.Joints, 0:Box2D.Dynamics.Contacts, 0:Box2D.Common.Math, 1:entities:Hero, 5:entities:Hero, 5:entities:Entity}::x
                        //Possible type:7 0::Array
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['x'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$Bgx;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[21]);
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
                                stack2 = temp.axGetProperty($names[22]);
                            }
                        }
                        stack1 *= stack2;
//                        stack2 = local4;// JIT: redundant assigment, value unused
                        // 7 0::x
                        if (!(local4 != undefined && local4[AX_CLASS_SYMBOL])) {
                            stack2 = local4['x'];
                        } else {
                            temp = local4[AX_CLASS_SYMBOL] ? local4 : sec.box(local4);
                            stack2 = temp.$Bgx;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[0]);
                            }
                        }
                        stack1 -= stack2;
                        // 7 0::x
                        if (!(local3 != undefined && local3[AX_CLASS_SYMBOL])){
                            local3.x = stack1;
                        } else {
                            context.setproperty($names[0], stack1, local3);
                        }
//                        stack0 = local3;// JIT: redundant assigment, value unused
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::heroBodies
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack1 = this.$BgheroBodies;
                        stack2 = local2;
                        // 27 {3, 0:flash.geom, 0, 3, 0:entities, 2:entities, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.filters, 0:levels, 0:entities.particles, 0:Box2D.Dynamics, 0:Box2D.Collision, 0:Box2D.Collision.Shapes, 0:Box2D.Dynamics.Joints, 0:Box2D.Dynamics.Contacts, 0:Box2D.Common.Math, 1:entities:Hero, 5:entities:Hero, 5:entities:Entity}::*
                        {
                            let simple = local2;
                            const b_obj = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);

                            if (typeof simple === "number") {
                                stack1 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack1 = b_obj['$Bg' + simple];
                                if (stack1 === undefined || typeof stack1 === 'function') {
                                    const rm = context.runtimename($names[19], local2);
                                    stack1 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        if (!(_a = typeof stack1, ((_a !== 'object' && _a !== 'function' ) || stack1 == null || stack1[AX_CLASS_SYMBOL]))) {
                           stack1 = stack1.GetPosition();
                        } else {
                            // 9 {3, 0:flash.geom, 0, 3, 0:entities, 2:entities, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.filters, 0:levels, 0:entities.particles, 0:Box2D.Dynamics, 0:Box2D.Collision, 0:Box2D.Collision.Shapes, 0:Box2D.Dynamics.Joints, 0:Box2D.Dynamics.Contacts, 0:Box2D.Common.Math, 1:entities:Hero, 5:entities:Hero, 5:entities:Entity}::GetPosition
                            {
                                let t = stack1;
                                const m = t.$BgGetPosition || (t = sec.box(stack1), t.$BgGetPosition);
                                if( typeof m === "function" ) { 
                                    stack1 = t.$BgGetPosition ();
                                } else { 
                                    stack1 = stack1.axCallProperty($names[20], [], false);
                                }
                            }
                        }
                        // 9 {3, 0:flash.geom, 0, 3, 0:entities, 2:entities, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.filters, 0:levels, 0:entities.particles, 0:Box2D.Dynamics, 0:Box2D.Collision, 0:Box2D.Collision.Shapes, 0:Box2D.Dynamics.Joints, 0:Box2D.Dynamics.Contacts, 0:Box2D.Common.Math, 1:entities:Hero, 5:entities:Hero, 5:entities:Entity}::y
                        //Possible type:7 0::Array
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['y'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$Bgy;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[23]);
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
                                stack2 = temp.axGetProperty($names[22]);
                            }
                        }
                        stack1 *= stack2;
//                        stack2 = local4;// JIT: redundant assigment, value unused
                        // 7 0::y
                        if (!(local4 != undefined && local4[AX_CLASS_SYMBOL])) {
                            stack2 = local4['y'];
                        } else {
                            temp = local4[AX_CLASS_SYMBOL] ? local4 : sec.box(local4);
                            stack2 = temp.$Bgy;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[1]);
                            }
                        }
                        stack1 -= stack2;
                        // 7 0::y
                        if (!(local3 != undefined && local3[AX_CLASS_SYMBOL])){
                            local3.y = stack1;
                        } else {
                            context.setproperty($names[1], stack1, local3);
                        }
//                        stack0 = local13;// JIT: redundant assigment, value unused
                        // 7 0:flash.geom::Point
                        /* GenerateLexImports */
//                        stack1 = flash_geom__Point_def;// JIT: redundant assigment, value unused
//                        stack2 = local4;// JIT: redundant assigment, value unused
                        // 7 0::x
                        if (!(local4 != undefined && local4[AX_CLASS_SYMBOL])) {
                            stack2 = local4['x'];
                        } else {
                            temp = local4[AX_CLASS_SYMBOL] ? local4 : sec.box(local4);
                            stack2 = temp.$Bgx;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[0]);
                            }
                        }
//                        stack3 = local3;// JIT: redundant assigment, value unused
                        // 7 0::x
                        if (!(local3 != undefined && local3[AX_CLASS_SYMBOL])) {
                            stack3 = local3['x'];
                        } else {
                            temp = local3[AX_CLASS_SYMBOL] ? local3 : sec.box(local3);
                            stack3 = temp.$Bgx;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[0]);
                            }
                        }
//                        stack4 = local5;// JIT: redundant assigment, value unused
                        stack3 *= local5;
                        stack2 += stack3;
//                        // JIT: potential type:7 0:flash.geom::Rectangle// JIT: redundant assigment, value unused
                        stack3 = local1;
                        // 7 0::x
                        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])) {
                            stack3 = local1['x'];
                        } else {
                            temp = local1[AX_CLASS_SYMBOL] ? local1 : sec.box(local1);
                            stack3 = temp.$Bgx;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[0]);
                            }
                        }
                        stack2 -= stack3;
//                        stack3 = local4;// JIT: redundant assigment, value unused
                        // 7 0::y
                        if (!(local4 != undefined && local4[AX_CLASS_SYMBOL])) {
                            stack3 = local4['y'];
                        } else {
                            temp = local4[AX_CLASS_SYMBOL] ? local4 : sec.box(local4);
                            stack3 = temp.$Bgy;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[1]);
                            }
                        }
//                        stack4 = local3;// JIT: redundant assigment, value unused
                        // 7 0::y
                        //Possible type:undefined
                        if (!(local3 != undefined && local3[AX_CLASS_SYMBOL])) {
                            stack4 = local3['y'];
                        } else {
                            temp = local3[AX_CLASS_SYMBOL] ? local3 : sec.box(local3);
                            stack4 = temp.$Bgy;
                            if (stack4 === undefined || typeof stack4 === 'function') {
                                stack4 = temp.axGetProperty($names[1]);
                            }
                        }
//                        stack5 = local5;// JIT: redundant assigment, value unused
                        stack4 *= local5;
                        stack3 += stack4;
//                        // JIT: potential type:7 0:flash.geom::Rectangle// JIT: redundant assigment, value unused
                        stack4 = local1;
                        // 7 0::y
                        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])) {
                            stack4 = local1['y'];
                        } else {
                            temp = local1[AX_CLASS_SYMBOL] ? local1 : sec.box(local1);
                            stack4 = temp.$Bgy;
                            if (stack4 === undefined || typeof stack4 === 'function') {
                                stack4 = temp.axGetProperty($names[1]);
                            }
                        }
                        stack3 -= stack4;
                        //JIT: Support fast construct:Point/Object
                        stack1 = context.constructFast(flash_geom__Point_def, [stack2, stack3], $names[24]);
                        if (!(_a = typeof local13, ((_a !== 'object' && _a !== 'function' ) || local13 == null || local13[AX_CLASS_SYMBOL]))) {
                            local13.push(stack1);
                        } else {
                            // 7 0:http://adobe.com/AS3/2006/builtin::push
                            {
                                let t = local13;
                                const m = t.$Bgpush || (t = sec.box(local13), t.$Bgpush);
                                if( typeof m === "function" ) { 
                                    m.call(t, stack1);
                                } else { 
                                   local13.axCallProperty($names[25], [stack1], false);
                                }
                            }
                        }
                        local2 = (local2 | 0) + 1;
                    case 565:
                        stack0 = local2;
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::heroBodies
                        //Possible type:7 0:flash.geom::Point
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
                                stack1 = temp.axGetProperty($names[26]);
                            }
                        }
                        if (stack1 > local2) { p = 451; continue; };
                        // 7 0::CubicBezier
                        temp = scope0.findScopeProperty($names[27], true, false);
                        stack0 = temp.$BgCubicBezier;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[27]);
                        }
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack1 = this.$BgentitySprite;
                        // 7 0::graphics
                        //Possible type:7 0::entitySprite
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['graphics'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$Bggraphics;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[3]);
                            }
                        }
//                        stack2 = local13;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.curveThroughPoints(stack1, local13);
                        } else {
                            // 7 0::curveThroughPoints
                            {
                                let t = stack0;
                                const m = t.$BgcurveThroughPoints || (t = sec.box(stack0), t.$BgcurveThroughPoints);
                                if( typeof m === "function" ) { 
                                    m.call(t, stack1, local13);
                                } else { 
                                   stack0.axCallProperty($names[28], [stack1, local13], false);
                                }
                            }
                        }
                    case 592:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::eye1
                        //Possible type:7 0::CubicBezier
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack0 = this.$Bgeye1;
                        // 7 0::int
                        temp = scope0.findScopeProperty($names[29], true, false);
                        stack1 = temp.$Bgint;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[29]);
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
                                    stack3 = stack3.axCallProperty($names[30], [], false);
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
                                stack3 = temp.axGetProperty($names[0]);
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
                                stack4 = temp.axGetProperty($names[22]);
                            }
                        }
                        stack3 *= stack4;
                        stack1 = context.call(stack1, stack2, [stack3], scope0);
                        // 7 0::x
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.x = stack1;
                        } else {
                            context.setproperty($names[0], stack1, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::eye1
                        //Possible type:7 0:flash.display::MovieClip
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack0 = this.$Bgeye1;
                        // 7 0::int
                        temp = scope0.findScopeProperty($names[29], true, false);
                        stack1 = temp.$Bgint;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[29]);
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
                                    stack3 = stack3.axCallProperty($names[30], [], false);
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
                                stack4 = temp.axGetProperty($names[22]);
                            }
                        }
                        stack3 *= stack4;
                        stack1 = context.call(stack1, stack2, [stack3], scope0);
                        // 7 0::y
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.y = stack1;
                        } else {
                            context.setproperty($names[1], stack1, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::eye2
                        //Possible type:7 0:flash.display::MovieClip
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack0 = this.$Bgeye2;
                        // 7 0::int
                        temp = scope0.findScopeProperty($names[29], true, false);
                        stack1 = temp.$Bgint;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[29]);
                        }
                        stack2 = context.savedScope.global.object;
//                        stack3 = this;// JIT: redundant assigment, value unused
                        // 7 0::eye_2
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Dynamics::b2Body  */ 
                        stack3 = this.$Bgeye_2;
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
                                    stack3 = stack3.axCallProperty($names[30], [], false);
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
                                stack3 = temp.axGetProperty($names[0]);
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
                                stack4 = temp.axGetProperty($names[22]);
                            }
                        }
                        stack3 *= stack4;
                        stack1 = context.call(stack1, stack2, [stack3], scope0);
                        // 7 0::x
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.x = stack1;
                        } else {
                            context.setproperty($names[0], stack1, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::eye2
                        //Possible type:7 0:flash.display::MovieClip
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack0 = this.$Bgeye2;
                        // 7 0::int
                        temp = scope0.findScopeProperty($names[29], true, false);
                        stack1 = temp.$Bgint;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[29]);
                        }
                        stack2 = context.savedScope.global.object;
//                        stack3 = this;// JIT: redundant assigment, value unused
                        // 7 0::eye_2
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Dynamics::b2Body  */ 
                        stack3 = this.$Bgeye_2;
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
                                    stack3 = stack3.axCallProperty($names[30], [], false);
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
                                stack4 = temp.axGetProperty($names[22]);
                            }
                        }
                        stack3 *= stack4;
                        stack1 = context.call(stack1, stack2, [stack3], scope0);
                        // 7 0::y
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.y = stack1;
                        } else {
                            context.setproperty($names[1], stack1, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::eye2
                        //Possible type:7 0:flash.display::MovieClip
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack0 = this.$Bgeye2;
                        // 7 0::x
                        //Possible type:7 0:flash.display::MovieClip
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['x'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgx;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[0]);
                            }
                        }
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::eye1
                        //Possible type:7 0::int
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack1 = this.$Bgeye1;
                        // 7 0::x
                        //Possible type:7 0:flash.display::MovieClip
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['x'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$Bgx;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[0]);
                            }
                        }
                        stack0 -= stack1;
                        stack0 = +stack0;
                        local7 = stack0;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::eye2
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack0 = this.$Bgeye2;
                        // 7 0::y
                        //Possible type:7 0:flash.display::MovieClip
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['y'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgy;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[1]);
                            }
                        }
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::eye1
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack1 = this.$Bgeye1;
                        // 7 0::y
                        //Possible type:7 0:flash.display::MovieClip
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['y'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$Bgy;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[1]);
                            }
                        }
                        stack0 -= stack1;
                        stack0 = +stack0;
                        local8 = stack0;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::eye_frost1
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack0 = this.$Bgeye_frost1;
//                        stack1 = this;// JIT: redundant assigment, value unused
                        /* We sure that this safe call, represented in TRAIT as Method  */ 
                        stack1 = this.$BggetMidPosition();
                        // 7 0::x
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['x'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$Bgx;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[0]);
                            }
                        }
                        // 7 0::Math
                        /* GenerateLexImports GETLEX */
//                        stack2 = __Math;// JIT: redundant assigment, value unused
                        stack3 = 0;
//                        stack4 = local9;// JIT: redundant assigment, value unused
                        stack3 += local9;
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
                                    stack2 = __Math.axCallProperty($names[14], [stack3], false);
                                }
                            }
                        }
//                        stack3 = 8;// JIT: redundant assigment, value unused
                        stack2 *= 8;
                        stack1 += stack2;
                        // 7 0::x
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.x = stack1;
                        } else {
                            context.setproperty($names[0], stack1, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::eye_frost1
                        //Possible type:7 0:flash.display::MovieClip
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack0 = this.$Bgeye_frost1;
//                        stack1 = this;// JIT: redundant assigment, value unused
                        /* We sure that this safe call, represented in TRAIT as Method  */ 
                        stack1 = this.$BggetMidPosition();
                        // 7 0::y
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['y'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$Bgy;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[1]);
                            }
                        }
                        // 7 0::Math
                        /* GenerateLexImports GETLEX */
//                        stack2 = __Math;// JIT: redundant assigment, value unused
                        stack3 = 0;
//                        stack4 = local9;// JIT: redundant assigment, value unused
                        stack3 += local9;
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
                                    stack2 = __Math.axCallProperty($names[15], [stack3], false);
                                }
                            }
                        }
//                        stack3 = 8;// JIT: redundant assigment, value unused
                        stack2 *= 8;
                        stack1 += stack2;
                        // 7 0::y
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.y = stack1;
                        } else {
                            context.setproperty($names[1], stack1, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::eye_frost2
                        //Possible type:7 0:flash.display::MovieClip
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack0 = this.$Bgeye_frost2;
//                        stack1 = this;// JIT: redundant assigment, value unused
                        /* We sure that this safe call, represented in TRAIT as Method  */ 
                        stack1 = this.$BggetMidPosition();
                        // 7 0::x
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['x'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$Bgx;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[0]);
                            }
                        }
                        // 7 0::Math
                        /* GenerateLexImports GETLEX */
//                        stack2 = __Math;// JIT: redundant assigment, value unused
                        stack3 = 0;
//                        stack4 = local9;// JIT: redundant assigment, value unused
                        stack3 += local9;
                        // 7 0::Math
                        /* GenerateLexImports GETLEX */
//                        stack4 = __Math;// JIT: redundant assigment, value unused
                        // 7 0::PI
                        //Possible type:7 0::Math
                        if (!(__Math != undefined && __Math[AX_CLASS_SYMBOL])) {
                            stack4 = __Math['PI'];
                        } else {
                            temp = __Math[AX_CLASS_SYMBOL] ? __Math : sec.box(__Math);
                            stack4 = temp.$BgPI;
                            if (stack4 === undefined || typeof stack4 === 'function') {
                                stack4 = temp.axGetProperty($names[13]);
                            }
                        }
                        stack3 += stack4;
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
                                    stack2 = __Math.axCallProperty($names[14], [stack3], false);
                                }
                            }
                        }
//                        stack3 = 8;// JIT: redundant assigment, value unused
                        stack2 *= 8;
                        stack1 += stack2;
                        // 7 0::x
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.x = stack1;
                        } else {
                            context.setproperty($names[0], stack1, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::eye_frost2
                        //Possible type:7 0:flash.display::MovieClip
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack0 = this.$Bgeye_frost2;
//                        stack1 = this;// JIT: redundant assigment, value unused
                        /* We sure that this safe call, represented in TRAIT as Method  */ 
                        stack1 = this.$BggetMidPosition();
                        // 7 0::y
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['y'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$Bgy;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[1]);
                            }
                        }
                        // 7 0::Math
                        /* GenerateLexImports GETLEX */
//                        stack2 = __Math;// JIT: redundant assigment, value unused
                        stack3 = 0;
//                        stack4 = local9;// JIT: redundant assigment, value unused
                        stack3 += local9;
                        // 7 0::Math
                        /* GenerateLexImports GETLEX */
//                        stack4 = __Math;// JIT: redundant assigment, value unused
                        // 7 0::PI
                        //Possible type:7 0::Math
                        if (!(__Math != undefined && __Math[AX_CLASS_SYMBOL])) {
                            stack4 = __Math['PI'];
                        } else {
                            temp = __Math[AX_CLASS_SYMBOL] ? __Math : sec.box(__Math);
                            stack4 = temp.$BgPI;
                            if (stack4 === undefined || typeof stack4 === 'function') {
                                stack4 = temp.axGetProperty($names[13]);
                            }
                        }
                        stack3 += stack4;
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
                                    stack2 = __Math.axCallProperty($names[15], [stack3], false);
                                }
                            }
                        }
//                        stack3 = 8;// JIT: redundant assigment, value unused
                        stack2 *= 8;
                        stack1 += stack2;
                        // 7 0::y
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.y = stack1;
                        } else {
                            context.setproperty($names[1], stack1, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::IS_FROST
                        //Possible type:7 0:flash.display::MovieClip
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Boolean  */ 
                        stack0 = this.$BgIS_FROST;
                        if (!stack0) { p = 930; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::eye_frost2
                        //Possible type:7 0::Boolean
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack0 = this.$Bgeye_frost2;
                        // 7 0::x
                        //Possible type:7 0:flash.display::MovieClip
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['x'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgx;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[0]);
                            }
                        }
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::eye_frost1
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack1 = this.$Bgeye_frost1;
                        // 7 0::x
                        //Possible type:7 0:flash.display::MovieClip
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['x'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$Bgx;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[0]);
                            }
                        }
                        stack0 -= stack1;
                        stack0 = +stack0;
                        local7 = stack0;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::eye_frost2
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack0 = this.$Bgeye_frost2;
                        // 7 0::y
                        //Possible type:7 0:flash.display::MovieClip
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['y'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgy;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[1]);
                            }
                        }
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::eye_frost1
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack1 = this.$Bgeye_frost1;
                        // 7 0::y
                        //Possible type:7 0:flash.display::MovieClip
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['y'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$Bgy;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[1]);
                            }
                        }
                        stack0 -= stack1;
                        stack0 = +stack0;
                        local8 = stack0;
                    case 930:
                        // 7 0::Math
                        /* GenerateLexImports GETLEX */
//                        stack0 = __Math;// JIT: redundant assigment, value unused
                        stack1 = local8;
                        stack1--;
                        stack2 = local7;
//                        stack3 = 0;// JIT: redundant assigment, value unused
                        stack2 -= 0;
                        if (!(_a = typeof __Math, ((_a !== 'object' && _a !== 'function' ) || __Math == null || __Math[AX_CLASS_SYMBOL]))) {
                           stack0 = __Math.atan2(stack1, stack2);
                        } else {
                            // 7 0::atan2
                            {
                                let t = __Math;
                                const m = t.$Bgatan2 || (t = sec.box(__Math), t.$Bgatan2);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$Bgatan2 (stack1, stack2);
                                } else { 
                                    stack0 = __Math.axCallProperty($names[31], [stack1, stack2], false);
                                }
                            }
                        }
                        stack0 = +stack0;
                        local9 = stack0;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::eye1
                        //Possible type:7 0::Math
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack0 = this.$Bgeye1;
                        // 7 0::x
                        //Possible type:7 0:flash.display::MovieClip
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['x'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgx;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[0]);
                            }
                        }
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::eye2
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack1 = this.$Bgeye2;
                        // 7 0::x
                        //Possible type:7 0:flash.display::MovieClip
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['x'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$Bgx;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[0]);
                            }
                        }
                        stack0 += stack1;
//                        stack1 = 0.5;// JIT: redundant assigment, value unused
                        stack0 *= 0.5;
                        stack0 = +stack0;
                        local10 = stack0;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::eye1
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack0 = this.$Bgeye1;
                        // 7 0::y
                        //Possible type:7 0:flash.display::MovieClip
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['y'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgy;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[1]);
                            }
                        }
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::eye2
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack1 = this.$Bgeye2;
                        // 7 0::y
                        //Possible type:7 0:flash.display::MovieClip
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['y'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$Bgy;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[1]);
                            }
                        }
                        stack0 += stack1;
//                        stack1 = 0.5;// JIT: redundant assigment, value unused
                        stack0 *= 0.5;
                        stack0 = +stack0;
                        local11 = stack0;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::IS_FROST
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Boolean  */ 
                        stack0 = this.$BgIS_FROST;
                        if (!stack0) { p = 1040; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::eye_frost1
                        //Possible type:7 0::Boolean
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack0 = this.$Bgeye_frost1;
                        // 7 0::x
                        //Possible type:7 0:flash.display::MovieClip
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['x'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgx;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[0]);
                            }
                        }
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::eye_frost2
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack1 = this.$Bgeye_frost2;
                        // 7 0::x
                        //Possible type:7 0:flash.display::MovieClip
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['x'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$Bgx;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[0]);
                            }
                        }
                        stack0 += stack1;
//                        stack1 = 0.5;// JIT: redundant assigment, value unused
                        stack0 *= 0.5;
                        stack0 = +stack0;
                        local10 = stack0;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::eye_frost1
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack0 = this.$Bgeye_frost1;
                        // 7 0::y
                        //Possible type:7 0:flash.display::MovieClip
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['y'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgy;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[1]);
                            }
                        }
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::eye_frost2
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack1 = this.$Bgeye_frost2;
                        // 7 0::y
                        //Possible type:7 0:flash.display::MovieClip
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['y'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$Bgy;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[1]);
                            }
                        }
                        stack0 += stack1;
//                        stack1 = 0.5;// JIT: redundant assigment, value unused
                        stack0 *= 0.5;
                        stack0 = +stack0;
                        local11 = stack0;
                    case 1040:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::glasses
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::SunglassesSprite  */ 
                        stack0 = this.$Bgglasses;
                        // 7 0::int
                        temp = scope0.findScopeProperty($names[29], true, false);
                        stack1 = temp.$Bgint;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[29]);
                        }
                        stack2 = context.savedScope.global.object;
//                        stack3 = local10;// JIT: redundant assigment, value unused
                        stack1 = context.call(stack1, stack2, [local10], scope0);
                        // 7 0::x
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.x = stack1;
                        } else {
                            context.setproperty($names[0], stack1, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::glasses
                        //Possible type:7 0::SunglassesSprite
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::SunglassesSprite  */ 
                        stack0 = this.$Bgglasses;
                        // 7 0::int
                        temp = scope0.findScopeProperty($names[29], true, false);
                        stack1 = temp.$Bgint;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[29]);
                        }
                        stack2 = context.savedScope.global.object;
//                        stack3 = local11;// JIT: redundant assigment, value unused
                        stack1 = context.call(stack1, stack2, [local11], scope0);
                        // 7 0::y
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.y = stack1;
                        } else {
                            context.setproperty($names[1], stack1, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::glasses
                        //Possible type:7 0::SunglassesSprite
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::SunglassesSprite  */ 
                        stack0 = this.$Bgglasses;
                        stack1 = local9;
//                        stack2 = 180;// JIT: redundant assigment, value unused
                        stack1 *= 180;
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
                                stack2 = temp.axGetProperty($names[13]);
                            }
                        }
                        stack1 /= stack2;
                        // 7 0::rotation
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.rotation = stack1;
                        } else {
                            context.setproperty($names[32], stack1, stack0);
                        }
                    case 1088:
                        return;
                    }
                }
            }
//# sourceURL=http://jit/entities/Hero/m_updateScreenPosition.js
})