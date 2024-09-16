(function anonymous(context
) {
/*
	Index: 1736
	Path:  levels/collisions/CurvedBoxCollision::constructor
	Type:  Public
	Kind:  null
	Super: levels/collisions/LevelCollision
	Return: *
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;

             /* e */
             const __Math = context.getTopLevel(2)['$BgMath']; // :Math

    return function compiled_constructor(local1 /* Level */, local2 /* Number */, local3 /* Number */, local4 /* Number */) {
        // Possible use a real "this"
        /* Force Number coerce */
        local2 = (+local2);
        /* Force Number coerce */
        local3 = (+local3);
        /* Force Number coerce */
        local4 = (+local4);
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
                        local5 = null;
//                        stack0 = null;// JIT: redundant assigment, value unused
                        //JIT: SKIP_NULL_COERCE
                        local6 = null;
//                        stack0 = 0;// JIT: redundant assigment, value unused
                        local7 = 0;
//                        stack0 = 0;// JIT: redundant assigment, value unused
                        local8 = 0;
//                        stack0 = null;// JIT: redundant assigment, value unused
                        //JIT: SKIP_NULL_COERCE
                        local12 = null;
//                        stack0 = null;// JIT: redundant assigment, value unused
                        //JIT: SKIP_NULL_COERCE
                        local13 = null;
                        stack0 = this;
//                        // JIT: potential type:7 0:levels::Level// JIT: redundant assigment, value unused
                        stack1 = local1;
//                        // JIT: potential type:7 0::Number// JIT: redundant assigment, value unused
                        stack2 = local2;
//                        // JIT: potential type:7 0::Number// JIT: redundant assigment, value unused
                        stack3 = local3;
//                        stack4 = 392;// JIT: redundant assigment, value unused
//                        stack5 = 152;// JIT: redundant assigment, value unused
//                        // JIT: potential type:7 0::Number// JIT: redundant assigment, value unused
                        stack6 = local4;
                        context.savedScope.superConstructor.call(this, local1, local2, local3, 392, 152, local4);
                        // 7 0::originalXPos
                        stack0 = scope0.findScopeProperty($names[0], false, false);
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack1 = this.$BgxPos;
                        // 7 0::originalXPos
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.originalXPos = stack1;
                        } else {
                            context.setproperty($names[0], stack1, stack0);
                        }
                        // 7 0::originalYPos
                        stack0 = scope0.findScopeProperty($names[1], false, false);
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack1 = this.$BgyPos;
                        // 7 0::originalYPos
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.originalYPos = stack1;
                        } else {
                            context.setproperty($names[1], stack1, stack0);
                        }
//                        stack0 = 24;// JIT: redundant assigment, value unused
                        local9 = 24;
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
                                stack0 = temp.axGetProperty($names[3]);
                            }
                        }
//                        stack1 = 0.5;// JIT: redundant assigment, value unused
                        stack0 *= 0.5;
//                        stack1 = 24;// JIT: redundant assigment, value unused
                        stack0 /= 24;
                        stack0 = +stack0;
                        local10 = stack0;
                        stack0 = 0;
                        stack0 = +0;
                        local11 = stack0;
//                        stack0 = 0;// JIT: redundant assigment, value unused
                        local7 = 0;
                        { p = 569; continue; };
                    case 94:
                        // 7 0:Box2D.Dynamics::b2BodyDef
                        stack0 = scope0.findScopeProperty($names[4], true, false);
                        //JIT: Support fast construct:b2BodyDef/Object
                        stack0 = context.constructFast(stack0, [], $names[4]);
                        //IR: Drop coerce, reason: redundant
                        stack1 = stack0;
                        local5 = stack1;
                        // 7 0:Box2D.Dynamics::b2Body
                        temp = scope0.findScopeProperty($names[5], true, false);
                        stack1 = temp.$Bgb2Body;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[5]);
                        }
                        // 7 0::b2_staticBody
                        //Possible type:7 0:Box2D.Dynamics::b2Body
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['b2_staticBody'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$Bgb2_staticBody;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[6]);
                            }
                        }
                        // 7 0::type
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.type = stack1;
                        } else {
                            context.setproperty($names[7], stack1, stack0);
                        }
//                        stack0 = local5;// JIT: redundant assigment, value unused
                        // 7 0::position
                        //Possible type:7 0:Box2D.Dynamics::b2BodyDef
                        if (!(local5 != undefined && local5[AX_CLASS_SYMBOL])) {
                            stack0 = local5['position'];
                        } else {
                            temp = local5[AX_CLASS_SYMBOL] ? local5 : sec.box(local5);
                            stack0 = temp.$Bgposition;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[8]);
                            }
                        }
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack1 = this.$BgxPos;
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[9], true, false);
                        stack2 = temp.$BgUtils;
                        if (stack2 === undefined || typeof stack2 === 'function') {
                            stack2 = temp.axGetProperty($names[9]);
                        }
                        // 7 0::m_scale
                        //Possible type:7 0::Utils
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['m_scale'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$Bgm_scale;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[10]);
                            }
                        }
                        stack1 /= stack2;
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack2 = this.$BgyPos;
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[9], true, false);
                        stack3 = temp.$BgUtils;
                        if (stack3 === undefined || typeof stack3 === 'function') {
                            stack3 = temp.axGetProperty($names[9]);
                        }
                        // 7 0::m_scale
                        //Possible type:7 0::Utils
                        if (!(stack3 != undefined && stack3[AX_CLASS_SYMBOL])) {
                            stack3 = stack3['m_scale'];
                        } else {
                            temp = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);
                            stack3 = temp.$Bgm_scale;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[10]);
                            }
                        }
                        stack2 /= stack3;
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.Set(stack1, stack2);
                        } else {
                            // 7 0::Set
                            {
                                let t = stack0;
                                const m = t.$BgSet || (t = sec.box(stack0), t.$BgSet);
                                if( typeof m === "function" ) { 
                                    m.call(t, stack1, stack2);
                                } else { 
                                   stack0.axCallProperty($names[11], [stack1, stack2], false);
                                }
                            }
                        }
                        // 7 0::Array
                        stack0 = scope0.findScopeProperty($names[12], true, false);
                        //JIT: Support fast construct:Array/Object
                        stack0 = context.constructFast(stack0, [], $names[12]);
                        //IR: Drop coerce, reason: redundant
                        local12 = stack0;
                        stack0 = local7;
//                        stack1 = 1;// JIT: redundant assigment, value unused
                        stack0 += 1;
                        stack0 |= 0;
                        local8 = stack0;
//                        stack0 = local12;// JIT: redundant assigment, value unused
                        // 7 0:Box2D.Common.Math::b2Vec2
                        stack1 = scope0.findScopeProperty($names[13], true, false);
                        stack2 = -40;
                        // 7 0::Math
                        /* GenerateLexImports GETLEX */
//                        stack3 = __Math;// JIT: redundant assigment, value unused
                        stack4 = local10;
//                        stack5 = local7;// JIT: redundant assigment, value unused
                        stack4 *= local7;
                        // 7 0::Math
                        /* GenerateLexImports GETLEX */
//                        stack5 = __Math;// JIT: redundant assigment, value unused
                        // 7 0::PI
                        //Possible type:7 0::Math
                        if (!(__Math != undefined && __Math[AX_CLASS_SYMBOL])) {
                            stack5 = __Math['PI'];
                        } else {
                            temp = __Math[AX_CLASS_SYMBOL] ? __Math : sec.box(__Math);
                            stack5 = temp.$BgPI;
                            if (stack5 === undefined || typeof stack5 === 'function') {
                                stack5 = temp.axGetProperty($names[3]);
                            }
                        }
//                        stack6 = 0.5;// JIT: redundant assigment, value unused
                        stack5 *= 0.5;
                        stack4 += stack5;
                        if (!(_a = typeof __Math, ((_a !== 'object' && _a !== 'function' ) || __Math == null || __Math[AX_CLASS_SYMBOL]))) {
                           stack3 = __Math.sin(stack4);
                        } else {
                            // 7 0::sin
                            {
                                let t = __Math;
                                const m = t.$Bgsin || (t = sec.box(__Math), t.$Bgsin);
                                if( typeof m === "function" ) { 
                                    stack3 = t.$Bgsin (stack4);
                                } else { 
                                    stack3 = __Math.axCallProperty($names[14], [stack4], false);
                                }
                            }
                        }
//                        stack4 = 64;// JIT: redundant assigment, value unused
                        stack3 *= 64;
                        stack2 += stack3;
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[9], true, false);
                        stack3 = temp.$BgUtils;
                        if (stack3 === undefined || typeof stack3 === 'function') {
                            stack3 = temp.axGetProperty($names[9]);
                        }
                        // 7 0::m_scale
                        //Possible type:7 0::Utils
                        if (!(stack3 != undefined && stack3[AX_CLASS_SYMBOL])) {
                            stack3 = stack3['m_scale'];
                        } else {
                            temp = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);
                            stack3 = temp.$Bgm_scale;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[10]);
                            }
                        }
                        stack2 /= stack3;
                        stack3 = 40;
                        // 7 0::Math
                        /* GenerateLexImports GETLEX */
//                        stack4 = __Math;// JIT: redundant assigment, value unused
                        stack5 = local10;
//                        stack6 = local7;// JIT: redundant assigment, value unused
                        stack5 *= local7;
                        // 7 0::Math
                        /* GenerateLexImports GETLEX */
//                        stack6 = __Math;// JIT: redundant assigment, value unused
                        // 7 0::PI
                        //Possible type:7 0::Math
                        if (!(__Math != undefined && __Math[AX_CLASS_SYMBOL])) {
                            stack6 = __Math['PI'];
                        } else {
                            temp = __Math[AX_CLASS_SYMBOL] ? __Math : sec.box(__Math);
                            stack6 = temp.$BgPI;
                            if (stack6 === undefined || typeof stack6 === 'function') {
                                stack6 = temp.axGetProperty($names[3]);
                            }
                        }
//                        stack7 = 0.5;// JIT: redundant assigment, value unused
                        stack6 *= 0.5;
                        stack5 += stack6;
                        if (!(_a = typeof __Math, ((_a !== 'object' && _a !== 'function' ) || __Math == null || __Math[AX_CLASS_SYMBOL]))) {
                           stack4 = __Math.cos(stack5);
                        } else {
                            // 7 0::cos
                            {
                                let t = __Math;
                                const m = t.$Bgcos || (t = sec.box(__Math), t.$Bgcos);
                                if( typeof m === "function" ) { 
                                    stack4 = t.$Bgcos (stack5);
                                } else { 
                                    stack4 = __Math.axCallProperty($names[15], [stack5], false);
                                }
                            }
                        }
//                        stack5 = 64;// JIT: redundant assigment, value unused
                        stack4 *= 64;
                        stack3 += stack4;
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[9], true, false);
                        stack4 = temp.$BgUtils;
                        if (stack4 === undefined || typeof stack4 === 'function') {
                            stack4 = temp.axGetProperty($names[9]);
                        }
                        // 7 0::m_scale
                        //Possible type:7 0::Utils
                        if (!(stack4 != undefined && stack4[AX_CLASS_SYMBOL])) {
                            stack4 = stack4['m_scale'];
                        } else {
                            temp = stack4[AX_CLASS_SYMBOL] ? stack4 : sec.box(stack4);
                            stack4 = temp.$Bgm_scale;
                            if (stack4 === undefined || typeof stack4 === 'function') {
                                stack4 = temp.axGetProperty($names[10]);
                            }
                        }
                        stack3 /= stack4;
                        //JIT: Support fast construct:b2Vec2/Object
                        stack1 = context.constructFast(stack1, [stack2, stack3], $names[13]);
                        if (!(_a = typeof local12, ((_a !== 'object' && _a !== 'function' ) || local12 == null || local12[AX_CLASS_SYMBOL]))) {
                            local12.push(stack1);
                        } else {
                            // 7 0:http://adobe.com/AS3/2006/builtin::push
                            {
                                let t = local12;
                                const m = t.$Bgpush || (t = sec.box(local12), t.$Bgpush);
                                if( typeof m === "function" ) { 
                                    m.call(t, stack1);
                                } else { 
                                   local12.axCallProperty($names[16], [stack1], false);
                                }
                            }
                        }
//                        stack0 = local12;// JIT: redundant assigment, value unused
                        // 7 0:Box2D.Common.Math::b2Vec2
                        stack1 = scope0.findScopeProperty($names[13], true, false);
                        stack2 = -40;
                        // 7 0::Math
                        /* GenerateLexImports GETLEX */
//                        stack3 = __Math;// JIT: redundant assigment, value unused
                        stack4 = local10;
//                        stack5 = local8;// JIT: redundant assigment, value unused
                        stack4 *= local8;
                        // 7 0::Math
                        /* GenerateLexImports GETLEX */
//                        stack5 = __Math;// JIT: redundant assigment, value unused
                        // 7 0::PI
                        //Possible type:7 0::Math
                        if (!(__Math != undefined && __Math[AX_CLASS_SYMBOL])) {
                            stack5 = __Math['PI'];
                        } else {
                            temp = __Math[AX_CLASS_SYMBOL] ? __Math : sec.box(__Math);
                            stack5 = temp.$BgPI;
                            if (stack5 === undefined || typeof stack5 === 'function') {
                                stack5 = temp.axGetProperty($names[3]);
                            }
                        }
//                        stack6 = 0.5;// JIT: redundant assigment, value unused
                        stack5 *= 0.5;
                        stack4 += stack5;
                        if (!(_a = typeof __Math, ((_a !== 'object' && _a !== 'function' ) || __Math == null || __Math[AX_CLASS_SYMBOL]))) {
                           stack3 = __Math.sin(stack4);
                        } else {
                            // 7 0::sin
                            {
                                let t = __Math;
                                const m = t.$Bgsin || (t = sec.box(__Math), t.$Bgsin);
                                if( typeof m === "function" ) { 
                                    stack3 = t.$Bgsin (stack4);
                                } else { 
                                    stack3 = __Math.axCallProperty($names[14], [stack4], false);
                                }
                            }
                        }
//                        stack4 = 64;// JIT: redundant assigment, value unused
                        stack3 *= 64;
                        stack2 += stack3;
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[9], true, false);
                        stack3 = temp.$BgUtils;
                        if (stack3 === undefined || typeof stack3 === 'function') {
                            stack3 = temp.axGetProperty($names[9]);
                        }
                        // 7 0::m_scale
                        //Possible type:7 0::Utils
                        if (!(stack3 != undefined && stack3[AX_CLASS_SYMBOL])) {
                            stack3 = stack3['m_scale'];
                        } else {
                            temp = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);
                            stack3 = temp.$Bgm_scale;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[10]);
                            }
                        }
                        stack2 /= stack3;
                        stack3 = 40;
                        // 7 0::Math
                        /* GenerateLexImports GETLEX */
//                        stack4 = __Math;// JIT: redundant assigment, value unused
                        stack5 = local10;
//                        stack6 = local8;// JIT: redundant assigment, value unused
                        stack5 *= local8;
                        // 7 0::Math
                        /* GenerateLexImports GETLEX */
//                        stack6 = __Math;// JIT: redundant assigment, value unused
                        // 7 0::PI
                        //Possible type:7 0::Math
                        if (!(__Math != undefined && __Math[AX_CLASS_SYMBOL])) {
                            stack6 = __Math['PI'];
                        } else {
                            temp = __Math[AX_CLASS_SYMBOL] ? __Math : sec.box(__Math);
                            stack6 = temp.$BgPI;
                            if (stack6 === undefined || typeof stack6 === 'function') {
                                stack6 = temp.axGetProperty($names[3]);
                            }
                        }
//                        stack7 = 0.5;// JIT: redundant assigment, value unused
                        stack6 *= 0.5;
                        stack5 += stack6;
                        if (!(_a = typeof __Math, ((_a !== 'object' && _a !== 'function' ) || __Math == null || __Math[AX_CLASS_SYMBOL]))) {
                           stack4 = __Math.cos(stack5);
                        } else {
                            // 7 0::cos
                            {
                                let t = __Math;
                                const m = t.$Bgcos || (t = sec.box(__Math), t.$Bgcos);
                                if( typeof m === "function" ) { 
                                    stack4 = t.$Bgcos (stack5);
                                } else { 
                                    stack4 = __Math.axCallProperty($names[15], [stack5], false);
                                }
                            }
                        }
//                        stack5 = 64;// JIT: redundant assigment, value unused
                        stack4 *= 64;
                        stack3 += stack4;
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[9], true, false);
                        stack4 = temp.$BgUtils;
                        if (stack4 === undefined || typeof stack4 === 'function') {
                            stack4 = temp.axGetProperty($names[9]);
                        }
                        // 7 0::m_scale
                        //Possible type:7 0::Utils
                        if (!(stack4 != undefined && stack4[AX_CLASS_SYMBOL])) {
                            stack4 = stack4['m_scale'];
                        } else {
                            temp = stack4[AX_CLASS_SYMBOL] ? stack4 : sec.box(stack4);
                            stack4 = temp.$Bgm_scale;
                            if (stack4 === undefined || typeof stack4 === 'function') {
                                stack4 = temp.axGetProperty($names[10]);
                            }
                        }
                        stack3 /= stack4;
                        //JIT: Support fast construct:b2Vec2/Object
                        stack1 = context.constructFast(stack1, [stack2, stack3], $names[13]);
                        if (!(_a = typeof local12, ((_a !== 'object' && _a !== 'function' ) || local12 == null || local12[AX_CLASS_SYMBOL]))) {
                            local12.push(stack1);
                        } else {
                            // 7 0:http://adobe.com/AS3/2006/builtin::push
                            {
                                let t = local12;
                                const m = t.$Bgpush || (t = sec.box(local12), t.$Bgpush);
                                if( typeof m === "function" ) { 
                                    m.call(t, stack1);
                                } else { 
                                   local12.axCallProperty($names[16], [stack1], false);
                                }
                            }
                        }
//                        stack0 = local12;// JIT: redundant assigment, value unused
                        // 7 0:Box2D.Common.Math::b2Vec2
                        stack1 = scope0.findScopeProperty($names[13], true, false);
                        stack2 = -40;
                        // 7 0::Math
                        /* GenerateLexImports GETLEX */
//                        stack3 = __Math;// JIT: redundant assigment, value unused
                        stack4 = local10;
//                        stack5 = local8;// JIT: redundant assigment, value unused
                        stack4 *= local8;
                        // 7 0::Math
                        /* GenerateLexImports GETLEX */
//                        stack5 = __Math;// JIT: redundant assigment, value unused
                        // 7 0::PI
                        //Possible type:7 0::Math
                        if (!(__Math != undefined && __Math[AX_CLASS_SYMBOL])) {
                            stack5 = __Math['PI'];
                        } else {
                            temp = __Math[AX_CLASS_SYMBOL] ? __Math : sec.box(__Math);
                            stack5 = temp.$BgPI;
                            if (stack5 === undefined || typeof stack5 === 'function') {
                                stack5 = temp.axGetProperty($names[3]);
                            }
                        }
//                        stack6 = 0.5;// JIT: redundant assigment, value unused
                        stack5 *= 0.5;
                        stack4 += stack5;
                        if (!(_a = typeof __Math, ((_a !== 'object' && _a !== 'function' ) || __Math == null || __Math[AX_CLASS_SYMBOL]))) {
                           stack3 = __Math.sin(stack4);
                        } else {
                            // 7 0::sin
                            {
                                let t = __Math;
                                const m = t.$Bgsin || (t = sec.box(__Math), t.$Bgsin);
                                if( typeof m === "function" ) { 
                                    stack3 = t.$Bgsin (stack4);
                                } else { 
                                    stack3 = __Math.axCallProperty($names[14], [stack4], false);
                                }
                            }
                        }
//                        stack4 = 96;// JIT: redundant assigment, value unused
                        stack3 *= 96;
                        stack2 += stack3;
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[9], true, false);
                        stack3 = temp.$BgUtils;
                        if (stack3 === undefined || typeof stack3 === 'function') {
                            stack3 = temp.axGetProperty($names[9]);
                        }
                        // 7 0::m_scale
                        //Possible type:7 0::Utils
                        if (!(stack3 != undefined && stack3[AX_CLASS_SYMBOL])) {
                            stack3 = stack3['m_scale'];
                        } else {
                            temp = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);
                            stack3 = temp.$Bgm_scale;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[10]);
                            }
                        }
                        stack2 /= stack3;
                        stack3 = 40;
                        // 7 0::Math
                        /* GenerateLexImports GETLEX */
//                        stack4 = __Math;// JIT: redundant assigment, value unused
                        stack5 = local10;
//                        stack6 = local8;// JIT: redundant assigment, value unused
                        stack5 *= local8;
                        // 7 0::Math
                        /* GenerateLexImports GETLEX */
//                        stack6 = __Math;// JIT: redundant assigment, value unused
                        // 7 0::PI
                        //Possible type:7 0::Math
                        if (!(__Math != undefined && __Math[AX_CLASS_SYMBOL])) {
                            stack6 = __Math['PI'];
                        } else {
                            temp = __Math[AX_CLASS_SYMBOL] ? __Math : sec.box(__Math);
                            stack6 = temp.$BgPI;
                            if (stack6 === undefined || typeof stack6 === 'function') {
                                stack6 = temp.axGetProperty($names[3]);
                            }
                        }
//                        stack7 = 0.5;// JIT: redundant assigment, value unused
                        stack6 *= 0.5;
                        stack5 += stack6;
                        if (!(_a = typeof __Math, ((_a !== 'object' && _a !== 'function' ) || __Math == null || __Math[AX_CLASS_SYMBOL]))) {
                           stack4 = __Math.cos(stack5);
                        } else {
                            // 7 0::cos
                            {
                                let t = __Math;
                                const m = t.$Bgcos || (t = sec.box(__Math), t.$Bgcos);
                                if( typeof m === "function" ) { 
                                    stack4 = t.$Bgcos (stack5);
                                } else { 
                                    stack4 = __Math.axCallProperty($names[15], [stack5], false);
                                }
                            }
                        }
//                        stack5 = 96;// JIT: redundant assigment, value unused
                        stack4 *= 96;
                        stack3 += stack4;
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[9], true, false);
                        stack4 = temp.$BgUtils;
                        if (stack4 === undefined || typeof stack4 === 'function') {
                            stack4 = temp.axGetProperty($names[9]);
                        }
                        // 7 0::m_scale
                        //Possible type:7 0::Utils
                        if (!(stack4 != undefined && stack4[AX_CLASS_SYMBOL])) {
                            stack4 = stack4['m_scale'];
                        } else {
                            temp = stack4[AX_CLASS_SYMBOL] ? stack4 : sec.box(stack4);
                            stack4 = temp.$Bgm_scale;
                            if (stack4 === undefined || typeof stack4 === 'function') {
                                stack4 = temp.axGetProperty($names[10]);
                            }
                        }
                        stack3 /= stack4;
                        //JIT: Support fast construct:b2Vec2/Object
                        stack1 = context.constructFast(stack1, [stack2, stack3], $names[13]);
                        if (!(_a = typeof local12, ((_a !== 'object' && _a !== 'function' ) || local12 == null || local12[AX_CLASS_SYMBOL]))) {
                            local12.push(stack1);
                        } else {
                            // 7 0:http://adobe.com/AS3/2006/builtin::push
                            {
                                let t = local12;
                                const m = t.$Bgpush || (t = sec.box(local12), t.$Bgpush);
                                if( typeof m === "function" ) { 
                                    m.call(t, stack1);
                                } else { 
                                   local12.axCallProperty($names[16], [stack1], false);
                                }
                            }
                        }
//                        stack0 = local12;// JIT: redundant assigment, value unused
                        // 7 0:Box2D.Common.Math::b2Vec2
                        stack1 = scope0.findScopeProperty($names[13], true, false);
                        stack2 = -40;
                        // 7 0::Math
                        /* GenerateLexImports GETLEX */
//                        stack3 = __Math;// JIT: redundant assigment, value unused
                        stack4 = local10;
//                        stack5 = local7;// JIT: redundant assigment, value unused
                        stack4 *= local7;
                        // 7 0::Math
                        /* GenerateLexImports GETLEX */
//                        stack5 = __Math;// JIT: redundant assigment, value unused
                        // 7 0::PI
                        //Possible type:7 0::Math
                        if (!(__Math != undefined && __Math[AX_CLASS_SYMBOL])) {
                            stack5 = __Math['PI'];
                        } else {
                            temp = __Math[AX_CLASS_SYMBOL] ? __Math : sec.box(__Math);
                            stack5 = temp.$BgPI;
                            if (stack5 === undefined || typeof stack5 === 'function') {
                                stack5 = temp.axGetProperty($names[3]);
                            }
                        }
//                        stack6 = 0.5;// JIT: redundant assigment, value unused
                        stack5 *= 0.5;
                        stack4 += stack5;
                        if (!(_a = typeof __Math, ((_a !== 'object' && _a !== 'function' ) || __Math == null || __Math[AX_CLASS_SYMBOL]))) {
                           stack3 = __Math.sin(stack4);
                        } else {
                            // 7 0::sin
                            {
                                let t = __Math;
                                const m = t.$Bgsin || (t = sec.box(__Math), t.$Bgsin);
                                if( typeof m === "function" ) { 
                                    stack3 = t.$Bgsin (stack4);
                                } else { 
                                    stack3 = __Math.axCallProperty($names[14], [stack4], false);
                                }
                            }
                        }
//                        stack4 = 96;// JIT: redundant assigment, value unused
                        stack3 *= 96;
                        stack2 += stack3;
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[9], true, false);
                        stack3 = temp.$BgUtils;
                        if (stack3 === undefined || typeof stack3 === 'function') {
                            stack3 = temp.axGetProperty($names[9]);
                        }
                        // 7 0::m_scale
                        //Possible type:7 0::Utils
                        if (!(stack3 != undefined && stack3[AX_CLASS_SYMBOL])) {
                            stack3 = stack3['m_scale'];
                        } else {
                            temp = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);
                            stack3 = temp.$Bgm_scale;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[10]);
                            }
                        }
                        stack2 /= stack3;
                        stack3 = 40;
                        // 7 0::Math
                        /* GenerateLexImports GETLEX */
//                        stack4 = __Math;// JIT: redundant assigment, value unused
                        stack5 = local10;
//                        stack6 = local7;// JIT: redundant assigment, value unused
                        stack5 *= local7;
                        // 7 0::Math
                        /* GenerateLexImports GETLEX */
//                        stack6 = __Math;// JIT: redundant assigment, value unused
                        // 7 0::PI
                        //Possible type:7 0::Math
                        if (!(__Math != undefined && __Math[AX_CLASS_SYMBOL])) {
                            stack6 = __Math['PI'];
                        } else {
                            temp = __Math[AX_CLASS_SYMBOL] ? __Math : sec.box(__Math);
                            stack6 = temp.$BgPI;
                            if (stack6 === undefined || typeof stack6 === 'function') {
                                stack6 = temp.axGetProperty($names[3]);
                            }
                        }
//                        stack7 = 0.5;// JIT: redundant assigment, value unused
                        stack6 *= 0.5;
                        stack5 += stack6;
                        if (!(_a = typeof __Math, ((_a !== 'object' && _a !== 'function' ) || __Math == null || __Math[AX_CLASS_SYMBOL]))) {
                           stack4 = __Math.cos(stack5);
                        } else {
                            // 7 0::cos
                            {
                                let t = __Math;
                                const m = t.$Bgcos || (t = sec.box(__Math), t.$Bgcos);
                                if( typeof m === "function" ) { 
                                    stack4 = t.$Bgcos (stack5);
                                } else { 
                                    stack4 = __Math.axCallProperty($names[15], [stack5], false);
                                }
                            }
                        }
//                        stack5 = 96;// JIT: redundant assigment, value unused
                        stack4 *= 96;
                        stack3 += stack4;
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[9], true, false);
                        stack4 = temp.$BgUtils;
                        if (stack4 === undefined || typeof stack4 === 'function') {
                            stack4 = temp.axGetProperty($names[9]);
                        }
                        // 7 0::m_scale
                        //Possible type:7 0::Utils
                        if (!(stack4 != undefined && stack4[AX_CLASS_SYMBOL])) {
                            stack4 = stack4['m_scale'];
                        } else {
                            temp = stack4[AX_CLASS_SYMBOL] ? stack4 : sec.box(stack4);
                            stack4 = temp.$Bgm_scale;
                            if (stack4 === undefined || typeof stack4 === 'function') {
                                stack4 = temp.axGetProperty($names[10]);
                            }
                        }
                        stack3 /= stack4;
                        //JIT: Support fast construct:b2Vec2/Object
                        stack1 = context.constructFast(stack1, [stack2, stack3], $names[13]);
                        if (!(_a = typeof local12, ((_a !== 'object' && _a !== 'function' ) || local12 == null || local12[AX_CLASS_SYMBOL]))) {
                            local12.push(stack1);
                        } else {
                            // 7 0:http://adobe.com/AS3/2006/builtin::push
                            {
                                let t = local12;
                                const m = t.$Bgpush || (t = sec.box(local12), t.$Bgpush);
                                if( typeof m === "function" ) { 
                                    m.call(t, stack1);
                                } else { 
                                   local12.axCallProperty($names[16], [stack1], false);
                                }
                            }
                        }
                        // 7 0:Box2D.Collision.Shapes::b2PolygonShape
                        temp = scope0.findScopeProperty($names[17], true, false);
                        stack0 = temp.$Bgb2PolygonShape;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[17]);
                        }
//                        stack1 = local12;// JIT: redundant assigment, value unused
//                        stack2 = local12;// JIT: redundant assigment, value unused
                        // 7 0::length
                        //Possible type:undefined
                        if (!(local12 != undefined && local12[AX_CLASS_SYMBOL])) {
                            stack2 = local12['length'];
                        } else {
                            temp = local12[AX_CLASS_SYMBOL] ? local12 : sec.box(local12);
                            stack2 = temp.$Bglength;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[18]);
                            }
                        }
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                           stack0 = stack0.AsArray(local12, stack2);
                        } else {
                            // 7 0::AsArray
                            {
                                let t = stack0;
                                const m = t.$BgAsArray || (t = sec.box(stack0), t.$BgAsArray);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BgAsArray (local12, stack2);
                                } else { 
                                    stack0 = stack0.axCallProperty($names[19], [local12, stack2], false);
                                }
                            }
                        }
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[17], true, false);
                            _e || console.warn('[constructor] Coerce Type not found:', "b2PolygonShape")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        local6 = stack0;
                        // 7 0:Box2D.Dynamics::b2FixtureDef
                        stack0 = scope0.findScopeProperty($names[20], true, false);
                        //JIT: Support fast construct:b2FixtureDef/Object
                        stack0 = context.constructFast(stack0, [], $names[20]);
                        //IR: Drop coerce, reason: redundant
                        stack1 = stack0;
                        local13 = stack1;
//                        stack1 = local6;// JIT: redundant assigment, value unused
                        // 7 0::shape
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.shape = local6;
                        } else {
                            context.setproperty($names[21], local6, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[9], true, false);
                        stack1 = temp.$BgUtils;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[9]);
                        }
                        // 7 0::m_world
                        //Possible type:7 0::Utils
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['m_world'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$Bgm_world;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[22]);
                            }
                        }
//                        stack2 = local5;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack1, ((_a !== 'object' && _a !== 'function' ) || stack1 == null || stack1[AX_CLASS_SYMBOL]))) {
                           stack1 = stack1.CreateBody(local5);
                        } else {
                            // 7 0::CreateBody
                            {
                                let t = stack1;
                                const m = t.$BgCreateBody || (t = sec.box(stack1), t.$BgCreateBody);
                                if( typeof m === "function" ) { 
                                    stack1 = t.$BgCreateBody (local5);
                                } else { 
                                    stack1 = stack1.axCallProperty($names[23], [local5], false);
                                }
                            }
                        }
                        // 7 2:levels.collisions::body
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0:Box2D.Dynamics::b2Body  */ 
                        this.$Bgbody = stack1;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 2:levels.collisions::body
                        //Possible type:7 0:Box2D.Dynamics::b2FixtureDef
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Dynamics::b2Body  */ 
                        stack0 = this.$Bgbody;
//                        stack1 = local13;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.CreateFixture(local13);
                        } else {
                            // 7 0::CreateFixture
                            {
                                let t = stack0;
                                const m = t.$BgCreateFixture || (t = sec.box(stack0), t.$BgCreateFixture);
                                if( typeof m === "function" ) { 
                                    m.call(t, local13);
                                } else { 
                                   stack0.axCallProperty($names[24], [local13], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 2:levels.collisions::body
                        //Possible type:7 0:Box2D.Dynamics::b2Body
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Dynamics::b2Body  */ 
                        stack0 = this.$Bgbody;
                        // 7 0:levels::UserData
                        stack1 = scope0.findScopeProperty($names[25], true, false);
//                        stack2 = false;// JIT: redundant assigment, value unused
                        //JIT: Support fast construct:UserData/Object
                        stack1 = context.constructFast(stack1, [false], $names[25]);
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.SetUserData(stack1);
                        } else {
                            // 7 0::SetUserData
                            {
                                let t = stack0;
                                const m = t.$BgSetUserData || (t = sec.box(stack0), t.$BgSetUserData);
                                if( typeof m === "function" ) { 
                                    m.call(t, stack1);
                                } else { 
                                   stack0.axCallProperty($names[26], [stack1], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 2:levels.collisions::body
                        //Possible type:7 0:Box2D.Dynamics::b2Body
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Dynamics::b2Body  */ 
                        stack0 = this.$Bgbody;
//                        // JIT: potential type:7 0::Number// JIT: redundant assigment, value unused
                        stack1 = local4;
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.SetAngle(local4);
                        } else {
                            // 7 0::SetAngle
                            {
                                let t = stack0;
                                const m = t.$BgSetAngle || (t = sec.box(stack0), t.$BgSetAngle);
                                if( typeof m === "function" ) { 
                                    m.call(t, local4);
                                } else { 
                                   stack0.axCallProperty($names[27], [local4], false);
                                }
                            }
                        }
                        local7 = (local7 | 0) + 1;
                    case 569:
                        stack0 = local7;
                        stack1 = local9;
                        if (local9 > local7) { p = 94; continue; };
                        return;
                    }
                }
            }
//# sourceURL=http://jit/levels/collisions/CurvedBoxCollision/constructor.js
})