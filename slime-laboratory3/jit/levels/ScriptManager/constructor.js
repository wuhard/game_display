(function anonymous(context
) {
/*
	Index: 640
	Path:  levels/ScriptManager::constructor
	Type:  Public
	Kind:  null
	Super: Object
	Return: *
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;

             /* e */
             const __Math = context.getTopLevel(4)['$BgMath']; // :Math

    return function compiled_constructor(local1 /* MovieClip */, local2 /* Level */) {
        // Possible use a real "this"
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
//                        stack0 = undefined;// JIT: redundant assigment, value unused
                        
                        local3 = undefined;
//                        stack0 = 0;// JIT: redundant assigment, value unused
                        local4 = 0;
//                        stack0 = null;// JIT: redundant assigment, value unused
                        //JIT: SKIP_NULL_COERCE
                        local5 = null;
//                        stack0 = NaN;// JIT: redundant assigment, value unused
                        local6 = NaN;
//                        stack0 = 0;// JIT: redundant assigment, value unused
                        local7 = 0;
                        stack0 = this;
                        context.savedScope.superConstructor.call(this, );
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::Array
                        stack1 = scope0.findScopeProperty($names[0], true, false);
                        //JIT: Support fast construct:Array/Object
                        stack1 = context.constructFast(stack1, [], $names[0]);
                        // 7 0::levelItems
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Array  */ 
                        this.$BglevelItems = stack1;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::Array
                        stack1 = scope0.findScopeProperty($names[0], true, false);
                        //JIT: Support fast construct:Array/Object
                        stack1 = context.constructFast(stack1, [], $names[0]);
                        // 7 0::levelCollisions
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Array  */ 
                        this.$BglevelCollisions = stack1;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::Array
                        stack1 = scope0.findScopeProperty($names[0], true, false);
                        //JIT: Support fast construct:Array/Object
                        stack1 = context.constructFast(stack1, [], $names[0]);
                        // 7 0::levelEnemies
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Array  */ 
                        this.$BglevelEnemies = stack1;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::Array
                        stack1 = scope0.findScopeProperty($names[0], true, false);
                        //JIT: Support fast construct:Array/Object
                        stack1 = context.constructFast(stack1, [], $names[0]);
                        // 7 0::levelDecorations
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Array  */ 
                        this.$BglevelDecorations = stack1;
//                        stack0 = 0;// JIT: redundant assigment, value unused
                        
                        local3 = 0;
                        { p = 7027; continue; };
                    case 69:
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack0 = local1;
//                        stack1 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack0 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BggetChildAt (local3);
                                } else { 
                                    stack0 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::CollisionBox
                        temp = scope0.findScopeProperty($names[2], true, false);
                        stack1 = temp.$BgCollisionBox;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[2]);
                        }
                        stack0 = stack1.axIsType(stack0);
                        if (!stack0) { p = 200; continue; };
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack0 = local1;
//                        stack1 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack0 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BggetChildAt (local3);
                                } else { 
                                    stack0 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::rotation
                        //Possible type:undefined
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['rotation'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgrotation;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[3]);
                            }
                        }
                        // 7 0::Math
                        /* GenerateLexImports GETLEX */
//                        stack1 = __Math;// JIT: redundant assigment, value unused
                        // 7 0::PI
                        //Possible type:7 0::Math
                        if (!(__Math != undefined && __Math[AX_CLASS_SYMBOL])) {
                            stack1 = __Math['PI'];
                        } else {
                            temp = __Math[AX_CLASS_SYMBOL] ? __Math : sec.box(__Math);
                            stack1 = temp.$BgPI;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[5]);
                            }
                        }
                        stack0 *= stack1;
//                        stack1 = 180;// JIT: redundant assigment, value unused
                        stack0 /= 180;
                        stack0 = +stack0;
                        local6 = stack0;
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack0 = local1;
//                        stack1 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack0 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BggetChildAt (local3);
                                } else { 
                                    stack0 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
//                        stack1 = 0;// JIT: redundant assigment, value unused
                        // 7 0::rotation
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.rotation = 0;
                        } else {
                            context.setproperty($names[3], 0, stack0);
                        }
                        // 7 0:levels::GenericScript
                        stack0 = scope0.findScopeProperty($names[6], true, false);
//                        stack1 = 0;// JIT: redundant assigment, value unused
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack2 = local1;
//                        stack3 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack2 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack2 = t.$BggetChildAt (local3);
                                } else { 
                                    stack2 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::x
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['x'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$Bgx;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[7]);
                            }
                        }
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack3 = local1;
//                        stack4 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack3 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack3 = t.$BggetChildAt (local3);
                                } else { 
                                    stack3 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::y
                        if (!(stack3 != undefined && stack3[AX_CLASS_SYMBOL])) {
                            stack3 = stack3['y'];
                        } else {
                            temp = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);
                            stack3 = temp.$Bgy;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[8]);
                            }
                        }
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack4 = local1;
//                        stack5 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack4 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack4 = t.$BggetChildAt (local3);
                                } else { 
                                    stack4 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::width
                        if (!(stack4 != undefined && stack4[AX_CLASS_SYMBOL])) {
                            stack4 = stack4['width'];
                        } else {
                            temp = stack4[AX_CLASS_SYMBOL] ? stack4 : sec.box(stack4);
                            stack4 = temp.$Bgwidth;
                            if (stack4 === undefined || typeof stack4 === 'function') {
                                stack4 = temp.axGetProperty($names[9]);
                            }
                        }
//                        stack5 = 2;// JIT: redundant assigment, value unused
                        stack4 /= 2;
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack5 = local1;
//                        stack6 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack5 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack5 = t.$BggetChildAt (local3);
                                } else { 
                                    stack5 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::height
                        //Possible type:undefined
                        if (!(stack5 != undefined && stack5[AX_CLASS_SYMBOL])) {
                            stack5 = stack5['height'];
                        } else {
                            temp = stack5[AX_CLASS_SYMBOL] ? stack5 : sec.box(stack5);
                            stack5 = temp.$Bgheight;
                            if (stack5 === undefined || typeof stack5 === 'function') {
                                stack5 = temp.axGetProperty($names[10]);
                            }
                        }
//                        stack6 = 2;// JIT: redundant assigment, value unused
                        stack5 /= 2;
//                        stack6 = local6;// JIT: redundant assigment, value unused
                        //JIT: Support fast construct:GenericScript/Object
                        stack0 = context.constructFast(stack0, [0, stack2, stack3, stack4, stack5, local6], $names[6]);
                        //IR: Drop coerce, reason: redundant
                        local5 = stack0;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::levelCollisions
                        //Possible type:7 0:levels::GenericScript
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack0 = this.$BglevelCollisions;
//                        stack1 = local5;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.push(local5);
                        } else {
                            // 7 0:http://adobe.com/AS3/2006/builtin::push
                            {
                                let t = stack0;
                                const m = t.$Bgpush || (t = sec.box(stack0), t.$Bgpush);
                                if( typeof m === "function" ) { 
                                    m.call(t, local5);
                                } else { 
                                   stack0.axCallProperty($names[11], [local5], false);
                                }
                            }
                        }
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack0 = local1;
//                        stack1 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack0 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BggetChildAt (local3);
                                } else { 
                                    stack0 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
//                        stack1 = false;// JIT: redundant assigment, value unused
                        // 7 0::visible
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.visible = false;
                        } else {
                            context.setproperty($names[12], false, stack0);
                        }
                        { p = 7023; continue; };
                    case 200:
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack0 = local1;
//                        stack1 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack0 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BggetChildAt (local3);
                                } else { 
                                    stack0 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::CurveBox1Script
                        temp = scope0.findScopeProperty($names[13], true, false);
                        stack1 = temp.$BgCurveBox1Script;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[13]);
                        }
                        stack0 = stack1.axIsType(stack0);
                        if (!stack0) { p = 295; continue; };
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack0 = local1;
//                        stack1 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack0 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BggetChildAt (local3);
                                } else { 
                                    stack0 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::rotation
                        //Possible type:7 0::Array
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['rotation'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgrotation;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[3]);
                            }
                        }
                        // 7 0::Math
                        /* GenerateLexImports GETLEX */
//                        stack1 = __Math;// JIT: redundant assigment, value unused
                        // 7 0::PI
                        //Possible type:7 0::Math
                        if (!(__Math != undefined && __Math[AX_CLASS_SYMBOL])) {
                            stack1 = __Math['PI'];
                        } else {
                            temp = __Math[AX_CLASS_SYMBOL] ? __Math : sec.box(__Math);
                            stack1 = temp.$BgPI;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[5]);
                            }
                        }
                        stack0 *= stack1;
//                        stack1 = 180;// JIT: redundant assigment, value unused
                        stack0 /= 180;
                        stack0 = +stack0;
                        local6 = stack0;
                        // 7 0:levels::GenericScript
                        stack0 = scope0.findScopeProperty($names[6], true, false);
//                        stack1 = 104;// JIT: redundant assigment, value unused
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack2 = local1;
//                        stack3 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack2 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack2 = t.$BggetChildAt (local3);
                                } else { 
                                    stack2 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::x
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['x'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$Bgx;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[7]);
                            }
                        }
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack3 = local1;
//                        stack4 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack3 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack3 = t.$BggetChildAt (local3);
                                } else { 
                                    stack3 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::y
                        if (!(stack3 != undefined && stack3[AX_CLASS_SYMBOL])) {
                            stack3 = stack3['y'];
                        } else {
                            temp = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);
                            stack3 = temp.$Bgy;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[8]);
                            }
                        }
//                        stack4 = local6;// JIT: redundant assigment, value unused
                        //JIT: Support fast construct:GenericScript/Object
                        stack0 = context.constructFast(stack0, [104, stack2, stack3, local6], $names[6]);
                        //IR: Drop coerce, reason: redundant
                        local5 = stack0;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::levelCollisions
                        //Possible type:7 0:levels::GenericScript
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack0 = this.$BglevelCollisions;
//                        stack1 = local5;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.push(local5);
                        } else {
                            // 7 0:http://adobe.com/AS3/2006/builtin::push
                            {
                                let t = stack0;
                                const m = t.$Bgpush || (t = sec.box(stack0), t.$Bgpush);
                                if( typeof m === "function" ) { 
                                    m.call(t, local5);
                                } else { 
                                   stack0.axCallProperty($names[11], [local5], false);
                                }
                            }
                        }
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack0 = local1;
//                        stack1 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack0 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BggetChildAt (local3);
                                } else { 
                                    stack0 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
//                        stack1 = false;// JIT: redundant assigment, value unused
                        // 7 0::visible
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.visible = false;
                        } else {
                            context.setproperty($names[12], false, stack0);
                        }
                        { p = 7023; continue; };
                    case 295:
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack0 = local1;
//                        stack1 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack0 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BggetChildAt (local3);
                                } else { 
                                    stack0 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::PipeStartCollisionScript
                        temp = scope0.findScopeProperty($names[14], true, false);
                        stack1 = temp.$BgPipeStartCollisionScript;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[14]);
                        }
                        stack0 = stack1.axIsType(stack0);
                        if (!stack0) { p = 385; continue; };
                        // 7 0:levels::GenericScript
                        stack0 = scope0.findScopeProperty($names[6], true, false);
//                        stack1 = 105;// JIT: redundant assigment, value unused
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack2 = local1;
//                        stack3 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack2 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack2 = t.$BggetChildAt (local3);
                                } else { 
                                    stack2 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::x
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['x'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$Bgx;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[7]);
                            }
                        }
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack3 = local1;
//                        stack4 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack3 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack3 = t.$BggetChildAt (local3);
                                } else { 
                                    stack3 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::y
                        if (!(stack3 != undefined && stack3[AX_CLASS_SYMBOL])) {
                            stack3 = stack3['y'];
                        } else {
                            temp = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);
                            stack3 = temp.$Bgy;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[8]);
                            }
                        }
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack4 = local1;
//                        stack5 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack4 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack4 = t.$BggetChildAt (local3);
                                } else { 
                                    stack4 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::width
                        if (!(stack4 != undefined && stack4[AX_CLASS_SYMBOL])) {
                            stack4 = stack4['width'];
                        } else {
                            temp = stack4[AX_CLASS_SYMBOL] ? stack4 : sec.box(stack4);
                            stack4 = temp.$Bgwidth;
                            if (stack4 === undefined || typeof stack4 === 'function') {
                                stack4 = temp.axGetProperty($names[9]);
                            }
                        }
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack5 = local1;
//                        stack6 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack5 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack5 = t.$BggetChildAt (local3);
                                } else { 
                                    stack5 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::height
                        if (!(stack5 != undefined && stack5[AX_CLASS_SYMBOL])) {
                            stack5 = stack5['height'];
                        } else {
                            temp = stack5[AX_CLASS_SYMBOL] ? stack5 : sec.box(stack5);
                            stack5 = temp.$Bgheight;
                            if (stack5 === undefined || typeof stack5 === 'function') {
                                stack5 = temp.axGetProperty($names[10]);
                            }
                        }
//                        stack6 = 0;// JIT: redundant assigment, value unused
                        //JIT: Support fast construct:GenericScript/Object
                        stack0 = context.constructFast(stack0, [105, stack2, stack3, stack4, stack5, 0], $names[6]);
                        //IR: Drop coerce, reason: redundant
                        local5 = stack0;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::levelCollisions
                        //Possible type:7 0:levels::GenericScript
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack0 = this.$BglevelCollisions;
//                        stack1 = local5;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.push(local5);
                        } else {
                            // 7 0:http://adobe.com/AS3/2006/builtin::push
                            {
                                let t = stack0;
                                const m = t.$Bgpush || (t = sec.box(stack0), t.$Bgpush);
                                if( typeof m === "function" ) { 
                                    m.call(t, local5);
                                } else { 
                                   stack0.axCallProperty($names[11], [local5], false);
                                }
                            }
                        }
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack0 = local1;
//                        stack1 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack0 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BggetChildAt (local3);
                                } else { 
                                    stack0 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
//                        stack1 = false;// JIT: redundant assigment, value unused
                        // 7 0::visible
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.visible = false;
                        } else {
                            context.setproperty($names[12], false, stack0);
                        }
                        { p = 7023; continue; };
                    case 385:
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack0 = local1;
//                        stack1 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack0 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BggetChildAt (local3);
                                } else { 
                                    stack0 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::StickyCollisionArea
                        temp = scope0.findScopeProperty($names[15], true, false);
                        stack1 = temp.$BgStickyCollisionArea;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[15]);
                        }
                        stack0 = stack1.axIsType(stack0);
                        if (!stack0) { p = 515; continue; };
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack0 = local1;
//                        stack1 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack0 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BggetChildAt (local3);
                                } else { 
                                    stack0 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::rotation
                        //Possible type:7 0::Array
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['rotation'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgrotation;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[3]);
                            }
                        }
                        // 7 0::Math
                        /* GenerateLexImports GETLEX */
//                        stack1 = __Math;// JIT: redundant assigment, value unused
                        // 7 0::PI
                        //Possible type:7 0::Math
                        if (!(__Math != undefined && __Math[AX_CLASS_SYMBOL])) {
                            stack1 = __Math['PI'];
                        } else {
                            temp = __Math[AX_CLASS_SYMBOL] ? __Math : sec.box(__Math);
                            stack1 = temp.$BgPI;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[5]);
                            }
                        }
                        stack0 *= stack1;
//                        stack1 = 180;// JIT: redundant assigment, value unused
                        stack0 /= 180;
                        stack0 = +stack0;
                        local6 = stack0;
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack0 = local1;
//                        stack1 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack0 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BggetChildAt (local3);
                                } else { 
                                    stack0 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
//                        stack1 = 0;// JIT: redundant assigment, value unused
                        // 7 0::rotation
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.rotation = 0;
                        } else {
                            context.setproperty($names[3], 0, stack0);
                        }
                        // 7 0:levels::GenericScript
                        stack0 = scope0.findScopeProperty($names[6], true, false);
//                        stack1 = 35;// JIT: redundant assigment, value unused
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack2 = local1;
//                        stack3 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack2 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack2 = t.$BggetChildAt (local3);
                                } else { 
                                    stack2 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::x
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['x'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$Bgx;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[7]);
                            }
                        }
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack3 = local1;
//                        stack4 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack3 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack3 = t.$BggetChildAt (local3);
                                } else { 
                                    stack3 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::y
                        if (!(stack3 != undefined && stack3[AX_CLASS_SYMBOL])) {
                            stack3 = stack3['y'];
                        } else {
                            temp = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);
                            stack3 = temp.$Bgy;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[8]);
                            }
                        }
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack4 = local1;
//                        stack5 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack4 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack4 = t.$BggetChildAt (local3);
                                } else { 
                                    stack4 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::width
                        if (!(stack4 != undefined && stack4[AX_CLASS_SYMBOL])) {
                            stack4 = stack4['width'];
                        } else {
                            temp = stack4[AX_CLASS_SYMBOL] ? stack4 : sec.box(stack4);
                            stack4 = temp.$Bgwidth;
                            if (stack4 === undefined || typeof stack4 === 'function') {
                                stack4 = temp.axGetProperty($names[9]);
                            }
                        }
//                        stack5 = 2;// JIT: redundant assigment, value unused
                        stack4 /= 2;
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack5 = local1;
//                        stack6 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack5 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack5 = t.$BggetChildAt (local3);
                                } else { 
                                    stack5 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::height
                        //Possible type:undefined
                        if (!(stack5 != undefined && stack5[AX_CLASS_SYMBOL])) {
                            stack5 = stack5['height'];
                        } else {
                            temp = stack5[AX_CLASS_SYMBOL] ? stack5 : sec.box(stack5);
                            stack5 = temp.$Bgheight;
                            if (stack5 === undefined || typeof stack5 === 'function') {
                                stack5 = temp.axGetProperty($names[10]);
                            }
                        }
//                        stack6 = 2;// JIT: redundant assigment, value unused
                        stack5 /= 2;
//                        stack6 = local6;// JIT: redundant assigment, value unused
                        //JIT: Support fast construct:GenericScript/Object
                        stack0 = context.constructFast(stack0, [35, stack2, stack3, stack4, stack5, local6], $names[6]);
                        //IR: Drop coerce, reason: redundant
                        local5 = stack0;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::levelCollisions
                        //Possible type:7 0:levels::GenericScript
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack0 = this.$BglevelCollisions;
//                        stack1 = local5;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.push(local5);
                        } else {
                            // 7 0:http://adobe.com/AS3/2006/builtin::push
                            {
                                let t = stack0;
                                const m = t.$Bgpush || (t = sec.box(stack0), t.$Bgpush);
                                if( typeof m === "function" ) { 
                                    m.call(t, local5);
                                } else { 
                                   stack0.axCallProperty($names[11], [local5], false);
                                }
                            }
                        }
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack0 = local1;
//                        stack1 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack0 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BggetChildAt (local3);
                                } else { 
                                    stack0 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
//                        stack1 = false;// JIT: redundant assigment, value unused
                        // 7 0::visible
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.visible = false;
                        } else {
                            context.setproperty($names[12], false, stack0);
                        }
                        { p = 7023; continue; };
                    case 515:
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack0 = local1;
//                        stack1 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack0 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BggetChildAt (local3);
                                } else { 
                                    stack0 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::PipeEndCollisionScript
                        temp = scope0.findScopeProperty($names[16], true, false);
                        stack1 = temp.$BgPipeEndCollisionScript;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[16]);
                        }
                        stack0 = stack1.axIsType(stack0);
                        if (!stack0) { p = 605; continue; };
                        // 7 0:levels::GenericScript
                        stack0 = scope0.findScopeProperty($names[6], true, false);
//                        stack1 = 105;// JIT: redundant assigment, value unused
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack2 = local1;
//                        stack3 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack2 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack2 = t.$BggetChildAt (local3);
                                } else { 
                                    stack2 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::x
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['x'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$Bgx;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[7]);
                            }
                        }
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack3 = local1;
//                        stack4 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack3 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack3 = t.$BggetChildAt (local3);
                                } else { 
                                    stack3 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::y
                        if (!(stack3 != undefined && stack3[AX_CLASS_SYMBOL])) {
                            stack3 = stack3['y'];
                        } else {
                            temp = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);
                            stack3 = temp.$Bgy;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[8]);
                            }
                        }
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack4 = local1;
//                        stack5 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack4 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack4 = t.$BggetChildAt (local3);
                                } else { 
                                    stack4 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::width
                        if (!(stack4 != undefined && stack4[AX_CLASS_SYMBOL])) {
                            stack4 = stack4['width'];
                        } else {
                            temp = stack4[AX_CLASS_SYMBOL] ? stack4 : sec.box(stack4);
                            stack4 = temp.$Bgwidth;
                            if (stack4 === undefined || typeof stack4 === 'function') {
                                stack4 = temp.axGetProperty($names[9]);
                            }
                        }
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack5 = local1;
//                        stack6 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack5 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack5 = t.$BggetChildAt (local3);
                                } else { 
                                    stack5 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::height
                        if (!(stack5 != undefined && stack5[AX_CLASS_SYMBOL])) {
                            stack5 = stack5['height'];
                        } else {
                            temp = stack5[AX_CLASS_SYMBOL] ? stack5 : sec.box(stack5);
                            stack5 = temp.$Bgheight;
                            if (stack5 === undefined || typeof stack5 === 'function') {
                                stack5 = temp.axGetProperty($names[10]);
                            }
                        }
//                        stack6 = 1;// JIT: redundant assigment, value unused
                        //JIT: Support fast construct:GenericScript/Object
                        stack0 = context.constructFast(stack0, [105, stack2, stack3, stack4, stack5, 1], $names[6]);
                        //IR: Drop coerce, reason: redundant
                        local5 = stack0;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::levelCollisions
                        //Possible type:7 0:levels::GenericScript
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack0 = this.$BglevelCollisions;
//                        stack1 = local5;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.push(local5);
                        } else {
                            // 7 0:http://adobe.com/AS3/2006/builtin::push
                            {
                                let t = stack0;
                                const m = t.$Bgpush || (t = sec.box(stack0), t.$Bgpush);
                                if( typeof m === "function" ) { 
                                    m.call(t, local5);
                                } else { 
                                   stack0.axCallProperty($names[11], [local5], false);
                                }
                            }
                        }
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack0 = local1;
//                        stack1 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack0 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BggetChildAt (local3);
                                } else { 
                                    stack0 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
//                        stack1 = false;// JIT: redundant assigment, value unused
                        // 7 0::visible
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.visible = false;
                        } else {
                            context.setproperty($names[12], false, stack0);
                        }
                        { p = 7023; continue; };
                    case 605:
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack0 = local1;
//                        stack1 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack0 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BggetChildAt (local3);
                                } else { 
                                    stack0 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::SnowParticleSpriteScript
                        temp = scope0.findScopeProperty($names[17], true, false);
                        stack1 = temp.$BgSnowParticleSpriteScript;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[17]);
                        }
                        stack0 = stack1.axIsType(stack0);
                        if (!stack0) { p = 693; continue; };
                        // 7 0:levels::GenericScript
                        stack0 = scope0.findScopeProperty($names[6], true, false);
//                        stack1 = 106;// JIT: redundant assigment, value unused
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack2 = local1;
//                        stack3 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack2 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack2 = t.$BggetChildAt (local3);
                                } else { 
                                    stack2 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::x
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['x'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$Bgx;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[7]);
                            }
                        }
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack3 = local1;
//                        stack4 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack3 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack3 = t.$BggetChildAt (local3);
                                } else { 
                                    stack3 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::y
                        if (!(stack3 != undefined && stack3[AX_CLASS_SYMBOL])) {
                            stack3 = stack3['y'];
                        } else {
                            temp = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);
                            stack3 = temp.$Bgy;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[8]);
                            }
                        }
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack4 = local1;
//                        stack5 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack4 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack4 = t.$BggetChildAt (local3);
                                } else { 
                                    stack4 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::width
                        if (!(stack4 != undefined && stack4[AX_CLASS_SYMBOL])) {
                            stack4 = stack4['width'];
                        } else {
                            temp = stack4[AX_CLASS_SYMBOL] ? stack4 : sec.box(stack4);
                            stack4 = temp.$Bgwidth;
                            if (stack4 === undefined || typeof stack4 === 'function') {
                                stack4 = temp.axGetProperty($names[9]);
                            }
                        }
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack5 = local1;
//                        stack6 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack5 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack5 = t.$BggetChildAt (local3);
                                } else { 
                                    stack5 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::height
                        if (!(stack5 != undefined && stack5[AX_CLASS_SYMBOL])) {
                            stack5 = stack5['height'];
                        } else {
                            temp = stack5[AX_CLASS_SYMBOL] ? stack5 : sec.box(stack5);
                            stack5 = temp.$Bgheight;
                            if (stack5 === undefined || typeof stack5 === 'function') {
                                stack5 = temp.axGetProperty($names[10]);
                            }
                        }
                        //JIT: Support fast construct:GenericScript/Object
                        stack0 = context.constructFast(stack0, [106, stack2, stack3, stack4, stack5], $names[6]);
                        //IR: Drop coerce, reason: redundant
                        local5 = stack0;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::levelCollisions
                        //Possible type:7 0:levels::GenericScript
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack0 = this.$BglevelCollisions;
//                        stack1 = local5;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.push(local5);
                        } else {
                            // 7 0:http://adobe.com/AS3/2006/builtin::push
                            {
                                let t = stack0;
                                const m = t.$Bgpush || (t = sec.box(stack0), t.$Bgpush);
                                if( typeof m === "function" ) { 
                                    m.call(t, local5);
                                } else { 
                                   stack0.axCallProperty($names[11], [local5], false);
                                }
                            }
                        }
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack0 = local1;
//                        stack1 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack0 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BggetChildAt (local3);
                                } else { 
                                    stack0 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
//                        stack1 = false;// JIT: redundant assigment, value unused
                        // 7 0::visible
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.visible = false;
                        } else {
                            context.setproperty($names[12], false, stack0);
                        }
                        { p = 7023; continue; };
                    case 693:
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack0 = local1;
//                        stack1 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack0 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BggetChildAt (local3);
                                } else { 
                                    stack0 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::AvalancheCollisionScript
                        temp = scope0.findScopeProperty($names[18], true, false);
                        stack1 = temp.$BgAvalancheCollisionScript;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[18]);
                        }
                        stack0 = stack1.axIsType(stack0);
                        if (!stack0) { p = 781; continue; };
                        // 7 0:levels::GenericScript
                        stack0 = scope0.findScopeProperty($names[6], true, false);
//                        stack1 = 107;// JIT: redundant assigment, value unused
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack2 = local1;
//                        stack3 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack2 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack2 = t.$BggetChildAt (local3);
                                } else { 
                                    stack2 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::x
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['x'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$Bgx;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[7]);
                            }
                        }
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack3 = local1;
//                        stack4 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack3 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack3 = t.$BggetChildAt (local3);
                                } else { 
                                    stack3 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::y
                        if (!(stack3 != undefined && stack3[AX_CLASS_SYMBOL])) {
                            stack3 = stack3['y'];
                        } else {
                            temp = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);
                            stack3 = temp.$Bgy;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[8]);
                            }
                        }
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack4 = local1;
//                        stack5 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack4 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack4 = t.$BggetChildAt (local3);
                                } else { 
                                    stack4 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::width
                        if (!(stack4 != undefined && stack4[AX_CLASS_SYMBOL])) {
                            stack4 = stack4['width'];
                        } else {
                            temp = stack4[AX_CLASS_SYMBOL] ? stack4 : sec.box(stack4);
                            stack4 = temp.$Bgwidth;
                            if (stack4 === undefined || typeof stack4 === 'function') {
                                stack4 = temp.axGetProperty($names[9]);
                            }
                        }
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack5 = local1;
//                        stack6 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack5 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack5 = t.$BggetChildAt (local3);
                                } else { 
                                    stack5 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::height
                        if (!(stack5 != undefined && stack5[AX_CLASS_SYMBOL])) {
                            stack5 = stack5['height'];
                        } else {
                            temp = stack5[AX_CLASS_SYMBOL] ? stack5 : sec.box(stack5);
                            stack5 = temp.$Bgheight;
                            if (stack5 === undefined || typeof stack5 === 'function') {
                                stack5 = temp.axGetProperty($names[10]);
                            }
                        }
                        //JIT: Support fast construct:GenericScript/Object
                        stack0 = context.constructFast(stack0, [107, stack2, stack3, stack4, stack5], $names[6]);
                        //IR: Drop coerce, reason: redundant
                        local5 = stack0;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::levelCollisions
                        //Possible type:7 0:levels::GenericScript
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack0 = this.$BglevelCollisions;
//                        stack1 = local5;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.push(local5);
                        } else {
                            // 7 0:http://adobe.com/AS3/2006/builtin::push
                            {
                                let t = stack0;
                                const m = t.$Bgpush || (t = sec.box(stack0), t.$Bgpush);
                                if( typeof m === "function" ) { 
                                    m.call(t, local5);
                                } else { 
                                   stack0.axCallProperty($names[11], [local5], false);
                                }
                            }
                        }
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack0 = local1;
//                        stack1 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack0 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BggetChildAt (local3);
                                } else { 
                                    stack0 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
//                        stack1 = false;// JIT: redundant assigment, value unused
                        // 7 0::visible
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.visible = false;
                        } else {
                            context.setproperty($names[12], false, stack0);
                        }
                        { p = 7023; continue; };
                    case 781:
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack0 = local1;
//                        stack1 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack0 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BggetChildAt (local3);
                                } else { 
                                    stack0 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::IceCollisionBox
                        temp = scope0.findScopeProperty($names[19], true, false);
                        stack1 = temp.$BgIceCollisionBox;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[19]);
                        }
                        stack0 = stack1.axIsType(stack0);
                        if (!stack0) { p = 911; continue; };
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack0 = local1;
//                        stack1 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack0 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BggetChildAt (local3);
                                } else { 
                                    stack0 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::rotation
                        //Possible type:7 0::Array
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['rotation'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgrotation;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[3]);
                            }
                        }
                        // 7 0::Math
                        /* GenerateLexImports GETLEX */
//                        stack1 = __Math;// JIT: redundant assigment, value unused
                        // 7 0::PI
                        //Possible type:7 0::Math
                        if (!(__Math != undefined && __Math[AX_CLASS_SYMBOL])) {
                            stack1 = __Math['PI'];
                        } else {
                            temp = __Math[AX_CLASS_SYMBOL] ? __Math : sec.box(__Math);
                            stack1 = temp.$BgPI;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[5]);
                            }
                        }
                        stack0 *= stack1;
//                        stack1 = 180;// JIT: redundant assigment, value unused
                        stack0 /= 180;
                        stack0 = +stack0;
                        local6 = stack0;
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack0 = local1;
//                        stack1 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack0 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BggetChildAt (local3);
                                } else { 
                                    stack0 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
//                        stack1 = 0;// JIT: redundant assigment, value unused
                        // 7 0::rotation
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.rotation = 0;
                        } else {
                            context.setproperty($names[3], 0, stack0);
                        }
                        // 7 0:levels::GenericScript
                        stack0 = scope0.findScopeProperty($names[6], true, false);
//                        stack1 = 100;// JIT: redundant assigment, value unused
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack2 = local1;
//                        stack3 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack2 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack2 = t.$BggetChildAt (local3);
                                } else { 
                                    stack2 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::x
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['x'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$Bgx;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[7]);
                            }
                        }
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack3 = local1;
//                        stack4 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack3 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack3 = t.$BggetChildAt (local3);
                                } else { 
                                    stack3 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::y
                        if (!(stack3 != undefined && stack3[AX_CLASS_SYMBOL])) {
                            stack3 = stack3['y'];
                        } else {
                            temp = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);
                            stack3 = temp.$Bgy;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[8]);
                            }
                        }
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack4 = local1;
//                        stack5 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack4 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack4 = t.$BggetChildAt (local3);
                                } else { 
                                    stack4 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::width
                        if (!(stack4 != undefined && stack4[AX_CLASS_SYMBOL])) {
                            stack4 = stack4['width'];
                        } else {
                            temp = stack4[AX_CLASS_SYMBOL] ? stack4 : sec.box(stack4);
                            stack4 = temp.$Bgwidth;
                            if (stack4 === undefined || typeof stack4 === 'function') {
                                stack4 = temp.axGetProperty($names[9]);
                            }
                        }
//                        stack5 = 2;// JIT: redundant assigment, value unused
                        stack4 /= 2;
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack5 = local1;
//                        stack6 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack5 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack5 = t.$BggetChildAt (local3);
                                } else { 
                                    stack5 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::height
                        //Possible type:undefined
                        if (!(stack5 != undefined && stack5[AX_CLASS_SYMBOL])) {
                            stack5 = stack5['height'];
                        } else {
                            temp = stack5[AX_CLASS_SYMBOL] ? stack5 : sec.box(stack5);
                            stack5 = temp.$Bgheight;
                            if (stack5 === undefined || typeof stack5 === 'function') {
                                stack5 = temp.axGetProperty($names[10]);
                            }
                        }
//                        stack6 = 2;// JIT: redundant assigment, value unused
                        stack5 /= 2;
//                        stack6 = local6;// JIT: redundant assigment, value unused
                        //JIT: Support fast construct:GenericScript/Object
                        stack0 = context.constructFast(stack0, [100, stack2, stack3, stack4, stack5, local6], $names[6]);
                        //IR: Drop coerce, reason: redundant
                        local5 = stack0;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::levelCollisions
                        //Possible type:7 0:levels::GenericScript
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack0 = this.$BglevelCollisions;
//                        stack1 = local5;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.push(local5);
                        } else {
                            // 7 0:http://adobe.com/AS3/2006/builtin::push
                            {
                                let t = stack0;
                                const m = t.$Bgpush || (t = sec.box(stack0), t.$Bgpush);
                                if( typeof m === "function" ) { 
                                    m.call(t, local5);
                                } else { 
                                   stack0.axCallProperty($names[11], [local5], false);
                                }
                            }
                        }
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack0 = local1;
//                        stack1 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack0 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BggetChildAt (local3);
                                } else { 
                                    stack0 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
//                        stack1 = false;// JIT: redundant assigment, value unused
                        // 7 0::visible
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.visible = false;
                        } else {
                            context.setproperty($names[12], false, stack0);
                        }
                        { p = 7023; continue; };
                    case 911:
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack0 = local1;
//                        stack1 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack0 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BggetChildAt (local3);
                                } else { 
                                    stack0 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::CollisionCircleScript
                        temp = scope0.findScopeProperty($names[20], true, false);
                        stack1 = temp.$BgCollisionCircleScript;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[20]);
                        }
                        stack0 = stack1.axIsType(stack0);
                        if (!stack0) { p = 993; continue; };
                        // 7 0:levels::GenericScript
                        stack0 = scope0.findScopeProperty($names[6], true, false);
//                        stack1 = 28;// JIT: redundant assigment, value unused
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack2 = local1;
//                        stack3 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack2 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack2 = t.$BggetChildAt (local3);
                                } else { 
                                    stack2 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::x
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['x'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$Bgx;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[7]);
                            }
                        }
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack3 = local1;
//                        stack4 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack3 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack3 = t.$BggetChildAt (local3);
                                } else { 
                                    stack3 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::y
                        if (!(stack3 != undefined && stack3[AX_CLASS_SYMBOL])) {
                            stack3 = stack3['y'];
                        } else {
                            temp = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);
                            stack3 = temp.$Bgy;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[8]);
                            }
                        }
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack4 = local1;
//                        stack5 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack4 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack4 = t.$BggetChildAt (local3);
                                } else { 
                                    stack4 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::width
                        if (!(stack4 != undefined && stack4[AX_CLASS_SYMBOL])) {
                            stack4 = stack4['width'];
                        } else {
                            temp = stack4[AX_CLASS_SYMBOL] ? stack4 : sec.box(stack4);
                            stack4 = temp.$Bgwidth;
                            if (stack4 === undefined || typeof stack4 === 'function') {
                                stack4 = temp.axGetProperty($names[9]);
                            }
                        }
//                        stack5 = 2;// JIT: redundant assigment, value unused
                        stack4 /= 2;
                        //JIT: Support fast construct:GenericScript/Object
                        stack0 = context.constructFast(stack0, [28, stack2, stack3, stack4], $names[6]);
                        //IR: Drop coerce, reason: redundant
                        local5 = stack0;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::levelCollisions
                        //Possible type:7 0:levels::GenericScript
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack0 = this.$BglevelCollisions;
//                        stack1 = local5;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.push(local5);
                        } else {
                            // 7 0:http://adobe.com/AS3/2006/builtin::push
                            {
                                let t = stack0;
                                const m = t.$Bgpush || (t = sec.box(stack0), t.$Bgpush);
                                if( typeof m === "function" ) { 
                                    m.call(t, local5);
                                } else { 
                                   stack0.axCallProperty($names[11], [local5], false);
                                }
                            }
                        }
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack0 = local1;
//                        stack1 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack0 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BggetChildAt (local3);
                                } else { 
                                    stack0 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
//                        stack1 = false;// JIT: redundant assigment, value unused
                        // 7 0::visible
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.visible = false;
                        } else {
                            context.setproperty($names[12], false, stack0);
                        }
                        { p = 7023; continue; };
                    case 993:
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack0 = local1;
//                        stack1 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack0 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BggetChildAt (local3);
                                } else { 
                                    stack0 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::BoxElement
                        temp = scope0.findScopeProperty($names[21], true, false);
                        stack1 = temp.$BgBoxElement;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[21]);
                        }
                        stack0 = stack1.axIsType(stack0);
                        if (!stack0) { p = 1123; continue; };
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack0 = local1;
//                        stack1 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack0 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BggetChildAt (local3);
                                } else { 
                                    stack0 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::rotation
                        //Possible type:7 0::Array
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['rotation'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgrotation;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[3]);
                            }
                        }
                        // 7 0::Math
                        /* GenerateLexImports GETLEX */
//                        stack1 = __Math;// JIT: redundant assigment, value unused
                        // 7 0::PI
                        //Possible type:7 0::Math
                        if (!(__Math != undefined && __Math[AX_CLASS_SYMBOL])) {
                            stack1 = __Math['PI'];
                        } else {
                            temp = __Math[AX_CLASS_SYMBOL] ? __Math : sec.box(__Math);
                            stack1 = temp.$BgPI;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[5]);
                            }
                        }
                        stack0 *= stack1;
//                        stack1 = 180;// JIT: redundant assigment, value unused
                        stack0 /= 180;
                        stack0 = +stack0;
                        local6 = stack0;
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack0 = local1;
//                        stack1 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack0 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BggetChildAt (local3);
                                } else { 
                                    stack0 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
//                        stack1 = 0;// JIT: redundant assigment, value unused
                        // 7 0::rotation
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.rotation = 0;
                        } else {
                            context.setproperty($names[3], 0, stack0);
                        }
                        // 7 0:levels::GenericScript
                        stack0 = scope0.findScopeProperty($names[6], true, false);
//                        stack1 = 1;// JIT: redundant assigment, value unused
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack2 = local1;
//                        stack3 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack2 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack2 = t.$BggetChildAt (local3);
                                } else { 
                                    stack2 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::x
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['x'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$Bgx;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[7]);
                            }
                        }
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack3 = local1;
//                        stack4 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack3 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack3 = t.$BggetChildAt (local3);
                                } else { 
                                    stack3 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::y
                        if (!(stack3 != undefined && stack3[AX_CLASS_SYMBOL])) {
                            stack3 = stack3['y'];
                        } else {
                            temp = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);
                            stack3 = temp.$Bgy;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[8]);
                            }
                        }
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack4 = local1;
//                        stack5 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack4 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack4 = t.$BggetChildAt (local3);
                                } else { 
                                    stack4 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::width
                        if (!(stack4 != undefined && stack4[AX_CLASS_SYMBOL])) {
                            stack4 = stack4['width'];
                        } else {
                            temp = stack4[AX_CLASS_SYMBOL] ? stack4 : sec.box(stack4);
                            stack4 = temp.$Bgwidth;
                            if (stack4 === undefined || typeof stack4 === 'function') {
                                stack4 = temp.axGetProperty($names[9]);
                            }
                        }
//                        stack5 = 2;// JIT: redundant assigment, value unused
                        stack4 /= 2;
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack5 = local1;
//                        stack6 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack5 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack5 = t.$BggetChildAt (local3);
                                } else { 
                                    stack5 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::height
                        //Possible type:undefined
                        if (!(stack5 != undefined && stack5[AX_CLASS_SYMBOL])) {
                            stack5 = stack5['height'];
                        } else {
                            temp = stack5[AX_CLASS_SYMBOL] ? stack5 : sec.box(stack5);
                            stack5 = temp.$Bgheight;
                            if (stack5 === undefined || typeof stack5 === 'function') {
                                stack5 = temp.axGetProperty($names[10]);
                            }
                        }
//                        stack6 = 2;// JIT: redundant assigment, value unused
                        stack5 /= 2;
//                        stack6 = local6;// JIT: redundant assigment, value unused
                        //JIT: Support fast construct:GenericScript/Object
                        stack0 = context.constructFast(stack0, [1, stack2, stack3, stack4, stack5, local6], $names[6]);
                        //IR: Drop coerce, reason: redundant
                        local5 = stack0;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::levelCollisions
                        //Possible type:7 0:levels::GenericScript
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack0 = this.$BglevelCollisions;
//                        stack1 = local5;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.push(local5);
                        } else {
                            // 7 0:http://adobe.com/AS3/2006/builtin::push
                            {
                                let t = stack0;
                                const m = t.$Bgpush || (t = sec.box(stack0), t.$Bgpush);
                                if( typeof m === "function" ) { 
                                    m.call(t, local5);
                                } else { 
                                   stack0.axCallProperty($names[11], [local5], false);
                                }
                            }
                        }
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack0 = local1;
//                        stack1 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack0 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BggetChildAt (local3);
                                } else { 
                                    stack0 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
//                        stack1 = false;// JIT: redundant assigment, value unused
                        // 7 0::visible
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.visible = false;
                        } else {
                            context.setproperty($names[12], false, stack0);
                        }
                        { p = 7023; continue; };
                    case 1123:
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack0 = local1;
//                        stack1 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack0 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BggetChildAt (local3);
                                } else { 
                                    stack0 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::SlimeContainerSprite
                        temp = scope0.findScopeProperty($names[22], true, false);
                        stack1 = temp.$BgSlimeContainerSprite;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[22]);
                        }
                        stack0 = stack1.axIsType(stack0);
                        if (!stack0) { p = 1219; continue; };
                        // 7 0:levels::GenericScript
                        stack0 = scope0.findScopeProperty($names[6], true, false);
//                        stack1 = 2;// JIT: redundant assigment, value unused
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack2 = local1;
//                        stack3 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack2 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack2 = t.$BggetChildAt (local3);
                                } else { 
                                    stack2 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::x
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['x'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$Bgx;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[7]);
                            }
                        }
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack3 = local1;
//                        stack4 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack3 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack3 = t.$BggetChildAt (local3);
                                } else { 
                                    stack3 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::y
                        if (!(stack3 != undefined && stack3[AX_CLASS_SYMBOL])) {
                            stack3 = stack3['y'];
                        } else {
                            temp = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);
                            stack3 = temp.$Bgy;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[8]);
                            }
                        }
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack4 = local1;
//                        stack5 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack4 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack4 = t.$BggetChildAt (local3);
                                } else { 
                                    stack4 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::width
                        if (!(stack4 != undefined && stack4[AX_CLASS_SYMBOL])) {
                            stack4 = stack4['width'];
                        } else {
                            temp = stack4[AX_CLASS_SYMBOL] ? stack4 : sec.box(stack4);
                            stack4 = temp.$Bgwidth;
                            if (stack4 === undefined || typeof stack4 === 'function') {
                                stack4 = temp.axGetProperty($names[9]);
                            }
                        }
//                        stack5 = 2;// JIT: redundant assigment, value unused
                        stack4 /= 2;
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack5 = local1;
//                        stack6 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack5 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack5 = t.$BggetChildAt (local3);
                                } else { 
                                    stack5 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::height
                        //Possible type:undefined
                        if (!(stack5 != undefined && stack5[AX_CLASS_SYMBOL])) {
                            stack5 = stack5['height'];
                        } else {
                            temp = stack5[AX_CLASS_SYMBOL] ? stack5 : sec.box(stack5);
                            stack5 = temp.$Bgheight;
                            if (stack5 === undefined || typeof stack5 === 'function') {
                                stack5 = temp.axGetProperty($names[10]);
                            }
                        }
//                        stack6 = 2;// JIT: redundant assigment, value unused
                        stack5 /= 2;
//                        stack6 = 0;// JIT: redundant assigment, value unused
                        //JIT: Support fast construct:GenericScript/Object
                        stack0 = context.constructFast(stack0, [2, stack2, stack3, stack4, stack5, 0], $names[6]);
                        //IR: Drop coerce, reason: redundant
                        local5 = stack0;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::levelCollisions
                        //Possible type:7 0:levels::GenericScript
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack0 = this.$BglevelCollisions;
//                        stack1 = local5;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.push(local5);
                        } else {
                            // 7 0:http://adobe.com/AS3/2006/builtin::push
                            {
                                let t = stack0;
                                const m = t.$Bgpush || (t = sec.box(stack0), t.$Bgpush);
                                if( typeof m === "function" ) { 
                                    m.call(t, local5);
                                } else { 
                                   stack0.axCallProperty($names[11], [local5], false);
                                }
                            }
                        }
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack0 = local1;
//                        stack1 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack0 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BggetChildAt (local3);
                                } else { 
                                    stack0 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
//                        stack1 = false;// JIT: redundant assigment, value unused
                        // 7 0::visible
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.visible = false;
                        } else {
                            context.setproperty($names[12], false, stack0);
                        }
                        { p = 7023; continue; };
                    case 1219:
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack0 = local1;
//                        stack1 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack0 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BggetChildAt (local3);
                                } else { 
                                    stack0 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::FirstCheckpointTile
                        temp = scope0.findScopeProperty($names[23], true, false);
                        stack1 = temp.$BgFirstCheckpointTile;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[23]);
                        }
                        stack0 = stack1.axIsType(stack0);
                        if (!stack0) { p = 1289; continue; };
                        // 7 0:levels::GenericScript
                        stack0 = scope0.findScopeProperty($names[6], true, false);
//                        stack1 = 3;// JIT: redundant assigment, value unused
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack2 = local1;
//                        stack3 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack2 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack2 = t.$BggetChildAt (local3);
                                } else { 
                                    stack2 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::x
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['x'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$Bgx;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[7]);
                            }
                        }
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack3 = local1;
//                        stack4 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack3 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack3 = t.$BggetChildAt (local3);
                                } else { 
                                    stack3 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::y
                        if (!(stack3 != undefined && stack3[AX_CLASS_SYMBOL])) {
                            stack3 = stack3['y'];
                        } else {
                            temp = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);
                            stack3 = temp.$Bgy;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[8]);
                            }
                        }
                        //JIT: Support fast construct:GenericScript/Object
                        stack0 = context.constructFast(stack0, [3, stack2, stack3], $names[6]);
                        //IR: Drop coerce, reason: redundant
                        local5 = stack0;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::levelCollisions
                        //Possible type:7 0:levels::GenericScript
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack0 = this.$BglevelCollisions;
//                        stack1 = local5;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.push(local5);
                        } else {
                            // 7 0:http://adobe.com/AS3/2006/builtin::push
                            {
                                let t = stack0;
                                const m = t.$Bgpush || (t = sec.box(stack0), t.$Bgpush);
                                if( typeof m === "function" ) { 
                                    m.call(t, local5);
                                } else { 
                                   stack0.axCallProperty($names[11], [local5], false);
                                }
                            }
                        }
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack0 = local1;
//                        stack1 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack0 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BggetChildAt (local3);
                                } else { 
                                    stack0 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
//                        stack1 = false;// JIT: redundant assigment, value unused
                        // 7 0::visible
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.visible = false;
                        } else {
                            context.setproperty($names[12], false, stack0);
                        }
                        { p = 7023; continue; };
                    case 1289:
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack0 = local1;
//                        stack1 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack0 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BggetChildAt (local3);
                                } else { 
                                    stack0 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::CheckpointTile
                        temp = scope0.findScopeProperty($names[24], true, false);
                        stack1 = temp.$BgCheckpointTile;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[24]);
                        }
                        stack0 = stack1.axIsType(stack0);
                        if (!stack0) { p = 1384; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack1 = local1;
//                        stack2 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack1 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack1 = t.$BggetChildAt (local3);
                                } else { 
                                    stack1 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::name
                        //Possible type:7 0::CheckpointTile
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['name'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$Bgname;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[25]);
                            }
                        }
//                        stack2 = 1;// JIT: redundant assigment, value unused
                        /* We sure that this safe call, represented in TRAIT as Method  */ 
                        stack0 = this.$BggetParam(stack1, 1);
                        stack0 |= 0;
                        local7 = stack0;
                        // 7 0:levels::GenericScript
                        stack0 = scope0.findScopeProperty($names[6], true, false);
//                        stack1 = 4;// JIT: redundant assigment, value unused
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack2 = local1;
//                        stack3 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack2 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack2 = t.$BggetChildAt (local3);
                                } else { 
                                    stack2 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::x
                        //Possible type:undefined
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['x'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$Bgx;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[7]);
                            }
                        }
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack3 = local1;
//                        stack4 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack3 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack3 = t.$BggetChildAt (local3);
                                } else { 
                                    stack3 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::y
                        if (!(stack3 != undefined && stack3[AX_CLASS_SYMBOL])) {
                            stack3 = stack3['y'];
                        } else {
                            temp = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);
                            stack3 = temp.$Bgy;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[8]);
                            }
                        }
                        //JIT: Support fast construct:GenericScript/Object
                        stack0 = context.constructFast(stack0, [4, stack2, stack3], $names[6]);
                        //IR: Drop coerce, reason: redundant
                        stack1 = stack0;
                        local5 = stack1;
//                        stack1 = local7;// JIT: redundant assigment, value unused
                        // 7 0::value_1
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.value_1 = local7;
                        } else {
                            context.setproperty($names[26], local7, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::levelCollisions
                        //Possible type:7 0:levels::GenericScript
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack0 = this.$BglevelCollisions;
//                        stack1 = local5;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.push(local5);
                        } else {
                            // 7 0:http://adobe.com/AS3/2006/builtin::push
                            {
                                let t = stack0;
                                const m = t.$Bgpush || (t = sec.box(stack0), t.$Bgpush);
                                if( typeof m === "function" ) { 
                                    m.call(t, local5);
                                } else { 
                                   stack0.axCallProperty($names[11], [local5], false);
                                }
                            }
                        }
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack0 = local1;
//                        stack1 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack0 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BggetChildAt (local3);
                                } else { 
                                    stack0 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
//                        stack1 = false;// JIT: redundant assigment, value unused
                        // 7 0::visible
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.visible = false;
                        } else {
                            context.setproperty($names[12], false, stack0);
                        }
                        { p = 7023; continue; };
                    case 1384:
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack0 = local1;
//                        stack1 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack0 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BggetChildAt (local3);
                                } else { 
                                    stack0 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::LevelCompleteSpotSprite
                        temp = scope0.findScopeProperty($names[27], true, false);
                        stack1 = temp.$BgLevelCompleteSpotSprite;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[27]);
                        }
                        stack0 = stack1.axIsType(stack0);
                        if (!stack0) { p = 1454; continue; };
                        // 7 0:levels::GenericScript
                        stack0 = scope0.findScopeProperty($names[6], true, false);
//                        stack1 = 5;// JIT: redundant assigment, value unused
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack2 = local1;
//                        stack3 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack2 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack2 = t.$BggetChildAt (local3);
                                } else { 
                                    stack2 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::x
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['x'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$Bgx;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[7]);
                            }
                        }
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack3 = local1;
//                        stack4 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack3 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack3 = t.$BggetChildAt (local3);
                                } else { 
                                    stack3 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::y
                        if (!(stack3 != undefined && stack3[AX_CLASS_SYMBOL])) {
                            stack3 = stack3['y'];
                        } else {
                            temp = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);
                            stack3 = temp.$Bgy;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[8]);
                            }
                        }
                        //JIT: Support fast construct:GenericScript/Object
                        stack0 = context.constructFast(stack0, [5, stack2, stack3], $names[6]);
                        //IR: Drop coerce, reason: redundant
                        local5 = stack0;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::levelCollisions
                        //Possible type:7 0:levels::GenericScript
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack0 = this.$BglevelCollisions;
//                        stack1 = local5;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.push(local5);
                        } else {
                            // 7 0:http://adobe.com/AS3/2006/builtin::push
                            {
                                let t = stack0;
                                const m = t.$Bgpush || (t = sec.box(stack0), t.$Bgpush);
                                if( typeof m === "function" ) { 
                                    m.call(t, local5);
                                } else { 
                                   stack0.axCallProperty($names[11], [local5], false);
                                }
                            }
                        }
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack0 = local1;
//                        stack1 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack0 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BggetChildAt (local3);
                                } else { 
                                    stack0 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
//                        stack1 = false;// JIT: redundant assigment, value unused
                        // 7 0::visible
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.visible = false;
                        } else {
                            context.setproperty($names[12], false, stack0);
                        }
                        { p = 7023; continue; };
                    case 1454:
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack0 = local1;
//                        stack1 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack0 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BggetChildAt (local3);
                                } else { 
                                    stack0 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::HeroTile
                        temp = scope0.findScopeProperty($names[28], true, false);
                        stack1 = temp.$BgHeroTile;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[28]);
                        }
                        stack0 = stack1.axIsType(stack0);
                        if (!stack0) { p = 1524; continue; };
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack0 = local1;
//                        stack1 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack0 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BggetChildAt (local3);
                                } else { 
                                    stack0 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
//                        stack1 = false;// JIT: redundant assigment, value unused
                        // 7 0::visible
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.visible = false;
                        } else {
                            context.setproperty($names[12], false, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::int
                        temp = scope0.findScopeProperty($names[29], true, false);
                        stack1 = temp.$Bgint;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[29]);
                        }
                        stack2 = context.savedScope.global.object;
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack3 = local1;
//                        stack4 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack3 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack3 = t.$BggetChildAt (local3);
                                } else { 
                                    stack3 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::x
                        if (!(stack3 != undefined && stack3[AX_CLASS_SYMBOL])) {
                            stack3 = stack3['x'];
                        } else {
                            temp = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);
                            stack3 = temp.$Bgx;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[7]);
                            }
                        }
//                        stack4 = 8;// JIT: redundant assigment, value unused
                        stack3 += 8;
                        stack1 = context.call(stack1, stack2, [stack3], scope0);
                        // 7 0::heroInitialXPos
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::int  */ 
                        this.$BgheroInitialXPos = (stack1|0);
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::int
                        temp = scope0.findScopeProperty($names[29], true, false);
                        stack1 = temp.$Bgint;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[29]);
                        }
                        stack2 = context.savedScope.global.object;
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack3 = local1;
//                        stack4 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack3 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack3 = t.$BggetChildAt (local3);
                                } else { 
                                    stack3 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::y
                        if (!(stack3 != undefined && stack3[AX_CLASS_SYMBOL])) {
                            stack3 = stack3['y'];
                        } else {
                            temp = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);
                            stack3 = temp.$Bgy;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[8]);
                            }
                        }
//                        stack4 = 8;// JIT: redundant assigment, value unused
                        stack3 += 8;
                        stack1 = context.call(stack1, stack2, [stack3], scope0);
                        // 7 0::heroInitialYPos
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::int  */ 
                        this.$BgheroInitialYPos = (stack1|0);
                        { p = 7023; continue; };
                    case 1524:
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack0 = local1;
//                        stack1 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack0 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BggetChildAt (local3);
                                } else { 
                                    stack0 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::DownRightCorner
                        temp = scope0.findScopeProperty($names[30], true, false);
                        stack1 = temp.$BgDownRightCorner;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[30]);
                        }
                        stack0 = stack1.axIsType(stack0);
                        if (!stack0) { p = 1616; continue; };
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack0 = local1;
//                        stack1 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack0 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BggetChildAt (local3);
                                } else { 
                                    stack0 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
//                        stack1 = false;// JIT: redundant assigment, value unused
                        // 7 0::visible
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.visible = false;
                        } else {
                            context.setproperty($names[12], false, stack0);
                        }
//                        // JIT: potential type:7 0:levels::Level// JIT: redundant assigment, value unused
                        stack0 = local2;
                        // 7 0::int
                        temp = scope0.findScopeProperty($names[29], true, false);
                        stack1 = temp.$Bgint;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[29]);
                        }
                        stack2 = context.savedScope.global.object;
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack3 = local1;
//                        stack4 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack3 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack3 = t.$BggetChildAt (local3);
                                } else { 
                                    stack3 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::x
                        if (!(stack3 != undefined && stack3[AX_CLASS_SYMBOL])) {
                            stack3 = stack3['x'];
                        } else {
                            temp = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);
                            stack3 = temp.$Bgx;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[7]);
                            }
                        }
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack4 = local1;
//                        stack5 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack4 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack4 = t.$BggetChildAt (local3);
                                } else { 
                                    stack4 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::width
                        //Possible type:undefined
                        if (!(stack4 != undefined && stack4[AX_CLASS_SYMBOL])) {
                            stack4 = stack4['width'];
                        } else {
                            temp = stack4[AX_CLASS_SYMBOL] ? stack4 : sec.box(stack4);
                            stack4 = temp.$Bgwidth;
                            if (stack4 === undefined || typeof stack4 === 'function') {
                                stack4 = temp.axGetProperty($names[9]);
                            }
                        }
                        stack3 += stack4;
                        stack1 = context.call(stack1, stack2, [stack3], scope0);
                        // 7 0::LEVEL_WIDTH
                        if (!(local2 != undefined && local2[AX_CLASS_SYMBOL])){
                            local2.LEVEL_WIDTH = stack1;
                        } else {
                            context.setproperty($names[31], stack1, local2);
                        }
//                        // JIT: potential type:7 0:levels::Level// JIT: redundant assigment, value unused
                        stack0 = local2;
                        // 7 0::int
                        temp = scope0.findScopeProperty($names[29], true, false);
                        stack1 = temp.$Bgint;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[29]);
                        }
                        stack2 = context.savedScope.global.object;
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack3 = local1;
//                        stack4 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack3 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack3 = t.$BggetChildAt (local3);
                                } else { 
                                    stack3 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::y
                        if (!(stack3 != undefined && stack3[AX_CLASS_SYMBOL])) {
                            stack3 = stack3['y'];
                        } else {
                            temp = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);
                            stack3 = temp.$Bgy;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[8]);
                            }
                        }
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack4 = local1;
//                        stack5 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack4 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack4 = t.$BggetChildAt (local3);
                                } else { 
                                    stack4 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::height
                        if (!(stack4 != undefined && stack4[AX_CLASS_SYMBOL])) {
                            stack4 = stack4['height'];
                        } else {
                            temp = stack4[AX_CLASS_SYMBOL] ? stack4 : sec.box(stack4);
                            stack4 = temp.$Bgheight;
                            if (stack4 === undefined || typeof stack4 === 'function') {
                                stack4 = temp.axGetProperty($names[10]);
                            }
                        }
                        stack3 += stack4;
                        stack1 = context.call(stack1, stack2, [stack3], scope0);
                        // 7 0::LEVEL_HEIGHT
                        if (!(local2 != undefined && local2[AX_CLASS_SYMBOL])){
                            local2.LEVEL_HEIGHT = stack1;
                        } else {
                            context.setproperty($names[32], stack1, local2);
                        }
//                        // JIT: potential type:7 0:levels::Level// JIT: redundant assigment, value unused
                        stack0 = local2;
//                        // JIT: potential type:7 0:levels::Level// JIT: redundant assigment, value unused
                        stack1 = local2;
                        // 7 0::LEVEL_HEIGHT
                        //Possible type:7 0::int
                        if (!(local2 != undefined && local2[AX_CLASS_SYMBOL])) {
                            stack1 = local2['LEVEL_HEIGHT'];
                        } else {
                            temp = local2[AX_CLASS_SYMBOL] ? local2 : sec.box(local2);
                            stack1 = temp.$BgLEVEL_HEIGHT;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[32]);
                            }
                        }
                        // 7 0::floorYPos
                        if (!(local2 != undefined && local2[AX_CLASS_SYMBOL])){
                            local2.floorYPos = stack1;
                        } else {
                            context.setproperty($names[33], stack1, local2);
                        }
                        { p = 7023; continue; };
                    case 1616:
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack0 = local1;
//                        stack1 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack0 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BggetChildAt (local3);
                                } else { 
                                    stack0 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::CorridorWindow
                        temp = scope0.findScopeProperty($names[34], true, false);
                        stack1 = temp.$BgCorridorWindow;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[34]);
                        }
                        stack0 = stack1.axIsType(stack0);
                        if (!stack0) { p = 1686; continue; };
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack0 = local1;
//                        stack1 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack0 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BggetChildAt (local3);
                                } else { 
                                    stack0 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
//                        stack1 = false;// JIT: redundant assigment, value unused
                        // 7 0::visible
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.visible = false;
                        } else {
                            context.setproperty($names[12], false, stack0);
                        }
                        // 7 0:levels::GenericScript
                        stack0 = scope0.findScopeProperty($names[6], true, false);
//                        stack1 = 0;// JIT: redundant assigment, value unused
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack2 = local1;
//                        stack3 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack2 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack2 = t.$BggetChildAt (local3);
                                } else { 
                                    stack2 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::x
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['x'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$Bgx;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[7]);
                            }
                        }
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack3 = local1;
//                        stack4 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack3 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack3 = t.$BggetChildAt (local3);
                                } else { 
                                    stack3 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::y
                        if (!(stack3 != undefined && stack3[AX_CLASS_SYMBOL])) {
                            stack3 = stack3['y'];
                        } else {
                            temp = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);
                            stack3 = temp.$Bgy;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[8]);
                            }
                        }
                        //JIT: Support fast construct:GenericScript/Object
                        stack0 = context.constructFast(stack0, [0, stack2, stack3], $names[6]);
                        //IR: Drop coerce, reason: redundant
                        local5 = stack0;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::levelDecorations
                        //Possible type:7 0:levels::GenericScript
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack0 = this.$BglevelDecorations;
//                        stack1 = local5;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.push(local5);
                        } else {
                            // 7 0:http://adobe.com/AS3/2006/builtin::push
                            {
                                let t = stack0;
                                const m = t.$Bgpush || (t = sec.box(stack0), t.$Bgpush);
                                if( typeof m === "function" ) { 
                                    m.call(t, local5);
                                } else { 
                                   stack0.axCallProperty($names[11], [local5], false);
                                }
                            }
                        }
                        { p = 7023; continue; };
                    case 1686:
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack0 = local1;
//                        stack1 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack0 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BggetChildAt (local3);
                                } else { 
                                    stack0 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::Point1Tile
                        temp = scope0.findScopeProperty($names[35], true, false);
                        stack1 = temp.$BgPoint1Tile;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[35]);
                        }
                        stack0 = stack1.axIsType(stack0);
                        if (!stack0) { p = 1756; continue; };
                        // 7 0:levels::GenericScript
                        stack0 = scope0.findScopeProperty($names[6], true, false);
//                        stack1 = 0;// JIT: redundant assigment, value unused
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack2 = local1;
//                        stack3 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack2 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack2 = t.$BggetChildAt (local3);
                                } else { 
                                    stack2 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::x
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['x'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$Bgx;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[7]);
                            }
                        }
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack3 = local1;
//                        stack4 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack3 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack3 = t.$BggetChildAt (local3);
                                } else { 
                                    stack3 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::y
                        if (!(stack3 != undefined && stack3[AX_CLASS_SYMBOL])) {
                            stack3 = stack3['y'];
                        } else {
                            temp = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);
                            stack3 = temp.$Bgy;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[8]);
                            }
                        }
                        //JIT: Support fast construct:GenericScript/Object
                        stack0 = context.constructFast(stack0, [0, stack2, stack3], $names[6]);
                        //IR: Drop coerce, reason: redundant
                        local5 = stack0;
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack0 = local1;
//                        stack1 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack0 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BggetChildAt (local3);
                                } else { 
                                    stack0 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
//                        stack1 = false;// JIT: redundant assigment, value unused
                        // 7 0::visible
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.visible = false;
                        } else {
                            context.setproperty($names[12], false, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::levelItems
                        //Possible type:7 0:levels::GenericScript
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack0 = this.$BglevelItems;
//                        stack1 = local5;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.push(local5);
                        } else {
                            // 7 0:http://adobe.com/AS3/2006/builtin::push
                            {
                                let t = stack0;
                                const m = t.$Bgpush || (t = sec.box(stack0), t.$Bgpush);
                                if( typeof m === "function" ) { 
                                    m.call(t, local5);
                                } else { 
                                   stack0.axCallProperty($names[11], [local5], false);
                                }
                            }
                        }
                        { p = 7023; continue; };
                    case 1756:
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack0 = local1;
//                        stack1 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack0 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BggetChildAt (local3);
                                } else { 
                                    stack0 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::Point2Tile
                        temp = scope0.findScopeProperty($names[36], true, false);
                        stack1 = temp.$BgPoint2Tile;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[36]);
                        }
                        stack0 = stack1.axIsType(stack0);
                        if (!stack0) { p = 1826; continue; };
                        // 7 0:levels::GenericScript
                        stack0 = scope0.findScopeProperty($names[6], true, false);
//                        stack1 = 1;// JIT: redundant assigment, value unused
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack2 = local1;
//                        stack3 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack2 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack2 = t.$BggetChildAt (local3);
                                } else { 
                                    stack2 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::x
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['x'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$Bgx;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[7]);
                            }
                        }
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack3 = local1;
//                        stack4 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack3 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack3 = t.$BggetChildAt (local3);
                                } else { 
                                    stack3 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::y
                        if (!(stack3 != undefined && stack3[AX_CLASS_SYMBOL])) {
                            stack3 = stack3['y'];
                        } else {
                            temp = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);
                            stack3 = temp.$Bgy;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[8]);
                            }
                        }
                        //JIT: Support fast construct:GenericScript/Object
                        stack0 = context.constructFast(stack0, [1, stack2, stack3], $names[6]);
                        //IR: Drop coerce, reason: redundant
                        local5 = stack0;
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack0 = local1;
//                        stack1 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack0 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BggetChildAt (local3);
                                } else { 
                                    stack0 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
//                        stack1 = false;// JIT: redundant assigment, value unused
                        // 7 0::visible
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.visible = false;
                        } else {
                            context.setproperty($names[12], false, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::levelItems
                        //Possible type:7 0:levels::GenericScript
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack0 = this.$BglevelItems;
//                        stack1 = local5;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.push(local5);
                        } else {
                            // 7 0:http://adobe.com/AS3/2006/builtin::push
                            {
                                let t = stack0;
                                const m = t.$Bgpush || (t = sec.box(stack0), t.$Bgpush);
                                if( typeof m === "function" ) { 
                                    m.call(t, local5);
                                } else { 
                                   stack0.axCallProperty($names[11], [local5], false);
                                }
                            }
                        }
                        { p = 7023; continue; };
                    case 1826:
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack0 = local1;
//                        stack1 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack0 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BggetChildAt (local3);
                                } else { 
                                    stack0 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::Point3Tile
                        temp = scope0.findScopeProperty($names[37], true, false);
                        stack1 = temp.$BgPoint3Tile;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[37]);
                        }
                        stack0 = stack1.axIsType(stack0);
                        if (!stack0) { p = 1896; continue; };
                        // 7 0:levels::GenericScript
                        stack0 = scope0.findScopeProperty($names[6], true, false);
//                        stack1 = 2;// JIT: redundant assigment, value unused
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack2 = local1;
//                        stack3 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack2 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack2 = t.$BggetChildAt (local3);
                                } else { 
                                    stack2 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::x
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['x'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$Bgx;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[7]);
                            }
                        }
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack3 = local1;
//                        stack4 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack3 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack3 = t.$BggetChildAt (local3);
                                } else { 
                                    stack3 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::y
                        if (!(stack3 != undefined && stack3[AX_CLASS_SYMBOL])) {
                            stack3 = stack3['y'];
                        } else {
                            temp = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);
                            stack3 = temp.$Bgy;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[8]);
                            }
                        }
                        //JIT: Support fast construct:GenericScript/Object
                        stack0 = context.constructFast(stack0, [2, stack2, stack3], $names[6]);
                        //IR: Drop coerce, reason: redundant
                        local5 = stack0;
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack0 = local1;
//                        stack1 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack0 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BggetChildAt (local3);
                                } else { 
                                    stack0 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
//                        stack1 = false;// JIT: redundant assigment, value unused
                        // 7 0::visible
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.visible = false;
                        } else {
                            context.setproperty($names[12], false, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::levelItems
                        //Possible type:7 0:levels::GenericScript
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack0 = this.$BglevelItems;
//                        stack1 = local5;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.push(local5);
                        } else {
                            // 7 0:http://adobe.com/AS3/2006/builtin::push
                            {
                                let t = stack0;
                                const m = t.$Bgpush || (t = sec.box(stack0), t.$Bgpush);
                                if( typeof m === "function" ) { 
                                    m.call(t, local5);
                                } else { 
                                   stack0.axCallProperty($names[11], [local5], false);
                                }
                            }
                        }
                        { p = 7023; continue; };
                    case 1896:
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack0 = local1;
//                        stack1 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack0 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BggetChildAt (local3);
                                } else { 
                                    stack0 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::TutorialSprite1
                        temp = scope0.findScopeProperty($names[38], true, false);
                        stack1 = temp.$BgTutorialSprite1;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[38]);
                        }
                        stack0 = stack1.axIsType(stack0);
                        if (!stack0) { p = 1968; continue; };
                        // 7 0:levels::GenericScript
                        stack0 = scope0.findScopeProperty($names[6], true, false);
//                        stack1 = 6;// JIT: redundant assigment, value unused
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack2 = local1;
//                        stack3 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack2 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack2 = t.$BggetChildAt (local3);
                                } else { 
                                    stack2 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::x
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['x'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$Bgx;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[7]);
                            }
                        }
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack3 = local1;
//                        stack4 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack3 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack3 = t.$BggetChildAt (local3);
                                } else { 
                                    stack3 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::y
                        if (!(stack3 != undefined && stack3[AX_CLASS_SYMBOL])) {
                            stack3 = stack3['y'];
                        } else {
                            temp = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);
                            stack3 = temp.$Bgy;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[8]);
                            }
                        }
//                        stack4 = 0;// JIT: redundant assigment, value unused
                        //JIT: Support fast construct:GenericScript/Object
                        stack0 = context.constructFast(stack0, [6, stack2, stack3, 0], $names[6]);
                        //IR: Drop coerce, reason: redundant
                        local5 = stack0;
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack0 = local1;
//                        stack1 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack0 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BggetChildAt (local3);
                                } else { 
                                    stack0 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
//                        stack1 = false;// JIT: redundant assigment, value unused
                        // 7 0::visible
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.visible = false;
                        } else {
                            context.setproperty($names[12], false, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::levelCollisions
                        //Possible type:7 0:levels::GenericScript
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack0 = this.$BglevelCollisions;
//                        stack1 = local5;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.push(local5);
                        } else {
                            // 7 0:http://adobe.com/AS3/2006/builtin::push
                            {
                                let t = stack0;
                                const m = t.$Bgpush || (t = sec.box(stack0), t.$Bgpush);
                                if( typeof m === "function" ) { 
                                    m.call(t, local5);
                                } else { 
                                   stack0.axCallProperty($names[11], [local5], false);
                                }
                            }
                        }
                        { p = 7023; continue; };
                    case 1968:
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack0 = local1;
//                        stack1 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack0 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BggetChildAt (local3);
                                } else { 
                                    stack0 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::TutorialSprite2
                        temp = scope0.findScopeProperty($names[39], true, false);
                        stack1 = temp.$BgTutorialSprite2;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[39]);
                        }
                        stack0 = stack1.axIsType(stack0);
                        if (!stack0) { p = 2040; continue; };
                        // 7 0:levels::GenericScript
                        stack0 = scope0.findScopeProperty($names[6], true, false);
//                        stack1 = 6;// JIT: redundant assigment, value unused
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack2 = local1;
//                        stack3 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack2 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack2 = t.$BggetChildAt (local3);
                                } else { 
                                    stack2 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::x
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['x'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$Bgx;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[7]);
                            }
                        }
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack3 = local1;
//                        stack4 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack3 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack3 = t.$BggetChildAt (local3);
                                } else { 
                                    stack3 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::y
                        if (!(stack3 != undefined && stack3[AX_CLASS_SYMBOL])) {
                            stack3 = stack3['y'];
                        } else {
                            temp = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);
                            stack3 = temp.$Bgy;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[8]);
                            }
                        }
//                        stack4 = 1;// JIT: redundant assigment, value unused
                        //JIT: Support fast construct:GenericScript/Object
                        stack0 = context.constructFast(stack0, [6, stack2, stack3, 1], $names[6]);
                        //IR: Drop coerce, reason: redundant
                        local5 = stack0;
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack0 = local1;
//                        stack1 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack0 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BggetChildAt (local3);
                                } else { 
                                    stack0 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
//                        stack1 = false;// JIT: redundant assigment, value unused
                        // 7 0::visible
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.visible = false;
                        } else {
                            context.setproperty($names[12], false, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::levelCollisions
                        //Possible type:7 0:levels::GenericScript
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack0 = this.$BglevelCollisions;
//                        stack1 = local5;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.push(local5);
                        } else {
                            // 7 0:http://adobe.com/AS3/2006/builtin::push
                            {
                                let t = stack0;
                                const m = t.$Bgpush || (t = sec.box(stack0), t.$Bgpush);
                                if( typeof m === "function" ) { 
                                    m.call(t, local5);
                                } else { 
                                   stack0.axCallProperty($names[11], [local5], false);
                                }
                            }
                        }
                        { p = 7023; continue; };
                    case 2040:
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack0 = local1;
//                        stack1 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack0 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BggetChildAt (local3);
                                } else { 
                                    stack0 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::TutorialSprite3
                        temp = scope0.findScopeProperty($names[40], true, false);
                        stack1 = temp.$BgTutorialSprite3;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[40]);
                        }
                        stack0 = stack1.axIsType(stack0);
                        if (!stack0) { p = 2112; continue; };
                        // 7 0:levels::GenericScript
                        stack0 = scope0.findScopeProperty($names[6], true, false);
//                        stack1 = 6;// JIT: redundant assigment, value unused
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack2 = local1;
//                        stack3 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack2 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack2 = t.$BggetChildAt (local3);
                                } else { 
                                    stack2 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::x
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['x'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$Bgx;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[7]);
                            }
                        }
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack3 = local1;
//                        stack4 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack3 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack3 = t.$BggetChildAt (local3);
                                } else { 
                                    stack3 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::y
                        if (!(stack3 != undefined && stack3[AX_CLASS_SYMBOL])) {
                            stack3 = stack3['y'];
                        } else {
                            temp = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);
                            stack3 = temp.$Bgy;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[8]);
                            }
                        }
//                        stack4 = 2;// JIT: redundant assigment, value unused
                        //JIT: Support fast construct:GenericScript/Object
                        stack0 = context.constructFast(stack0, [6, stack2, stack3, 2], $names[6]);
                        //IR: Drop coerce, reason: redundant
                        local5 = stack0;
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack0 = local1;
//                        stack1 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack0 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BggetChildAt (local3);
                                } else { 
                                    stack0 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
//                        stack1 = false;// JIT: redundant assigment, value unused
                        // 7 0::visible
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.visible = false;
                        } else {
                            context.setproperty($names[12], false, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::levelCollisions
                        //Possible type:7 0:levels::GenericScript
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack0 = this.$BglevelCollisions;
//                        stack1 = local5;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.push(local5);
                        } else {
                            // 7 0:http://adobe.com/AS3/2006/builtin::push
                            {
                                let t = stack0;
                                const m = t.$Bgpush || (t = sec.box(stack0), t.$Bgpush);
                                if( typeof m === "function" ) { 
                                    m.call(t, local5);
                                } else { 
                                   stack0.axCallProperty($names[11], [local5], false);
                                }
                            }
                        }
                        { p = 7023; continue; };
                    case 2112:
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack0 = local1;
//                        stack1 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack0 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BggetChildAt (local3);
                                } else { 
                                    stack0 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::TutorialSprite4
                        temp = scope0.findScopeProperty($names[41], true, false);
                        stack1 = temp.$BgTutorialSprite4;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[41]);
                        }
                        stack0 = stack1.axIsType(stack0);
                        if (!stack0) { p = 2184; continue; };
                        // 7 0:levels::GenericScript
                        stack0 = scope0.findScopeProperty($names[6], true, false);
//                        stack1 = 6;// JIT: redundant assigment, value unused
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack2 = local1;
//                        stack3 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack2 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack2 = t.$BggetChildAt (local3);
                                } else { 
                                    stack2 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::x
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['x'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$Bgx;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[7]);
                            }
                        }
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack3 = local1;
//                        stack4 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack3 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack3 = t.$BggetChildAt (local3);
                                } else { 
                                    stack3 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::y
                        if (!(stack3 != undefined && stack3[AX_CLASS_SYMBOL])) {
                            stack3 = stack3['y'];
                        } else {
                            temp = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);
                            stack3 = temp.$Bgy;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[8]);
                            }
                        }
//                        stack4 = 3;// JIT: redundant assigment, value unused
                        //JIT: Support fast construct:GenericScript/Object
                        stack0 = context.constructFast(stack0, [6, stack2, stack3, 3], $names[6]);
                        //IR: Drop coerce, reason: redundant
                        local5 = stack0;
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack0 = local1;
//                        stack1 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack0 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BggetChildAt (local3);
                                } else { 
                                    stack0 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
//                        stack1 = false;// JIT: redundant assigment, value unused
                        // 7 0::visible
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.visible = false;
                        } else {
                            context.setproperty($names[12], false, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::levelCollisions
                        //Possible type:7 0:levels::GenericScript
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack0 = this.$BglevelCollisions;
//                        stack1 = local5;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.push(local5);
                        } else {
                            // 7 0:http://adobe.com/AS3/2006/builtin::push
                            {
                                let t = stack0;
                                const m = t.$Bgpush || (t = sec.box(stack0), t.$Bgpush);
                                if( typeof m === "function" ) { 
                                    m.call(t, local5);
                                } else { 
                                   stack0.axCallProperty($names[11], [local5], false);
                                }
                            }
                        }
                        { p = 7023; continue; };
                    case 2184:
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack0 = local1;
//                        stack1 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack0 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BggetChildAt (local3);
                                } else { 
                                    stack0 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::TutorialSprite5
                        temp = scope0.findScopeProperty($names[42], true, false);
                        stack1 = temp.$BgTutorialSprite5;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[42]);
                        }
                        stack0 = stack1.axIsType(stack0);
                        if (!stack0) { p = 2256; continue; };
                        // 7 0:levels::GenericScript
                        stack0 = scope0.findScopeProperty($names[6], true, false);
//                        stack1 = 6;// JIT: redundant assigment, value unused
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack2 = local1;
//                        stack3 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack2 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack2 = t.$BggetChildAt (local3);
                                } else { 
                                    stack2 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::x
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['x'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$Bgx;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[7]);
                            }
                        }
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack3 = local1;
//                        stack4 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack3 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack3 = t.$BggetChildAt (local3);
                                } else { 
                                    stack3 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::y
                        if (!(stack3 != undefined && stack3[AX_CLASS_SYMBOL])) {
                            stack3 = stack3['y'];
                        } else {
                            temp = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);
                            stack3 = temp.$Bgy;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[8]);
                            }
                        }
//                        stack4 = 4;// JIT: redundant assigment, value unused
                        //JIT: Support fast construct:GenericScript/Object
                        stack0 = context.constructFast(stack0, [6, stack2, stack3, 4], $names[6]);
                        //IR: Drop coerce, reason: redundant
                        local5 = stack0;
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack0 = local1;
//                        stack1 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack0 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BggetChildAt (local3);
                                } else { 
                                    stack0 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
//                        stack1 = false;// JIT: redundant assigment, value unused
                        // 7 0::visible
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.visible = false;
                        } else {
                            context.setproperty($names[12], false, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::levelCollisions
                        //Possible type:7 0:levels::GenericScript
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack0 = this.$BglevelCollisions;
//                        stack1 = local5;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.push(local5);
                        } else {
                            // 7 0:http://adobe.com/AS3/2006/builtin::push
                            {
                                let t = stack0;
                                const m = t.$Bgpush || (t = sec.box(stack0), t.$Bgpush);
                                if( typeof m === "function" ) { 
                                    m.call(t, local5);
                                } else { 
                                   stack0.axCallProperty($names[11], [local5], false);
                                }
                            }
                        }
                        { p = 7023; continue; };
                    case 2256:
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack0 = local1;
//                        stack1 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack0 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BggetChildAt (local3);
                                } else { 
                                    stack0 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::TutorialSprite6
                        temp = scope0.findScopeProperty($names[43], true, false);
                        stack1 = temp.$BgTutorialSprite6;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[43]);
                        }
                        stack0 = stack1.axIsType(stack0);
                        if (!stack0) { p = 2328; continue; };
                        // 7 0:levels::GenericScript
                        stack0 = scope0.findScopeProperty($names[6], true, false);
//                        stack1 = 6;// JIT: redundant assigment, value unused
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack2 = local1;
//                        stack3 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack2 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack2 = t.$BggetChildAt (local3);
                                } else { 
                                    stack2 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::x
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['x'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$Bgx;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[7]);
                            }
                        }
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack3 = local1;
//                        stack4 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack3 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack3 = t.$BggetChildAt (local3);
                                } else { 
                                    stack3 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::y
                        if (!(stack3 != undefined && stack3[AX_CLASS_SYMBOL])) {
                            stack3 = stack3['y'];
                        } else {
                            temp = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);
                            stack3 = temp.$Bgy;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[8]);
                            }
                        }
//                        stack4 = 5;// JIT: redundant assigment, value unused
                        //JIT: Support fast construct:GenericScript/Object
                        stack0 = context.constructFast(stack0, [6, stack2, stack3, 5], $names[6]);
                        //IR: Drop coerce, reason: redundant
                        local5 = stack0;
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack0 = local1;
//                        stack1 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack0 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BggetChildAt (local3);
                                } else { 
                                    stack0 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
//                        stack1 = false;// JIT: redundant assigment, value unused
                        // 7 0::visible
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.visible = false;
                        } else {
                            context.setproperty($names[12], false, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::levelCollisions
                        //Possible type:7 0:levels::GenericScript
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack0 = this.$BglevelCollisions;
//                        stack1 = local5;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.push(local5);
                        } else {
                            // 7 0:http://adobe.com/AS3/2006/builtin::push
                            {
                                let t = stack0;
                                const m = t.$Bgpush || (t = sec.box(stack0), t.$Bgpush);
                                if( typeof m === "function" ) { 
                                    m.call(t, local5);
                                } else { 
                                   stack0.axCallProperty($names[11], [local5], false);
                                }
                            }
                        }
                        { p = 7023; continue; };
                    case 2328:
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack0 = local1;
//                        stack1 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack0 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BggetChildAt (local3);
                                } else { 
                                    stack0 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::TutorialSprite7
                        temp = scope0.findScopeProperty($names[44], true, false);
                        stack1 = temp.$BgTutorialSprite7;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[44]);
                        }
                        stack0 = stack1.axIsType(stack0);
                        if (!stack0) { p = 2400; continue; };
                        // 7 0:levels::GenericScript
                        stack0 = scope0.findScopeProperty($names[6], true, false);
//                        stack1 = 6;// JIT: redundant assigment, value unused
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack2 = local1;
//                        stack3 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack2 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack2 = t.$BggetChildAt (local3);
                                } else { 
                                    stack2 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::x
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['x'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$Bgx;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[7]);
                            }
                        }
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack3 = local1;
//                        stack4 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack3 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack3 = t.$BggetChildAt (local3);
                                } else { 
                                    stack3 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::y
                        if (!(stack3 != undefined && stack3[AX_CLASS_SYMBOL])) {
                            stack3 = stack3['y'];
                        } else {
                            temp = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);
                            stack3 = temp.$Bgy;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[8]);
                            }
                        }
//                        stack4 = 6;// JIT: redundant assigment, value unused
                        //JIT: Support fast construct:GenericScript/Object
                        stack0 = context.constructFast(stack0, [6, stack2, stack3, 6], $names[6]);
                        //IR: Drop coerce, reason: redundant
                        local5 = stack0;
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack0 = local1;
//                        stack1 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack0 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BggetChildAt (local3);
                                } else { 
                                    stack0 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
//                        stack1 = false;// JIT: redundant assigment, value unused
                        // 7 0::visible
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.visible = false;
                        } else {
                            context.setproperty($names[12], false, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::levelCollisions
                        //Possible type:7 0:levels::GenericScript
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack0 = this.$BglevelCollisions;
//                        stack1 = local5;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.push(local5);
                        } else {
                            // 7 0:http://adobe.com/AS3/2006/builtin::push
                            {
                                let t = stack0;
                                const m = t.$Bgpush || (t = sec.box(stack0), t.$Bgpush);
                                if( typeof m === "function" ) { 
                                    m.call(t, local5);
                                } else { 
                                   stack0.axCallProperty($names[11], [local5], false);
                                }
                            }
                        }
                        { p = 7023; continue; };
                    case 2400:
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack0 = local1;
//                        stack1 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack0 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BggetChildAt (local3);
                                } else { 
                                    stack0 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::TutorialSprite8
                        temp = scope0.findScopeProperty($names[45], true, false);
                        stack1 = temp.$BgTutorialSprite8;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[45]);
                        }
                        stack0 = stack1.axIsType(stack0);
                        if (!stack0) { p = 2472; continue; };
                        // 7 0:levels::GenericScript
                        stack0 = scope0.findScopeProperty($names[6], true, false);
//                        stack1 = 6;// JIT: redundant assigment, value unused
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack2 = local1;
//                        stack3 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack2 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack2 = t.$BggetChildAt (local3);
                                } else { 
                                    stack2 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::x
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['x'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$Bgx;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[7]);
                            }
                        }
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack3 = local1;
//                        stack4 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack3 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack3 = t.$BggetChildAt (local3);
                                } else { 
                                    stack3 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::y
                        if (!(stack3 != undefined && stack3[AX_CLASS_SYMBOL])) {
                            stack3 = stack3['y'];
                        } else {
                            temp = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);
                            stack3 = temp.$Bgy;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[8]);
                            }
                        }
//                        stack4 = 7;// JIT: redundant assigment, value unused
                        //JIT: Support fast construct:GenericScript/Object
                        stack0 = context.constructFast(stack0, [6, stack2, stack3, 7], $names[6]);
                        //IR: Drop coerce, reason: redundant
                        local5 = stack0;
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack0 = local1;
//                        stack1 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack0 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BggetChildAt (local3);
                                } else { 
                                    stack0 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
//                        stack1 = false;// JIT: redundant assigment, value unused
                        // 7 0::visible
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.visible = false;
                        } else {
                            context.setproperty($names[12], false, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::levelCollisions
                        //Possible type:7 0:levels::GenericScript
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack0 = this.$BglevelCollisions;
//                        stack1 = local5;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.push(local5);
                        } else {
                            // 7 0:http://adobe.com/AS3/2006/builtin::push
                            {
                                let t = stack0;
                                const m = t.$Bgpush || (t = sec.box(stack0), t.$Bgpush);
                                if( typeof m === "function" ) { 
                                    m.call(t, local5);
                                } else { 
                                   stack0.axCallProperty($names[11], [local5], false);
                                }
                            }
                        }
                        { p = 7023; continue; };
                    case 2472:
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack0 = local1;
//                        stack1 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack0 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BggetChildAt (local3);
                                } else { 
                                    stack0 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::TutorialSprite9
                        temp = scope0.findScopeProperty($names[46], true, false);
                        stack1 = temp.$BgTutorialSprite9;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[46]);
                        }
                        stack0 = stack1.axIsType(stack0);
                        if (!stack0) { p = 2544; continue; };
                        // 7 0:levels::GenericScript
                        stack0 = scope0.findScopeProperty($names[6], true, false);
//                        stack1 = 6;// JIT: redundant assigment, value unused
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack2 = local1;
//                        stack3 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack2 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack2 = t.$BggetChildAt (local3);
                                } else { 
                                    stack2 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::x
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['x'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$Bgx;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[7]);
                            }
                        }
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack3 = local1;
//                        stack4 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack3 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack3 = t.$BggetChildAt (local3);
                                } else { 
                                    stack3 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::y
                        if (!(stack3 != undefined && stack3[AX_CLASS_SYMBOL])) {
                            stack3 = stack3['y'];
                        } else {
                            temp = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);
                            stack3 = temp.$Bgy;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[8]);
                            }
                        }
//                        stack4 = 8;// JIT: redundant assigment, value unused
                        //JIT: Support fast construct:GenericScript/Object
                        stack0 = context.constructFast(stack0, [6, stack2, stack3, 8], $names[6]);
                        //IR: Drop coerce, reason: redundant
                        local5 = stack0;
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack0 = local1;
//                        stack1 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack0 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BggetChildAt (local3);
                                } else { 
                                    stack0 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
//                        stack1 = false;// JIT: redundant assigment, value unused
                        // 7 0::visible
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.visible = false;
                        } else {
                            context.setproperty($names[12], false, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::levelCollisions
                        //Possible type:7 0:levels::GenericScript
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack0 = this.$BglevelCollisions;
//                        stack1 = local5;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.push(local5);
                        } else {
                            // 7 0:http://adobe.com/AS3/2006/builtin::push
                            {
                                let t = stack0;
                                const m = t.$Bgpush || (t = sec.box(stack0), t.$Bgpush);
                                if( typeof m === "function" ) { 
                                    m.call(t, local5);
                                } else { 
                                   stack0.axCallProperty($names[11], [local5], false);
                                }
                            }
                        }
                        { p = 7023; continue; };
                    case 2544:
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack0 = local1;
//                        stack1 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack0 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BggetChildAt (local3);
                                } else { 
                                    stack0 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::TutorialSprite10
                        temp = scope0.findScopeProperty($names[47], true, false);
                        stack1 = temp.$BgTutorialSprite10;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[47]);
                        }
                        stack0 = stack1.axIsType(stack0);
                        if (!stack0) { p = 2616; continue; };
                        // 7 0:levels::GenericScript
                        stack0 = scope0.findScopeProperty($names[6], true, false);
//                        stack1 = 6;// JIT: redundant assigment, value unused
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack2 = local1;
//                        stack3 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack2 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack2 = t.$BggetChildAt (local3);
                                } else { 
                                    stack2 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::x
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['x'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$Bgx;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[7]);
                            }
                        }
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack3 = local1;
//                        stack4 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack3 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack3 = t.$BggetChildAt (local3);
                                } else { 
                                    stack3 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::y
                        if (!(stack3 != undefined && stack3[AX_CLASS_SYMBOL])) {
                            stack3 = stack3['y'];
                        } else {
                            temp = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);
                            stack3 = temp.$Bgy;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[8]);
                            }
                        }
//                        stack4 = 9;// JIT: redundant assigment, value unused
                        //JIT: Support fast construct:GenericScript/Object
                        stack0 = context.constructFast(stack0, [6, stack2, stack3, 9], $names[6]);
                        //IR: Drop coerce, reason: redundant
                        local5 = stack0;
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack0 = local1;
//                        stack1 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack0 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BggetChildAt (local3);
                                } else { 
                                    stack0 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
//                        stack1 = false;// JIT: redundant assigment, value unused
                        // 7 0::visible
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.visible = false;
                        } else {
                            context.setproperty($names[12], false, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::levelCollisions
                        //Possible type:7 0:levels::GenericScript
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack0 = this.$BglevelCollisions;
//                        stack1 = local5;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.push(local5);
                        } else {
                            // 7 0:http://adobe.com/AS3/2006/builtin::push
                            {
                                let t = stack0;
                                const m = t.$Bgpush || (t = sec.box(stack0), t.$Bgpush);
                                if( typeof m === "function" ) { 
                                    m.call(t, local5);
                                } else { 
                                   stack0.axCallProperty($names[11], [local5], false);
                                }
                            }
                        }
                        { p = 7023; continue; };
                    case 2616:
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack0 = local1;
//                        stack1 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack0 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BggetChildAt (local3);
                                } else { 
                                    stack0 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::TutorialSprite11
                        temp = scope0.findScopeProperty($names[48], true, false);
                        stack1 = temp.$BgTutorialSprite11;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[48]);
                        }
                        stack0 = stack1.axIsType(stack0);
                        if (!stack0) { p = 2688; continue; };
                        // 7 0:levels::GenericScript
                        stack0 = scope0.findScopeProperty($names[6], true, false);
//                        stack1 = 6;// JIT: redundant assigment, value unused
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack2 = local1;
//                        stack3 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack2 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack2 = t.$BggetChildAt (local3);
                                } else { 
                                    stack2 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::x
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['x'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$Bgx;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[7]);
                            }
                        }
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack3 = local1;
//                        stack4 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack3 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack3 = t.$BggetChildAt (local3);
                                } else { 
                                    stack3 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::y
                        if (!(stack3 != undefined && stack3[AX_CLASS_SYMBOL])) {
                            stack3 = stack3['y'];
                        } else {
                            temp = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);
                            stack3 = temp.$Bgy;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[8]);
                            }
                        }
//                        stack4 = 10;// JIT: redundant assigment, value unused
                        //JIT: Support fast construct:GenericScript/Object
                        stack0 = context.constructFast(stack0, [6, stack2, stack3, 10], $names[6]);
                        //IR: Drop coerce, reason: redundant
                        local5 = stack0;
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack0 = local1;
//                        stack1 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack0 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BggetChildAt (local3);
                                } else { 
                                    stack0 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
//                        stack1 = false;// JIT: redundant assigment, value unused
                        // 7 0::visible
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.visible = false;
                        } else {
                            context.setproperty($names[12], false, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::levelCollisions
                        //Possible type:7 0:levels::GenericScript
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack0 = this.$BglevelCollisions;
//                        stack1 = local5;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.push(local5);
                        } else {
                            // 7 0:http://adobe.com/AS3/2006/builtin::push
                            {
                                let t = stack0;
                                const m = t.$Bgpush || (t = sec.box(stack0), t.$Bgpush);
                                if( typeof m === "function" ) { 
                                    m.call(t, local5);
                                } else { 
                                   stack0.axCallProperty($names[11], [local5], false);
                                }
                            }
                        }
                        { p = 7023; continue; };
                    case 2688:
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack0 = local1;
//                        stack1 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack0 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BggetChildAt (local3);
                                } else { 
                                    stack0 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::TutorialSprite12
                        temp = scope0.findScopeProperty($names[49], true, false);
                        stack1 = temp.$BgTutorialSprite12;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[49]);
                        }
                        stack0 = stack1.axIsType(stack0);
                        if (!stack0) { p = 2760; continue; };
                        // 7 0:levels::GenericScript
                        stack0 = scope0.findScopeProperty($names[6], true, false);
//                        stack1 = 6;// JIT: redundant assigment, value unused
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack2 = local1;
//                        stack3 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack2 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack2 = t.$BggetChildAt (local3);
                                } else { 
                                    stack2 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::x
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['x'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$Bgx;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[7]);
                            }
                        }
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack3 = local1;
//                        stack4 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack3 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack3 = t.$BggetChildAt (local3);
                                } else { 
                                    stack3 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::y
                        if (!(stack3 != undefined && stack3[AX_CLASS_SYMBOL])) {
                            stack3 = stack3['y'];
                        } else {
                            temp = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);
                            stack3 = temp.$Bgy;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[8]);
                            }
                        }
//                        stack4 = 11;// JIT: redundant assigment, value unused
                        //JIT: Support fast construct:GenericScript/Object
                        stack0 = context.constructFast(stack0, [6, stack2, stack3, 11], $names[6]);
                        //IR: Drop coerce, reason: redundant
                        local5 = stack0;
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack0 = local1;
//                        stack1 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack0 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BggetChildAt (local3);
                                } else { 
                                    stack0 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
//                        stack1 = false;// JIT: redundant assigment, value unused
                        // 7 0::visible
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.visible = false;
                        } else {
                            context.setproperty($names[12], false, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::levelCollisions
                        //Possible type:7 0:levels::GenericScript
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack0 = this.$BglevelCollisions;
//                        stack1 = local5;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.push(local5);
                        } else {
                            // 7 0:http://adobe.com/AS3/2006/builtin::push
                            {
                                let t = stack0;
                                const m = t.$Bgpush || (t = sec.box(stack0), t.$Bgpush);
                                if( typeof m === "function" ) { 
                                    m.call(t, local5);
                                } else { 
                                   stack0.axCallProperty($names[11], [local5], false);
                                }
                            }
                        }
                        { p = 7023; continue; };
                    case 2760:
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack0 = local1;
//                        stack1 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack0 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BggetChildAt (local3);
                                } else { 
                                    stack0 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::TutorialSprite13
                        temp = scope0.findScopeProperty($names[50], true, false);
                        stack1 = temp.$BgTutorialSprite13;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[50]);
                        }
                        stack0 = stack1.axIsType(stack0);
                        if (!stack0) { p = 2832; continue; };
                        // 7 0:levels::GenericScript
                        stack0 = scope0.findScopeProperty($names[6], true, false);
//                        stack1 = 6;// JIT: redundant assigment, value unused
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack2 = local1;
//                        stack3 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack2 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack2 = t.$BggetChildAt (local3);
                                } else { 
                                    stack2 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::x
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['x'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$Bgx;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[7]);
                            }
                        }
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack3 = local1;
//                        stack4 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack3 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack3 = t.$BggetChildAt (local3);
                                } else { 
                                    stack3 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::y
                        if (!(stack3 != undefined && stack3[AX_CLASS_SYMBOL])) {
                            stack3 = stack3['y'];
                        } else {
                            temp = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);
                            stack3 = temp.$Bgy;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[8]);
                            }
                        }
//                        stack4 = 12;// JIT: redundant assigment, value unused
                        //JIT: Support fast construct:GenericScript/Object
                        stack0 = context.constructFast(stack0, [6, stack2, stack3, 12], $names[6]);
                        //IR: Drop coerce, reason: redundant
                        local5 = stack0;
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack0 = local1;
//                        stack1 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack0 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BggetChildAt (local3);
                                } else { 
                                    stack0 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
//                        stack1 = false;// JIT: redundant assigment, value unused
                        // 7 0::visible
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.visible = false;
                        } else {
                            context.setproperty($names[12], false, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::levelCollisions
                        //Possible type:7 0:levels::GenericScript
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack0 = this.$BglevelCollisions;
//                        stack1 = local5;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.push(local5);
                        } else {
                            // 7 0:http://adobe.com/AS3/2006/builtin::push
                            {
                                let t = stack0;
                                const m = t.$Bgpush || (t = sec.box(stack0), t.$Bgpush);
                                if( typeof m === "function" ) { 
                                    m.call(t, local5);
                                } else { 
                                   stack0.axCallProperty($names[11], [local5], false);
                                }
                            }
                        }
                        { p = 7023; continue; };
                    case 2832:
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack0 = local1;
//                        stack1 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack0 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BggetChildAt (local3);
                                } else { 
                                    stack0 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::TutorialSprite14
                        temp = scope0.findScopeProperty($names[51], true, false);
                        stack1 = temp.$BgTutorialSprite14;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[51]);
                        }
                        stack0 = stack1.axIsType(stack0);
                        if (!stack0) { p = 2904; continue; };
                        // 7 0:levels::GenericScript
                        stack0 = scope0.findScopeProperty($names[6], true, false);
//                        stack1 = 6;// JIT: redundant assigment, value unused
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack2 = local1;
//                        stack3 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack2 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack2 = t.$BggetChildAt (local3);
                                } else { 
                                    stack2 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::x
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['x'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$Bgx;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[7]);
                            }
                        }
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack3 = local1;
//                        stack4 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack3 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack3 = t.$BggetChildAt (local3);
                                } else { 
                                    stack3 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::y
                        if (!(stack3 != undefined && stack3[AX_CLASS_SYMBOL])) {
                            stack3 = stack3['y'];
                        } else {
                            temp = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);
                            stack3 = temp.$Bgy;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[8]);
                            }
                        }
//                        stack4 = 13;// JIT: redundant assigment, value unused
                        //JIT: Support fast construct:GenericScript/Object
                        stack0 = context.constructFast(stack0, [6, stack2, stack3, 13], $names[6]);
                        //IR: Drop coerce, reason: redundant
                        local5 = stack0;
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack0 = local1;
//                        stack1 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack0 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BggetChildAt (local3);
                                } else { 
                                    stack0 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
//                        stack1 = false;// JIT: redundant assigment, value unused
                        // 7 0::visible
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.visible = false;
                        } else {
                            context.setproperty($names[12], false, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::levelCollisions
                        //Possible type:7 0:levels::GenericScript
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack0 = this.$BglevelCollisions;
//                        stack1 = local5;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.push(local5);
                        } else {
                            // 7 0:http://adobe.com/AS3/2006/builtin::push
                            {
                                let t = stack0;
                                const m = t.$Bgpush || (t = sec.box(stack0), t.$Bgpush);
                                if( typeof m === "function" ) { 
                                    m.call(t, local5);
                                } else { 
                                   stack0.axCallProperty($names[11], [local5], false);
                                }
                            }
                        }
                        { p = 7023; continue; };
                    case 2904:
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack0 = local1;
//                        stack1 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack0 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BggetChildAt (local3);
                                } else { 
                                    stack0 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::TutorialSprite15
                        temp = scope0.findScopeProperty($names[52], true, false);
                        stack1 = temp.$BgTutorialSprite15;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[52]);
                        }
                        stack0 = stack1.axIsType(stack0);
                        if (!stack0) { p = 2976; continue; };
                        // 7 0:levels::GenericScript
                        stack0 = scope0.findScopeProperty($names[6], true, false);
//                        stack1 = 6;// JIT: redundant assigment, value unused
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack2 = local1;
//                        stack3 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack2 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack2 = t.$BggetChildAt (local3);
                                } else { 
                                    stack2 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::x
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['x'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$Bgx;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[7]);
                            }
                        }
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack3 = local1;
//                        stack4 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack3 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack3 = t.$BggetChildAt (local3);
                                } else { 
                                    stack3 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::y
                        if (!(stack3 != undefined && stack3[AX_CLASS_SYMBOL])) {
                            stack3 = stack3['y'];
                        } else {
                            temp = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);
                            stack3 = temp.$Bgy;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[8]);
                            }
                        }
//                        stack4 = 14;// JIT: redundant assigment, value unused
                        //JIT: Support fast construct:GenericScript/Object
                        stack0 = context.constructFast(stack0, [6, stack2, stack3, 14], $names[6]);
                        //IR: Drop coerce, reason: redundant
                        local5 = stack0;
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack0 = local1;
//                        stack1 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack0 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BggetChildAt (local3);
                                } else { 
                                    stack0 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
//                        stack1 = false;// JIT: redundant assigment, value unused
                        // 7 0::visible
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.visible = false;
                        } else {
                            context.setproperty($names[12], false, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::levelCollisions
                        //Possible type:7 0:levels::GenericScript
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack0 = this.$BglevelCollisions;
//                        stack1 = local5;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.push(local5);
                        } else {
                            // 7 0:http://adobe.com/AS3/2006/builtin::push
                            {
                                let t = stack0;
                                const m = t.$Bgpush || (t = sec.box(stack0), t.$Bgpush);
                                if( typeof m === "function" ) { 
                                    m.call(t, local5);
                                } else { 
                                   stack0.axCallProperty($names[11], [local5], false);
                                }
                            }
                        }
                        { p = 7023; continue; };
                    case 2976:
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack0 = local1;
//                        stack1 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack0 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BggetChildAt (local3);
                                } else { 
                                    stack0 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::TutorialSprite16
                        temp = scope0.findScopeProperty($names[53], true, false);
                        stack1 = temp.$BgTutorialSprite16;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[53]);
                        }
                        stack0 = stack1.axIsType(stack0);
                        if (!stack0) { p = 3048; continue; };
                        // 7 0:levels::GenericScript
                        stack0 = scope0.findScopeProperty($names[6], true, false);
//                        stack1 = 6;// JIT: redundant assigment, value unused
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack2 = local1;
//                        stack3 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack2 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack2 = t.$BggetChildAt (local3);
                                } else { 
                                    stack2 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::x
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['x'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$Bgx;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[7]);
                            }
                        }
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack3 = local1;
//                        stack4 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack3 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack3 = t.$BggetChildAt (local3);
                                } else { 
                                    stack3 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::y
                        if (!(stack3 != undefined && stack3[AX_CLASS_SYMBOL])) {
                            stack3 = stack3['y'];
                        } else {
                            temp = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);
                            stack3 = temp.$Bgy;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[8]);
                            }
                        }
//                        stack4 = 15;// JIT: redundant assigment, value unused
                        //JIT: Support fast construct:GenericScript/Object
                        stack0 = context.constructFast(stack0, [6, stack2, stack3, 15], $names[6]);
                        //IR: Drop coerce, reason: redundant
                        local5 = stack0;
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack0 = local1;
//                        stack1 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack0 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BggetChildAt (local3);
                                } else { 
                                    stack0 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
//                        stack1 = false;// JIT: redundant assigment, value unused
                        // 7 0::visible
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.visible = false;
                        } else {
                            context.setproperty($names[12], false, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::levelCollisions
                        //Possible type:7 0:levels::GenericScript
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack0 = this.$BglevelCollisions;
//                        stack1 = local5;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.push(local5);
                        } else {
                            // 7 0:http://adobe.com/AS3/2006/builtin::push
                            {
                                let t = stack0;
                                const m = t.$Bgpush || (t = sec.box(stack0), t.$Bgpush);
                                if( typeof m === "function" ) { 
                                    m.call(t, local5);
                                } else { 
                                   stack0.axCallProperty($names[11], [local5], false);
                                }
                            }
                        }
                        { p = 7023; continue; };
                    case 3048:
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack0 = local1;
//                        stack1 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack0 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BggetChildAt (local3);
                                } else { 
                                    stack0 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::TutorialSprite17
                        temp = scope0.findScopeProperty($names[54], true, false);
                        stack1 = temp.$BgTutorialSprite17;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[54]);
                        }
                        stack0 = stack1.axIsType(stack0);
                        if (!stack0) { p = 3120; continue; };
                        // 7 0:levels::GenericScript
                        stack0 = scope0.findScopeProperty($names[6], true, false);
//                        stack1 = 6;// JIT: redundant assigment, value unused
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack2 = local1;
//                        stack3 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack2 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack2 = t.$BggetChildAt (local3);
                                } else { 
                                    stack2 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::x
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['x'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$Bgx;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[7]);
                            }
                        }
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack3 = local1;
//                        stack4 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack3 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack3 = t.$BggetChildAt (local3);
                                } else { 
                                    stack3 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::y
                        if (!(stack3 != undefined && stack3[AX_CLASS_SYMBOL])) {
                            stack3 = stack3['y'];
                        } else {
                            temp = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);
                            stack3 = temp.$Bgy;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[8]);
                            }
                        }
//                        stack4 = 16;// JIT: redundant assigment, value unused
                        //JIT: Support fast construct:GenericScript/Object
                        stack0 = context.constructFast(stack0, [6, stack2, stack3, 16], $names[6]);
                        //IR: Drop coerce, reason: redundant
                        local5 = stack0;
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack0 = local1;
//                        stack1 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack0 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BggetChildAt (local3);
                                } else { 
                                    stack0 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
//                        stack1 = false;// JIT: redundant assigment, value unused
                        // 7 0::visible
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.visible = false;
                        } else {
                            context.setproperty($names[12], false, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::levelCollisions
                        //Possible type:7 0:levels::GenericScript
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack0 = this.$BglevelCollisions;
//                        stack1 = local5;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.push(local5);
                        } else {
                            // 7 0:http://adobe.com/AS3/2006/builtin::push
                            {
                                let t = stack0;
                                const m = t.$Bgpush || (t = sec.box(stack0), t.$Bgpush);
                                if( typeof m === "function" ) { 
                                    m.call(t, local5);
                                } else { 
                                   stack0.axCallProperty($names[11], [local5], false);
                                }
                            }
                        }
                        { p = 7023; continue; };
                    case 3120:
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack0 = local1;
//                        stack1 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack0 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BggetChildAt (local3);
                                } else { 
                                    stack0 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::TutorialSprite18
                        temp = scope0.findScopeProperty($names[55], true, false);
                        stack1 = temp.$BgTutorialSprite18;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[55]);
                        }
                        stack0 = stack1.axIsType(stack0);
                        if (!stack0) { p = 3192; continue; };
                        // 7 0:levels::GenericScript
                        stack0 = scope0.findScopeProperty($names[6], true, false);
//                        stack1 = 6;// JIT: redundant assigment, value unused
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack2 = local1;
//                        stack3 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack2 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack2 = t.$BggetChildAt (local3);
                                } else { 
                                    stack2 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::x
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['x'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$Bgx;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[7]);
                            }
                        }
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack3 = local1;
//                        stack4 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack3 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack3 = t.$BggetChildAt (local3);
                                } else { 
                                    stack3 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::y
                        if (!(stack3 != undefined && stack3[AX_CLASS_SYMBOL])) {
                            stack3 = stack3['y'];
                        } else {
                            temp = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);
                            stack3 = temp.$Bgy;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[8]);
                            }
                        }
//                        stack4 = 23;// JIT: redundant assigment, value unused
                        //JIT: Support fast construct:GenericScript/Object
                        stack0 = context.constructFast(stack0, [6, stack2, stack3, 23], $names[6]);
                        //IR: Drop coerce, reason: redundant
                        local5 = stack0;
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack0 = local1;
//                        stack1 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack0 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BggetChildAt (local3);
                                } else { 
                                    stack0 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
//                        stack1 = false;// JIT: redundant assigment, value unused
                        // 7 0::visible
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.visible = false;
                        } else {
                            context.setproperty($names[12], false, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::levelCollisions
                        //Possible type:7 0:levels::GenericScript
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack0 = this.$BglevelCollisions;
//                        stack1 = local5;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.push(local5);
                        } else {
                            // 7 0:http://adobe.com/AS3/2006/builtin::push
                            {
                                let t = stack0;
                                const m = t.$Bgpush || (t = sec.box(stack0), t.$Bgpush);
                                if( typeof m === "function" ) { 
                                    m.call(t, local5);
                                } else { 
                                   stack0.axCallProperty($names[11], [local5], false);
                                }
                            }
                        }
                        { p = 7023; continue; };
                    case 3192:
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack0 = local1;
//                        stack1 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack0 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BggetChildAt (local3);
                                } else { 
                                    stack0 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::TutorialSprite19
                        temp = scope0.findScopeProperty($names[56], true, false);
                        stack1 = temp.$BgTutorialSprite19;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[56]);
                        }
                        stack0 = stack1.axIsType(stack0);
                        if (!stack0) { p = 3264; continue; };
                        // 7 0:levels::GenericScript
                        stack0 = scope0.findScopeProperty($names[6], true, false);
//                        stack1 = 6;// JIT: redundant assigment, value unused
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack2 = local1;
//                        stack3 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack2 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack2 = t.$BggetChildAt (local3);
                                } else { 
                                    stack2 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::x
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['x'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$Bgx;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[7]);
                            }
                        }
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack3 = local1;
//                        stack4 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack3 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack3 = t.$BggetChildAt (local3);
                                } else { 
                                    stack3 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::y
                        if (!(stack3 != undefined && stack3[AX_CLASS_SYMBOL])) {
                            stack3 = stack3['y'];
                        } else {
                            temp = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);
                            stack3 = temp.$Bgy;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[8]);
                            }
                        }
//                        stack4 = 23;// JIT: redundant assigment, value unused
                        //JIT: Support fast construct:GenericScript/Object
                        stack0 = context.constructFast(stack0, [6, stack2, stack3, 23], $names[6]);
                        //IR: Drop coerce, reason: redundant
                        local5 = stack0;
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack0 = local1;
//                        stack1 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack0 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BggetChildAt (local3);
                                } else { 
                                    stack0 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
//                        stack1 = false;// JIT: redundant assigment, value unused
                        // 7 0::visible
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.visible = false;
                        } else {
                            context.setproperty($names[12], false, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::levelCollisions
                        //Possible type:7 0:levels::GenericScript
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack0 = this.$BglevelCollisions;
//                        stack1 = local5;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.push(local5);
                        } else {
                            // 7 0:http://adobe.com/AS3/2006/builtin::push
                            {
                                let t = stack0;
                                const m = t.$Bgpush || (t = sec.box(stack0), t.$Bgpush);
                                if( typeof m === "function" ) { 
                                    m.call(t, local5);
                                } else { 
                                   stack0.axCallProperty($names[11], [local5], false);
                                }
                            }
                        }
                        { p = 7023; continue; };
                    case 3264:
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack0 = local1;
//                        stack1 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack0 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BggetChildAt (local3);
                                } else { 
                                    stack0 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::TutorialSprite20
                        temp = scope0.findScopeProperty($names[57], true, false);
                        stack1 = temp.$BgTutorialSprite20;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[57]);
                        }
                        stack0 = stack1.axIsType(stack0);
                        if (!stack0) { p = 3336; continue; };
                        // 7 0:levels::GenericScript
                        stack0 = scope0.findScopeProperty($names[6], true, false);
//                        stack1 = 6;// JIT: redundant assigment, value unused
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack2 = local1;
//                        stack3 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack2 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack2 = t.$BggetChildAt (local3);
                                } else { 
                                    stack2 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::x
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['x'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$Bgx;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[7]);
                            }
                        }
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack3 = local1;
//                        stack4 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack3 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack3 = t.$BggetChildAt (local3);
                                } else { 
                                    stack3 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::y
                        if (!(stack3 != undefined && stack3[AX_CLASS_SYMBOL])) {
                            stack3 = stack3['y'];
                        } else {
                            temp = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);
                            stack3 = temp.$Bgy;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[8]);
                            }
                        }
//                        stack4 = 24;// JIT: redundant assigment, value unused
                        //JIT: Support fast construct:GenericScript/Object
                        stack0 = context.constructFast(stack0, [6, stack2, stack3, 24], $names[6]);
                        //IR: Drop coerce, reason: redundant
                        local5 = stack0;
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack0 = local1;
//                        stack1 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack0 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BggetChildAt (local3);
                                } else { 
                                    stack0 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
//                        stack1 = false;// JIT: redundant assigment, value unused
                        // 7 0::visible
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.visible = false;
                        } else {
                            context.setproperty($names[12], false, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::levelCollisions
                        //Possible type:7 0:levels::GenericScript
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack0 = this.$BglevelCollisions;
//                        stack1 = local5;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.push(local5);
                        } else {
                            // 7 0:http://adobe.com/AS3/2006/builtin::push
                            {
                                let t = stack0;
                                const m = t.$Bgpush || (t = sec.box(stack0), t.$Bgpush);
                                if( typeof m === "function" ) { 
                                    m.call(t, local5);
                                } else { 
                                   stack0.axCallProperty($names[11], [local5], false);
                                }
                            }
                        }
                        { p = 7023; continue; };
                    case 3336:
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack0 = local1;
//                        stack1 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack0 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BggetChildAt (local3);
                                } else { 
                                    stack0 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::SpinningSquareTile
                        temp = scope0.findScopeProperty($names[58], true, false);
                        stack1 = temp.$BgSpinningSquareTile;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[58]);
                        }
                        stack0 = stack1.axIsType(stack0);
                        if (!stack0) { p = 3466; continue; };
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack0 = local1;
//                        stack1 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack0 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BggetChildAt (local3);
                                } else { 
                                    stack0 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::rotation
                        //Possible type:7 0::Array
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['rotation'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgrotation;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[3]);
                            }
                        }
                        // 7 0::Math
                        /* GenerateLexImports GETLEX */
//                        stack1 = __Math;// JIT: redundant assigment, value unused
                        // 7 0::PI
                        //Possible type:7 0::Math
                        if (!(__Math != undefined && __Math[AX_CLASS_SYMBOL])) {
                            stack1 = __Math['PI'];
                        } else {
                            temp = __Math[AX_CLASS_SYMBOL] ? __Math : sec.box(__Math);
                            stack1 = temp.$BgPI;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[5]);
                            }
                        }
                        stack0 *= stack1;
//                        stack1 = 180;// JIT: redundant assigment, value unused
                        stack0 /= 180;
                        stack0 = +stack0;
                        local6 = stack0;
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack0 = local1;
//                        stack1 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack0 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BggetChildAt (local3);
                                } else { 
                                    stack0 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
//                        stack1 = 0;// JIT: redundant assigment, value unused
                        // 7 0::rotation
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.rotation = 0;
                        } else {
                            context.setproperty($names[3], 0, stack0);
                        }
                        // 7 0:levels::GenericScript
                        stack0 = scope0.findScopeProperty($names[6], true, false);
//                        stack1 = 7;// JIT: redundant assigment, value unused
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack2 = local1;
//                        stack3 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack2 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack2 = t.$BggetChildAt (local3);
                                } else { 
                                    stack2 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::x
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['x'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$Bgx;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[7]);
                            }
                        }
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack3 = local1;
//                        stack4 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack3 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack3 = t.$BggetChildAt (local3);
                                } else { 
                                    stack3 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::y
                        if (!(stack3 != undefined && stack3[AX_CLASS_SYMBOL])) {
                            stack3 = stack3['y'];
                        } else {
                            temp = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);
                            stack3 = temp.$Bgy;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[8]);
                            }
                        }
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack4 = local1;
//                        stack5 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack4 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack4 = t.$BggetChildAt (local3);
                                } else { 
                                    stack4 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::width
                        //Possible type:undefined
                        if (!(stack4 != undefined && stack4[AX_CLASS_SYMBOL])) {
                            stack4 = stack4['width'];
                        } else {
                            temp = stack4[AX_CLASS_SYMBOL] ? stack4 : sec.box(stack4);
                            stack4 = temp.$Bgwidth;
                            if (stack4 === undefined || typeof stack4 === 'function') {
                                stack4 = temp.axGetProperty($names[9]);
                            }
                        }
//                        stack5 = 2;// JIT: redundant assigment, value unused
                        stack4 /= 2;
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack5 = local1;
//                        stack6 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack5 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack5 = t.$BggetChildAt (local3);
                                } else { 
                                    stack5 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::height
                        //Possible type:undefined
                        if (!(stack5 != undefined && stack5[AX_CLASS_SYMBOL])) {
                            stack5 = stack5['height'];
                        } else {
                            temp = stack5[AX_CLASS_SYMBOL] ? stack5 : sec.box(stack5);
                            stack5 = temp.$Bgheight;
                            if (stack5 === undefined || typeof stack5 === 'function') {
                                stack5 = temp.axGetProperty($names[10]);
                            }
                        }
//                        stack6 = 2;// JIT: redundant assigment, value unused
                        stack5 /= 2;
//                        stack6 = local6;// JIT: redundant assigment, value unused
                        //JIT: Support fast construct:GenericScript/Object
                        stack0 = context.constructFast(stack0, [7, stack2, stack3, stack4, stack5, local6], $names[6]);
                        //IR: Drop coerce, reason: redundant
                        local5 = stack0;
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack0 = local1;
//                        stack1 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack0 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BggetChildAt (local3);
                                } else { 
                                    stack0 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
//                        stack1 = false;// JIT: redundant assigment, value unused
                        // 7 0::visible
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.visible = false;
                        } else {
                            context.setproperty($names[12], false, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::levelCollisions
                        //Possible type:7 0:levels::GenericScript
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack0 = this.$BglevelCollisions;
//                        stack1 = local5;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.push(local5);
                        } else {
                            // 7 0:http://adobe.com/AS3/2006/builtin::push
                            {
                                let t = stack0;
                                const m = t.$Bgpush || (t = sec.box(stack0), t.$Bgpush);
                                if( typeof m === "function" ) { 
                                    m.call(t, local5);
                                } else { 
                                   stack0.axCallProperty($names[11], [local5], false);
                                }
                            }
                        }
                        { p = 7023; continue; };
                    case 3466:
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack0 = local1;
//                        stack1 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack0 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BggetChildAt (local3);
                                } else { 
                                    stack0 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::SpinningCounterclockwiseSquareTile
                        temp = scope0.findScopeProperty($names[59], true, false);
                        stack1 = temp.$BgSpinningCounterclockwiseSquareTile;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[59]);
                        }
                        stack0 = stack1.axIsType(stack0);
                        if (!stack0) { p = 3596; continue; };
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack0 = local1;
//                        stack1 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack0 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BggetChildAt (local3);
                                } else { 
                                    stack0 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::rotation
                        //Possible type:7 0::Array
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['rotation'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgrotation;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[3]);
                            }
                        }
                        // 7 0::Math
                        /* GenerateLexImports GETLEX */
//                        stack1 = __Math;// JIT: redundant assigment, value unused
                        // 7 0::PI
                        //Possible type:7 0::Math
                        if (!(__Math != undefined && __Math[AX_CLASS_SYMBOL])) {
                            stack1 = __Math['PI'];
                        } else {
                            temp = __Math[AX_CLASS_SYMBOL] ? __Math : sec.box(__Math);
                            stack1 = temp.$BgPI;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[5]);
                            }
                        }
                        stack0 *= stack1;
//                        stack1 = 180;// JIT: redundant assigment, value unused
                        stack0 /= 180;
                        stack0 = +stack0;
                        local6 = stack0;
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack0 = local1;
//                        stack1 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack0 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BggetChildAt (local3);
                                } else { 
                                    stack0 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
//                        stack1 = 0;// JIT: redundant assigment, value unused
                        // 7 0::rotation
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.rotation = 0;
                        } else {
                            context.setproperty($names[3], 0, stack0);
                        }
                        // 7 0:levels::GenericScript
                        stack0 = scope0.findScopeProperty($names[6], true, false);
//                        stack1 = 8;// JIT: redundant assigment, value unused
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack2 = local1;
//                        stack3 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack2 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack2 = t.$BggetChildAt (local3);
                                } else { 
                                    stack2 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::x
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['x'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$Bgx;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[7]);
                            }
                        }
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack3 = local1;
//                        stack4 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack3 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack3 = t.$BggetChildAt (local3);
                                } else { 
                                    stack3 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::y
                        if (!(stack3 != undefined && stack3[AX_CLASS_SYMBOL])) {
                            stack3 = stack3['y'];
                        } else {
                            temp = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);
                            stack3 = temp.$Bgy;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[8]);
                            }
                        }
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack4 = local1;
//                        stack5 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack4 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack4 = t.$BggetChildAt (local3);
                                } else { 
                                    stack4 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::width
                        if (!(stack4 != undefined && stack4[AX_CLASS_SYMBOL])) {
                            stack4 = stack4['width'];
                        } else {
                            temp = stack4[AX_CLASS_SYMBOL] ? stack4 : sec.box(stack4);
                            stack4 = temp.$Bgwidth;
                            if (stack4 === undefined || typeof stack4 === 'function') {
                                stack4 = temp.axGetProperty($names[9]);
                            }
                        }
//                        stack5 = 2;// JIT: redundant assigment, value unused
                        stack4 /= 2;
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack5 = local1;
//                        stack6 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack5 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack5 = t.$BggetChildAt (local3);
                                } else { 
                                    stack5 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::height
                        //Possible type:undefined
                        if (!(stack5 != undefined && stack5[AX_CLASS_SYMBOL])) {
                            stack5 = stack5['height'];
                        } else {
                            temp = stack5[AX_CLASS_SYMBOL] ? stack5 : sec.box(stack5);
                            stack5 = temp.$Bgheight;
                            if (stack5 === undefined || typeof stack5 === 'function') {
                                stack5 = temp.axGetProperty($names[10]);
                            }
                        }
//                        stack6 = 2;// JIT: redundant assigment, value unused
                        stack5 /= 2;
//                        stack6 = local6;// JIT: redundant assigment, value unused
                        //JIT: Support fast construct:GenericScript/Object
                        stack0 = context.constructFast(stack0, [8, stack2, stack3, stack4, stack5, local6], $names[6]);
                        //IR: Drop coerce, reason: redundant
                        local5 = stack0;
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack0 = local1;
//                        stack1 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack0 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BggetChildAt (local3);
                                } else { 
                                    stack0 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
//                        stack1 = false;// JIT: redundant assigment, value unused
                        // 7 0::visible
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.visible = false;
                        } else {
                            context.setproperty($names[12], false, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::levelCollisions
                        //Possible type:7 0:levels::GenericScript
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack0 = this.$BglevelCollisions;
//                        stack1 = local5;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.push(local5);
                        } else {
                            // 7 0:http://adobe.com/AS3/2006/builtin::push
                            {
                                let t = stack0;
                                const m = t.$Bgpush || (t = sec.box(stack0), t.$Bgpush);
                                if( typeof m === "function" ) { 
                                    m.call(t, local5);
                                } else { 
                                   stack0.axCallProperty($names[11], [local5], false);
                                }
                            }
                        }
                        { p = 7023; continue; };
                    case 3596:
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack0 = local1;
//                        stack1 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack0 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BggetChildAt (local3);
                                } else { 
                                    stack0 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::IcycleCollisionScript
                        temp = scope0.findScopeProperty($names[60], true, false);
                        stack1 = temp.$BgIcycleCollisionScript;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[60]);
                        }
                        stack0 = stack1.axIsType(stack0);
                        if (!stack0) { p = 3668; continue; };
                        // 7 0:levels::GenericScript
                        stack0 = scope0.findScopeProperty($names[6], true, false);
//                        stack1 = 101;// JIT: redundant assigment, value unused
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack2 = local1;
//                        stack3 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack2 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack2 = t.$BggetChildAt (local3);
                                } else { 
                                    stack2 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::x
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['x'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$Bgx;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[7]);
                            }
                        }
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack3 = local1;
//                        stack4 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack3 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack3 = t.$BggetChildAt (local3);
                                } else { 
                                    stack3 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::y
                        if (!(stack3 != undefined && stack3[AX_CLASS_SYMBOL])) {
                            stack3 = stack3['y'];
                        } else {
                            temp = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);
                            stack3 = temp.$Bgy;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[8]);
                            }
                        }
//                        stack4 = 0;// JIT: redundant assigment, value unused
                        //JIT: Support fast construct:GenericScript/Object
                        stack0 = context.constructFast(stack0, [101, stack2, stack3, 0], $names[6]);
                        //IR: Drop coerce, reason: redundant
                        local5 = stack0;
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack0 = local1;
//                        stack1 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack0 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BggetChildAt (local3);
                                } else { 
                                    stack0 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
//                        stack1 = false;// JIT: redundant assigment, value unused
                        // 7 0::visible
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.visible = false;
                        } else {
                            context.setproperty($names[12], false, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::levelCollisions
                        //Possible type:7 0:levels::GenericScript
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack0 = this.$BglevelCollisions;
//                        stack1 = local5;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.push(local5);
                        } else {
                            // 7 0:http://adobe.com/AS3/2006/builtin::push
                            {
                                let t = stack0;
                                const m = t.$Bgpush || (t = sec.box(stack0), t.$Bgpush);
                                if( typeof m === "function" ) { 
                                    m.call(t, local5);
                                } else { 
                                   stack0.axCallProperty($names[11], [local5], false);
                                }
                            }
                        }
                        { p = 7023; continue; };
                    case 3668:
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack0 = local1;
//                        stack1 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack0 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BggetChildAt (local3);
                                } else { 
                                    stack0 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::SnowCollisionScript1
                        temp = scope0.findScopeProperty($names[61], true, false);
                        stack1 = temp.$BgSnowCollisionScript1;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[61]);
                        }
                        stack0 = stack1.axIsType(stack0);
                        if (!stack0) { p = 3746; continue; };
                        // 7 0:levels::GenericScript
                        stack0 = scope0.findScopeProperty($names[6], true, false);
//                        stack1 = 102;// JIT: redundant assigment, value unused
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack2 = local1;
//                        stack3 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack2 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack2 = t.$BggetChildAt (local3);
                                } else { 
                                    stack2 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::x
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['x'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$Bgx;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[7]);
                            }
                        }
//                        stack3 = 8;// JIT: redundant assigment, value unused
                        stack2 += 8;
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack3 = local1;
//                        stack4 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack3 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack3 = t.$BggetChildAt (local3);
                                } else { 
                                    stack3 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::y
                        //Possible type:undefined
                        if (!(stack3 != undefined && stack3[AX_CLASS_SYMBOL])) {
                            stack3 = stack3['y'];
                        } else {
                            temp = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);
                            stack3 = temp.$Bgy;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[8]);
                            }
                        }
//                        stack4 = 8;// JIT: redundant assigment, value unused
                        stack3 += 8;
//                        stack4 = 0;// JIT: redundant assigment, value unused
                        //JIT: Support fast construct:GenericScript/Object
                        stack0 = context.constructFast(stack0, [102, stack2, stack3, 0], $names[6]);
                        //IR: Drop coerce, reason: redundant
                        local5 = stack0;
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack0 = local1;
//                        stack1 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack0 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BggetChildAt (local3);
                                } else { 
                                    stack0 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
//                        stack1 = false;// JIT: redundant assigment, value unused
                        // 7 0::visible
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.visible = false;
                        } else {
                            context.setproperty($names[12], false, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::levelCollisions
                        //Possible type:7 0:levels::GenericScript
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack0 = this.$BglevelCollisions;
//                        stack1 = local5;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.push(local5);
                        } else {
                            // 7 0:http://adobe.com/AS3/2006/builtin::push
                            {
                                let t = stack0;
                                const m = t.$Bgpush || (t = sec.box(stack0), t.$Bgpush);
                                if( typeof m === "function" ) { 
                                    m.call(t, local5);
                                } else { 
                                   stack0.axCallProperty($names[11], [local5], false);
                                }
                            }
                        }
                        { p = 7023; continue; };
                    case 3746:
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack0 = local1;
//                        stack1 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack0 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BggetChildAt (local3);
                                } else { 
                                    stack0 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::FrostMachineSprite
                        temp = scope0.findScopeProperty($names[62], true, false);
                        stack1 = temp.$BgFrostMachineSprite;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[62]);
                        }
                        stack0 = stack1.axIsType(stack0);
                        if (!stack0) { p = 3818; continue; };
                        // 7 0:levels::GenericScript
                        stack0 = scope0.findScopeProperty($names[6], true, false);
//                        stack1 = 103;// JIT: redundant assigment, value unused
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack2 = local1;
//                        stack3 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack2 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack2 = t.$BggetChildAt (local3);
                                } else { 
                                    stack2 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::x
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['x'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$Bgx;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[7]);
                            }
                        }
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack3 = local1;
//                        stack4 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack3 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack3 = t.$BggetChildAt (local3);
                                } else { 
                                    stack3 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::y
                        if (!(stack3 != undefined && stack3[AX_CLASS_SYMBOL])) {
                            stack3 = stack3['y'];
                        } else {
                            temp = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);
                            stack3 = temp.$Bgy;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[8]);
                            }
                        }
//                        stack4 = 0;// JIT: redundant assigment, value unused
                        //JIT: Support fast construct:GenericScript/Object
                        stack0 = context.constructFast(stack0, [103, stack2, stack3, 0], $names[6]);
                        //IR: Drop coerce, reason: redundant
                        local5 = stack0;
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack0 = local1;
//                        stack1 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack0 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BggetChildAt (local3);
                                } else { 
                                    stack0 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
//                        stack1 = false;// JIT: redundant assigment, value unused
                        // 7 0::visible
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.visible = false;
                        } else {
                            context.setproperty($names[12], false, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::levelCollisions
                        //Possible type:7 0:levels::GenericScript
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack0 = this.$BglevelCollisions;
//                        stack1 = local5;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.push(local5);
                        } else {
                            // 7 0:http://adobe.com/AS3/2006/builtin::push
                            {
                                let t = stack0;
                                const m = t.$Bgpush || (t = sec.box(stack0), t.$Bgpush);
                                if( typeof m === "function" ) { 
                                    m.call(t, local5);
                                } else { 
                                   stack0.axCallProperty($names[11], [local5], false);
                                }
                            }
                        }
                        { p = 7023; continue; };
                    case 3818:
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack0 = local1;
//                        stack1 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack0 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BggetChildAt (local3);
                                } else { 
                                    stack0 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::DefrostMachineSprite
                        temp = scope0.findScopeProperty($names[63], true, false);
                        stack1 = temp.$BgDefrostMachineSprite;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[63]);
                        }
                        stack0 = stack1.axIsType(stack0);
                        if (!stack0) { p = 3890; continue; };
                        // 7 0:levels::GenericScript
                        stack0 = scope0.findScopeProperty($names[6], true, false);
//                        stack1 = 103;// JIT: redundant assigment, value unused
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack2 = local1;
//                        stack3 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack2 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack2 = t.$BggetChildAt (local3);
                                } else { 
                                    stack2 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::x
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['x'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$Bgx;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[7]);
                            }
                        }
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack3 = local1;
//                        stack4 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack3 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack3 = t.$BggetChildAt (local3);
                                } else { 
                                    stack3 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::y
                        if (!(stack3 != undefined && stack3[AX_CLASS_SYMBOL])) {
                            stack3 = stack3['y'];
                        } else {
                            temp = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);
                            stack3 = temp.$Bgy;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[8]);
                            }
                        }
//                        stack4 = 1;// JIT: redundant assigment, value unused
                        //JIT: Support fast construct:GenericScript/Object
                        stack0 = context.constructFast(stack0, [103, stack2, stack3, 1], $names[6]);
                        //IR: Drop coerce, reason: redundant
                        local5 = stack0;
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack0 = local1;
//                        stack1 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack0 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BggetChildAt (local3);
                                } else { 
                                    stack0 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
//                        stack1 = false;// JIT: redundant assigment, value unused
                        // 7 0::visible
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.visible = false;
                        } else {
                            context.setproperty($names[12], false, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::levelCollisions
                        //Possible type:7 0:levels::GenericScript
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack0 = this.$BglevelCollisions;
//                        stack1 = local5;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.push(local5);
                        } else {
                            // 7 0:http://adobe.com/AS3/2006/builtin::push
                            {
                                let t = stack0;
                                const m = t.$Bgpush || (t = sec.box(stack0), t.$Bgpush);
                                if( typeof m === "function" ) { 
                                    m.call(t, local5);
                                } else { 
                                   stack0.axCallProperty($names[11], [local5], false);
                                }
                            }
                        }
                        { p = 7023; continue; };
                    case 3890:
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack0 = local1;
//                        stack1 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack0 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BggetChildAt (local3);
                                } else { 
                                    stack0 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::LightningGroup
                        temp = scope0.findScopeProperty($names[64], true, false);
                        stack1 = temp.$BgLightningGroup;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[64]);
                        }
                        stack0 = stack1.axIsType(stack0);
                        if (!stack0) { p = 3978; continue; };
                        // 7 0:levels::GenericScript
                        stack0 = scope0.findScopeProperty($names[6], true, false);
//                        stack1 = 9;// JIT: redundant assigment, value unused
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack2 = local1;
//                        stack3 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack2 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack2 = t.$BggetChildAt (local3);
                                } else { 
                                    stack2 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::x
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['x'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$Bgx;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[7]);
                            }
                        }
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack3 = local1;
//                        stack4 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack3 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack3 = t.$BggetChildAt (local3);
                                } else { 
                                    stack3 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::y
                        if (!(stack3 != undefined && stack3[AX_CLASS_SYMBOL])) {
                            stack3 = stack3['y'];
                        } else {
                            temp = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);
                            stack3 = temp.$Bgy;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[8]);
                            }
                        }
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack4 = local1;
//                        stack5 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack4 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack4 = t.$BggetChildAt (local3);
                                } else { 
                                    stack4 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::width
                        //Possible type:undefined
                        if (!(stack4 != undefined && stack4[AX_CLASS_SYMBOL])) {
                            stack4 = stack4['width'];
                        } else {
                            temp = stack4[AX_CLASS_SYMBOL] ? stack4 : sec.box(stack4);
                            stack4 = temp.$Bgwidth;
                            if (stack4 === undefined || typeof stack4 === 'function') {
                                stack4 = temp.axGetProperty($names[9]);
                            }
                        }
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack5 = local1;
//                        stack6 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack5 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack5 = t.$BggetChildAt (local3);
                                } else { 
                                    stack5 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::height
                        if (!(stack5 != undefined && stack5[AX_CLASS_SYMBOL])) {
                            stack5 = stack5['height'];
                        } else {
                            temp = stack5[AX_CLASS_SYMBOL] ? stack5 : sec.box(stack5);
                            stack5 = temp.$Bgheight;
                            if (stack5 === undefined || typeof stack5 === 'function') {
                                stack5 = temp.axGetProperty($names[10]);
                            }
                        }
                        //JIT: Support fast construct:GenericScript/Object
                        stack0 = context.constructFast(stack0, [9, stack2, stack3, stack4, stack5], $names[6]);
                        //IR: Drop coerce, reason: redundant
                        local5 = stack0;
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack0 = local1;
//                        stack1 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack0 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BggetChildAt (local3);
                                } else { 
                                    stack0 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
//                        stack1 = false;// JIT: redundant assigment, value unused
                        // 7 0::visible
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.visible = false;
                        } else {
                            context.setproperty($names[12], false, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::levelCollisions
                        //Possible type:7 0:levels::GenericScript
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack0 = this.$BglevelCollisions;
//                        stack1 = local5;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.push(local5);
                        } else {
                            // 7 0:http://adobe.com/AS3/2006/builtin::push
                            {
                                let t = stack0;
                                const m = t.$Bgpush || (t = sec.box(stack0), t.$Bgpush);
                                if( typeof m === "function" ) { 
                                    m.call(t, local5);
                                } else { 
                                   stack0.axCallProperty($names[11], [local5], false);
                                }
                            }
                        }
                        { p = 7023; continue; };
                    case 3978:
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack0 = local1;
//                        stack1 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack0 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BggetChildAt (local3);
                                } else { 
                                    stack0 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::WallCollisionTile1
                        temp = scope0.findScopeProperty($names[65], true, false);
                        stack1 = temp.$BgWallCollisionTile1;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[65]);
                        }
                        stack0 = stack1.axIsType(stack0);
                        if (!stack0) { p = 4074; continue; };
                        // 7 0:levels::GenericScript
                        stack0 = scope0.findScopeProperty($names[6], true, false);
//                        stack1 = 10;// JIT: redundant assigment, value unused
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack2 = local1;
//                        stack3 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack2 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack2 = t.$BggetChildAt (local3);
                                } else { 
                                    stack2 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::x
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['x'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$Bgx;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[7]);
                            }
                        }
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack3 = local1;
//                        stack4 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack3 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack3 = t.$BggetChildAt (local3);
                                } else { 
                                    stack3 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::y
                        if (!(stack3 != undefined && stack3[AX_CLASS_SYMBOL])) {
                            stack3 = stack3['y'];
                        } else {
                            temp = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);
                            stack3 = temp.$Bgy;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[8]);
                            }
                        }
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack4 = local1;
//                        stack5 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack4 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack4 = t.$BggetChildAt (local3);
                                } else { 
                                    stack4 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::width
                        if (!(stack4 != undefined && stack4[AX_CLASS_SYMBOL])) {
                            stack4 = stack4['width'];
                        } else {
                            temp = stack4[AX_CLASS_SYMBOL] ? stack4 : sec.box(stack4);
                            stack4 = temp.$Bgwidth;
                            if (stack4 === undefined || typeof stack4 === 'function') {
                                stack4 = temp.axGetProperty($names[9]);
                            }
                        }
//                        stack5 = 2;// JIT: redundant assigment, value unused
                        stack4 /= 2;
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack5 = local1;
//                        stack6 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack5 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack5 = t.$BggetChildAt (local3);
                                } else { 
                                    stack5 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::height
                        //Possible type:undefined
                        if (!(stack5 != undefined && stack5[AX_CLASS_SYMBOL])) {
                            stack5 = stack5['height'];
                        } else {
                            temp = stack5[AX_CLASS_SYMBOL] ? stack5 : sec.box(stack5);
                            stack5 = temp.$Bgheight;
                            if (stack5 === undefined || typeof stack5 === 'function') {
                                stack5 = temp.axGetProperty($names[10]);
                            }
                        }
//                        stack6 = 2;// JIT: redundant assigment, value unused
                        stack5 /= 2;
//                        stack6 = 0;// JIT: redundant assigment, value unused
                        //JIT: Support fast construct:GenericScript/Object
                        stack0 = context.constructFast(stack0, [10, stack2, stack3, stack4, stack5, 0], $names[6]);
                        //IR: Drop coerce, reason: redundant
                        local5 = stack0;
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack0 = local1;
//                        stack1 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack0 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BggetChildAt (local3);
                                } else { 
                                    stack0 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
//                        stack1 = false;// JIT: redundant assigment, value unused
                        // 7 0::visible
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.visible = false;
                        } else {
                            context.setproperty($names[12], false, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::levelCollisions
                        //Possible type:7 0:levels::GenericScript
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack0 = this.$BglevelCollisions;
//                        stack1 = local5;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.push(local5);
                        } else {
                            // 7 0:http://adobe.com/AS3/2006/builtin::push
                            {
                                let t = stack0;
                                const m = t.$Bgpush || (t = sec.box(stack0), t.$Bgpush);
                                if( typeof m === "function" ) { 
                                    m.call(t, local5);
                                } else { 
                                   stack0.axCallProperty($names[11], [local5], false);
                                }
                            }
                        }
                        { p = 7023; continue; };
                    case 4074:
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack0 = local1;
//                        stack1 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack0 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BggetChildAt (local3);
                                } else { 
                                    stack0 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::WallCollisionTile2
                        temp = scope0.findScopeProperty($names[66], true, false);
                        stack1 = temp.$BgWallCollisionTile2;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[66]);
                        }
                        stack0 = stack1.axIsType(stack0);
                        if (!stack0) { p = 4170; continue; };
                        // 7 0:levels::GenericScript
                        stack0 = scope0.findScopeProperty($names[6], true, false);
//                        stack1 = 10;// JIT: redundant assigment, value unused
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack2 = local1;
//                        stack3 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack2 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack2 = t.$BggetChildAt (local3);
                                } else { 
                                    stack2 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::x
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['x'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$Bgx;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[7]);
                            }
                        }
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack3 = local1;
//                        stack4 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack3 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack3 = t.$BggetChildAt (local3);
                                } else { 
                                    stack3 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::y
                        if (!(stack3 != undefined && stack3[AX_CLASS_SYMBOL])) {
                            stack3 = stack3['y'];
                        } else {
                            temp = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);
                            stack3 = temp.$Bgy;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[8]);
                            }
                        }
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack4 = local1;
//                        stack5 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack4 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack4 = t.$BggetChildAt (local3);
                                } else { 
                                    stack4 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::width
                        if (!(stack4 != undefined && stack4[AX_CLASS_SYMBOL])) {
                            stack4 = stack4['width'];
                        } else {
                            temp = stack4[AX_CLASS_SYMBOL] ? stack4 : sec.box(stack4);
                            stack4 = temp.$Bgwidth;
                            if (stack4 === undefined || typeof stack4 === 'function') {
                                stack4 = temp.axGetProperty($names[9]);
                            }
                        }
//                        stack5 = 2;// JIT: redundant assigment, value unused
                        stack4 /= 2;
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack5 = local1;
//                        stack6 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack5 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack5 = t.$BggetChildAt (local3);
                                } else { 
                                    stack5 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::height
                        //Possible type:undefined
                        if (!(stack5 != undefined && stack5[AX_CLASS_SYMBOL])) {
                            stack5 = stack5['height'];
                        } else {
                            temp = stack5[AX_CLASS_SYMBOL] ? stack5 : sec.box(stack5);
                            stack5 = temp.$Bgheight;
                            if (stack5 === undefined || typeof stack5 === 'function') {
                                stack5 = temp.axGetProperty($names[10]);
                            }
                        }
//                        stack6 = 2;// JIT: redundant assigment, value unused
                        stack5 /= 2;
//                        stack6 = 1;// JIT: redundant assigment, value unused
                        //JIT: Support fast construct:GenericScript/Object
                        stack0 = context.constructFast(stack0, [10, stack2, stack3, stack4, stack5, 1], $names[6]);
                        //IR: Drop coerce, reason: redundant
                        local5 = stack0;
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack0 = local1;
//                        stack1 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack0 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BggetChildAt (local3);
                                } else { 
                                    stack0 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
//                        stack1 = false;// JIT: redundant assigment, value unused
                        // 7 0::visible
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.visible = false;
                        } else {
                            context.setproperty($names[12], false, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::levelCollisions
                        //Possible type:7 0:levels::GenericScript
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack0 = this.$BglevelCollisions;
//                        stack1 = local5;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.push(local5);
                        } else {
                            // 7 0:http://adobe.com/AS3/2006/builtin::push
                            {
                                let t = stack0;
                                const m = t.$Bgpush || (t = sec.box(stack0), t.$Bgpush);
                                if( typeof m === "function" ) { 
                                    m.call(t, local5);
                                } else { 
                                   stack0.axCallProperty($names[11], [local5], false);
                                }
                            }
                        }
                        { p = 7023; continue; };
                    case 4170:
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack0 = local1;
//                        stack1 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack0 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BggetChildAt (local3);
                                } else { 
                                    stack0 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::WallCollisionTile3
                        temp = scope0.findScopeProperty($names[67], true, false);
                        stack1 = temp.$BgWallCollisionTile3;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[67]);
                        }
                        stack0 = stack1.axIsType(stack0);
                        if (!stack0) { p = 4266; continue; };
                        // 7 0:levels::GenericScript
                        stack0 = scope0.findScopeProperty($names[6], true, false);
//                        stack1 = 10;// JIT: redundant assigment, value unused
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack2 = local1;
//                        stack3 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack2 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack2 = t.$BggetChildAt (local3);
                                } else { 
                                    stack2 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::x
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['x'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$Bgx;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[7]);
                            }
                        }
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack3 = local1;
//                        stack4 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack3 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack3 = t.$BggetChildAt (local3);
                                } else { 
                                    stack3 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::y
                        if (!(stack3 != undefined && stack3[AX_CLASS_SYMBOL])) {
                            stack3 = stack3['y'];
                        } else {
                            temp = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);
                            stack3 = temp.$Bgy;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[8]);
                            }
                        }
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack4 = local1;
//                        stack5 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack4 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack4 = t.$BggetChildAt (local3);
                                } else { 
                                    stack4 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::width
                        if (!(stack4 != undefined && stack4[AX_CLASS_SYMBOL])) {
                            stack4 = stack4['width'];
                        } else {
                            temp = stack4[AX_CLASS_SYMBOL] ? stack4 : sec.box(stack4);
                            stack4 = temp.$Bgwidth;
                            if (stack4 === undefined || typeof stack4 === 'function') {
                                stack4 = temp.axGetProperty($names[9]);
                            }
                        }
//                        stack5 = 2;// JIT: redundant assigment, value unused
                        stack4 /= 2;
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack5 = local1;
//                        stack6 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack5 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack5 = t.$BggetChildAt (local3);
                                } else { 
                                    stack5 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::height
                        //Possible type:undefined
                        if (!(stack5 != undefined && stack5[AX_CLASS_SYMBOL])) {
                            stack5 = stack5['height'];
                        } else {
                            temp = stack5[AX_CLASS_SYMBOL] ? stack5 : sec.box(stack5);
                            stack5 = temp.$Bgheight;
                            if (stack5 === undefined || typeof stack5 === 'function') {
                                stack5 = temp.axGetProperty($names[10]);
                            }
                        }
//                        stack6 = 2;// JIT: redundant assigment, value unused
                        stack5 /= 2;
//                        stack6 = 2;// JIT: redundant assigment, value unused
                        //JIT: Support fast construct:GenericScript/Object
                        stack0 = context.constructFast(stack0, [10, stack2, stack3, stack4, stack5, 2], $names[6]);
                        //IR: Drop coerce, reason: redundant
                        local5 = stack0;
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack0 = local1;
//                        stack1 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack0 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BggetChildAt (local3);
                                } else { 
                                    stack0 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
//                        stack1 = false;// JIT: redundant assigment, value unused
                        // 7 0::visible
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.visible = false;
                        } else {
                            context.setproperty($names[12], false, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::levelCollisions
                        //Possible type:7 0:levels::GenericScript
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack0 = this.$BglevelCollisions;
//                        stack1 = local5;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.push(local5);
                        } else {
                            // 7 0:http://adobe.com/AS3/2006/builtin::push
                            {
                                let t = stack0;
                                const m = t.$Bgpush || (t = sec.box(stack0), t.$Bgpush);
                                if( typeof m === "function" ) { 
                                    m.call(t, local5);
                                } else { 
                                   stack0.axCallProperty($names[11], [local5], false);
                                }
                            }
                        }
                        { p = 7023; continue; };
                    case 4266:
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack0 = local1;
//                        stack1 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack0 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BggetChildAt (local3);
                                } else { 
                                    stack0 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::WallArea
                        temp = scope0.findScopeProperty($names[68], true, false);
                        stack1 = temp.$BgWallArea;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[68]);
                        }
                        stack0 = stack1.axIsType(stack0);
                        if (!stack0) { p = 4362; continue; };
                        // 7 0:levels::GenericScript
                        stack0 = scope0.findScopeProperty($names[6], true, false);
//                        stack1 = 11;// JIT: redundant assigment, value unused
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack2 = local1;
//                        stack3 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack2 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack2 = t.$BggetChildAt (local3);
                                } else { 
                                    stack2 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::x
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['x'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$Bgx;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[7]);
                            }
                        }
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack3 = local1;
//                        stack4 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack3 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack3 = t.$BggetChildAt (local3);
                                } else { 
                                    stack3 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::y
                        if (!(stack3 != undefined && stack3[AX_CLASS_SYMBOL])) {
                            stack3 = stack3['y'];
                        } else {
                            temp = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);
                            stack3 = temp.$Bgy;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[8]);
                            }
                        }
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack4 = local1;
//                        stack5 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack4 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack4 = t.$BggetChildAt (local3);
                                } else { 
                                    stack4 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::width
                        if (!(stack4 != undefined && stack4[AX_CLASS_SYMBOL])) {
                            stack4 = stack4['width'];
                        } else {
                            temp = stack4[AX_CLASS_SYMBOL] ? stack4 : sec.box(stack4);
                            stack4 = temp.$Bgwidth;
                            if (stack4 === undefined || typeof stack4 === 'function') {
                                stack4 = temp.axGetProperty($names[9]);
                            }
                        }
//                        stack5 = 2;// JIT: redundant assigment, value unused
                        stack4 /= 2;
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack5 = local1;
//                        stack6 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack5 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack5 = t.$BggetChildAt (local3);
                                } else { 
                                    stack5 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::height
                        //Possible type:undefined
                        if (!(stack5 != undefined && stack5[AX_CLASS_SYMBOL])) {
                            stack5 = stack5['height'];
                        } else {
                            temp = stack5[AX_CLASS_SYMBOL] ? stack5 : sec.box(stack5);
                            stack5 = temp.$Bgheight;
                            if (stack5 === undefined || typeof stack5 === 'function') {
                                stack5 = temp.axGetProperty($names[10]);
                            }
                        }
//                        stack6 = 2;// JIT: redundant assigment, value unused
                        stack5 /= 2;
//                        stack6 = 0;// JIT: redundant assigment, value unused
                        //JIT: Support fast construct:GenericScript/Object
                        stack0 = context.constructFast(stack0, [11, stack2, stack3, stack4, stack5, 0], $names[6]);
                        //IR: Drop coerce, reason: redundant
                        local5 = stack0;
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack0 = local1;
//                        stack1 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack0 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BggetChildAt (local3);
                                } else { 
                                    stack0 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
//                        stack1 = false;// JIT: redundant assigment, value unused
                        // 7 0::visible
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.visible = false;
                        } else {
                            context.setproperty($names[12], false, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::levelCollisions
                        //Possible type:7 0:levels::GenericScript
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack0 = this.$BglevelCollisions;
//                        stack1 = local5;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.push(local5);
                        } else {
                            // 7 0:http://adobe.com/AS3/2006/builtin::push
                            {
                                let t = stack0;
                                const m = t.$Bgpush || (t = sec.box(stack0), t.$Bgpush);
                                if( typeof m === "function" ) { 
                                    m.call(t, local5);
                                } else { 
                                   stack0.axCallProperty($names[11], [local5], false);
                                }
                            }
                        }
                        { p = 7023; continue; };
                    case 4362:
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack0 = local1;
//                        stack1 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack0 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BggetChildAt (local3);
                                } else { 
                                    stack0 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::LaserSprite
                        temp = scope0.findScopeProperty($names[69], true, false);
                        stack1 = temp.$BgLaserSprite;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[69]);
                        }
                        stack0 = stack1.axIsType(stack0);
                        if (!stack0) { p = 4492; continue; };
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack0 = local1;
//                        stack1 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack0 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BggetChildAt (local3);
                                } else { 
                                    stack0 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::rotation
                        //Possible type:7 0::Array
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['rotation'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgrotation;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[3]);
                            }
                        }
                        // 7 0::Math
                        /* GenerateLexImports GETLEX */
//                        stack1 = __Math;// JIT: redundant assigment, value unused
                        // 7 0::PI
                        //Possible type:7 0::Math
                        if (!(__Math != undefined && __Math[AX_CLASS_SYMBOL])) {
                            stack1 = __Math['PI'];
                        } else {
                            temp = __Math[AX_CLASS_SYMBOL] ? __Math : sec.box(__Math);
                            stack1 = temp.$BgPI;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[5]);
                            }
                        }
                        stack0 *= stack1;
//                        stack1 = 180;// JIT: redundant assigment, value unused
                        stack0 /= 180;
                        stack0 = +stack0;
                        local6 = stack0;
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack0 = local1;
//                        stack1 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack0 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BggetChildAt (local3);
                                } else { 
                                    stack0 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
//                        stack1 = 0;// JIT: redundant assigment, value unused
                        // 7 0::rotation
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.rotation = 0;
                        } else {
                            context.setproperty($names[3], 0, stack0);
                        }
                        // 7 0:levels::GenericScript
                        stack0 = scope0.findScopeProperty($names[6], true, false);
//                        stack1 = 12;// JIT: redundant assigment, value unused
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack2 = local1;
//                        stack3 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack2 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack2 = t.$BggetChildAt (local3);
                                } else { 
                                    stack2 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::x
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['x'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$Bgx;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[7]);
                            }
                        }
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack3 = local1;
//                        stack4 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack3 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack3 = t.$BggetChildAt (local3);
                                } else { 
                                    stack3 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::y
                        if (!(stack3 != undefined && stack3[AX_CLASS_SYMBOL])) {
                            stack3 = stack3['y'];
                        } else {
                            temp = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);
                            stack3 = temp.$Bgy;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[8]);
                            }
                        }
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack4 = local1;
//                        stack5 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack4 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack4 = t.$BggetChildAt (local3);
                                } else { 
                                    stack4 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::width
                        if (!(stack4 != undefined && stack4[AX_CLASS_SYMBOL])) {
                            stack4 = stack4['width'];
                        } else {
                            temp = stack4[AX_CLASS_SYMBOL] ? stack4 : sec.box(stack4);
                            stack4 = temp.$Bgwidth;
                            if (stack4 === undefined || typeof stack4 === 'function') {
                                stack4 = temp.axGetProperty($names[9]);
                            }
                        }
//                        stack5 = 2;// JIT: redundant assigment, value unused
                        stack4 /= 2;
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack5 = local1;
//                        stack6 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack5 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack5 = t.$BggetChildAt (local3);
                                } else { 
                                    stack5 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::height
                        //Possible type:undefined
                        if (!(stack5 != undefined && stack5[AX_CLASS_SYMBOL])) {
                            stack5 = stack5['height'];
                        } else {
                            temp = stack5[AX_CLASS_SYMBOL] ? stack5 : sec.box(stack5);
                            stack5 = temp.$Bgheight;
                            if (stack5 === undefined || typeof stack5 === 'function') {
                                stack5 = temp.axGetProperty($names[10]);
                            }
                        }
//                        stack6 = 2;// JIT: redundant assigment, value unused
                        stack5 /= 2;
//                        stack6 = local6;// JIT: redundant assigment, value unused
                        //JIT: Support fast construct:GenericScript/Object
                        stack0 = context.constructFast(stack0, [12, stack2, stack3, stack4, stack5, local6], $names[6]);
                        //IR: Drop coerce, reason: redundant
                        local5 = stack0;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::levelCollisions
                        //Possible type:7 0:levels::GenericScript
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack0 = this.$BglevelCollisions;
//                        stack1 = local5;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.push(local5);
                        } else {
                            // 7 0:http://adobe.com/AS3/2006/builtin::push
                            {
                                let t = stack0;
                                const m = t.$Bgpush || (t = sec.box(stack0), t.$Bgpush);
                                if( typeof m === "function" ) { 
                                    m.call(t, local5);
                                } else { 
                                   stack0.axCallProperty($names[11], [local5], false);
                                }
                            }
                        }
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack0 = local1;
//                        stack1 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack0 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BggetChildAt (local3);
                                } else { 
                                    stack0 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
//                        stack1 = false;// JIT: redundant assigment, value unused
                        // 7 0::visible
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.visible = false;
                        } else {
                            context.setproperty($names[12], false, stack0);
                        }
                        { p = 7023; continue; };
                    case 4492:
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack0 = local1;
//                        stack1 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack0 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BggetChildAt (local3);
                                } else { 
                                    stack0 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::AcidCollisionArea
                        temp = scope0.findScopeProperty($names[70], true, false);
                        stack1 = temp.$BgAcidCollisionArea;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[70]);
                        }
                        stack0 = stack1.axIsType(stack0);
                        if (!stack0) { p = 4580; continue; };
                        // 7 0:levels::GenericScript
                        stack0 = scope0.findScopeProperty($names[6], true, false);
//                        stack1 = 13;// JIT: redundant assigment, value unused
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack2 = local1;
//                        stack3 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack2 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack2 = t.$BggetChildAt (local3);
                                } else { 
                                    stack2 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::x
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['x'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$Bgx;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[7]);
                            }
                        }
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack3 = local1;
//                        stack4 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack3 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack3 = t.$BggetChildAt (local3);
                                } else { 
                                    stack3 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::y
                        if (!(stack3 != undefined && stack3[AX_CLASS_SYMBOL])) {
                            stack3 = stack3['y'];
                        } else {
                            temp = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);
                            stack3 = temp.$Bgy;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[8]);
                            }
                        }
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack4 = local1;
//                        stack5 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack4 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack4 = t.$BggetChildAt (local3);
                                } else { 
                                    stack4 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::width
                        if (!(stack4 != undefined && stack4[AX_CLASS_SYMBOL])) {
                            stack4 = stack4['width'];
                        } else {
                            temp = stack4[AX_CLASS_SYMBOL] ? stack4 : sec.box(stack4);
                            stack4 = temp.$Bgwidth;
                            if (stack4 === undefined || typeof stack4 === 'function') {
                                stack4 = temp.axGetProperty($names[9]);
                            }
                        }
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack5 = local1;
//                        stack6 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack5 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack5 = t.$BggetChildAt (local3);
                                } else { 
                                    stack5 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::height
                        if (!(stack5 != undefined && stack5[AX_CLASS_SYMBOL])) {
                            stack5 = stack5['height'];
                        } else {
                            temp = stack5[AX_CLASS_SYMBOL] ? stack5 : sec.box(stack5);
                            stack5 = temp.$Bgheight;
                            if (stack5 === undefined || typeof stack5 === 'function') {
                                stack5 = temp.axGetProperty($names[10]);
                            }
                        }
                        //JIT: Support fast construct:GenericScript/Object
                        stack0 = context.constructFast(stack0, [13, stack2, stack3, stack4, stack5], $names[6]);
                        //IR: Drop coerce, reason: redundant
                        local5 = stack0;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::levelCollisions
                        //Possible type:7 0:levels::GenericScript
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack0 = this.$BglevelCollisions;
//                        stack1 = local5;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.push(local5);
                        } else {
                            // 7 0:http://adobe.com/AS3/2006/builtin::push
                            {
                                let t = stack0;
                                const m = t.$Bgpush || (t = sec.box(stack0), t.$Bgpush);
                                if( typeof m === "function" ) { 
                                    m.call(t, local5);
                                } else { 
                                   stack0.axCallProperty($names[11], [local5], false);
                                }
                            }
                        }
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack0 = local1;
//                        stack1 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack0 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BggetChildAt (local3);
                                } else { 
                                    stack0 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
//                        stack1 = false;// JIT: redundant assigment, value unused
                        // 7 0::visible
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.visible = false;
                        } else {
                            context.setproperty($names[12], false, stack0);
                        }
                        { p = 7023; continue; };
                    case 4580:
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack0 = local1;
//                        stack1 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack0 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BggetChildAt (local3);
                                } else { 
                                    stack0 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::PitTile
                        temp = scope0.findScopeProperty($names[71], true, false);
                        stack1 = temp.$BgPitTile;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[71]);
                        }
                        stack0 = stack1.axIsType(stack0);
                        if (!stack0) { p = 4710; continue; };
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack0 = local1;
//                        stack1 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack0 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BggetChildAt (local3);
                                } else { 
                                    stack0 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::rotation
                        //Possible type:7 0::Array
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['rotation'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgrotation;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[3]);
                            }
                        }
                        // 7 0::Math
                        /* GenerateLexImports GETLEX */
//                        stack1 = __Math;// JIT: redundant assigment, value unused
                        // 7 0::PI
                        //Possible type:7 0::Math
                        if (!(__Math != undefined && __Math[AX_CLASS_SYMBOL])) {
                            stack1 = __Math['PI'];
                        } else {
                            temp = __Math[AX_CLASS_SYMBOL] ? __Math : sec.box(__Math);
                            stack1 = temp.$BgPI;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[5]);
                            }
                        }
                        stack0 *= stack1;
//                        stack1 = 180;// JIT: redundant assigment, value unused
                        stack0 /= 180;
                        stack0 = +stack0;
                        local6 = stack0;
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack0 = local1;
//                        stack1 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack0 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BggetChildAt (local3);
                                } else { 
                                    stack0 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
//                        stack1 = 0;// JIT: redundant assigment, value unused
                        // 7 0::rotation
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.rotation = 0;
                        } else {
                            context.setproperty($names[3], 0, stack0);
                        }
                        // 7 0:levels::GenericScript
                        stack0 = scope0.findScopeProperty($names[6], true, false);
//                        stack1 = 14;// JIT: redundant assigment, value unused
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack2 = local1;
//                        stack3 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack2 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack2 = t.$BggetChildAt (local3);
                                } else { 
                                    stack2 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::x
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['x'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$Bgx;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[7]);
                            }
                        }
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack3 = local1;
//                        stack4 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack3 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack3 = t.$BggetChildAt (local3);
                                } else { 
                                    stack3 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::y
                        if (!(stack3 != undefined && stack3[AX_CLASS_SYMBOL])) {
                            stack3 = stack3['y'];
                        } else {
                            temp = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);
                            stack3 = temp.$Bgy;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[8]);
                            }
                        }
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack4 = local1;
//                        stack5 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack4 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack4 = t.$BggetChildAt (local3);
                                } else { 
                                    stack4 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::width
                        if (!(stack4 != undefined && stack4[AX_CLASS_SYMBOL])) {
                            stack4 = stack4['width'];
                        } else {
                            temp = stack4[AX_CLASS_SYMBOL] ? stack4 : sec.box(stack4);
                            stack4 = temp.$Bgwidth;
                            if (stack4 === undefined || typeof stack4 === 'function') {
                                stack4 = temp.axGetProperty($names[9]);
                            }
                        }
//                        stack5 = 2;// JIT: redundant assigment, value unused
                        stack4 /= 2;
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack5 = local1;
//                        stack6 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack5 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack5 = t.$BggetChildAt (local3);
                                } else { 
                                    stack5 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::height
                        //Possible type:undefined
                        if (!(stack5 != undefined && stack5[AX_CLASS_SYMBOL])) {
                            stack5 = stack5['height'];
                        } else {
                            temp = stack5[AX_CLASS_SYMBOL] ? stack5 : sec.box(stack5);
                            stack5 = temp.$Bgheight;
                            if (stack5 === undefined || typeof stack5 === 'function') {
                                stack5 = temp.axGetProperty($names[10]);
                            }
                        }
//                        stack6 = 2;// JIT: redundant assigment, value unused
                        stack5 /= 2;
//                        stack6 = local6;// JIT: redundant assigment, value unused
                        //JIT: Support fast construct:GenericScript/Object
                        stack0 = context.constructFast(stack0, [14, stack2, stack3, stack4, stack5, local6], $names[6]);
                        //IR: Drop coerce, reason: redundant
                        local5 = stack0;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::levelCollisions
                        //Possible type:7 0:levels::GenericScript
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack0 = this.$BglevelCollisions;
//                        stack1 = local5;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.push(local5);
                        } else {
                            // 7 0:http://adobe.com/AS3/2006/builtin::push
                            {
                                let t = stack0;
                                const m = t.$Bgpush || (t = sec.box(stack0), t.$Bgpush);
                                if( typeof m === "function" ) { 
                                    m.call(t, local5);
                                } else { 
                                   stack0.axCallProperty($names[11], [local5], false);
                                }
                            }
                        }
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack0 = local1;
//                        stack1 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack0 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BggetChildAt (local3);
                                } else { 
                                    stack0 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
//                        stack1 = false;// JIT: redundant assigment, value unused
                        // 7 0::visible
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.visible = false;
                        } else {
                            context.setproperty($names[12], false, stack0);
                        }
                        { p = 7023; continue; };
                    case 4710:
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack0 = local1;
//                        stack1 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack0 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BggetChildAt (local3);
                                } else { 
                                    stack0 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::LaserVerticalLeftSprite
                        temp = scope0.findScopeProperty($names[72], true, false);
                        stack1 = temp.$BgLaserVerticalLeftSprite;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[72]);
                        }
                        stack0 = stack1.axIsType(stack0);
                        if (!stack0) { p = 4806; continue; };
                        // 7 0:levels::GenericScript
                        stack0 = scope0.findScopeProperty($names[6], true, false);
//                        stack1 = 15;// JIT: redundant assigment, value unused
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack2 = local1;
//                        stack3 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack2 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack2 = t.$BggetChildAt (local3);
                                } else { 
                                    stack2 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::x
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['x'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$Bgx;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[7]);
                            }
                        }
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack3 = local1;
//                        stack4 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack3 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack3 = t.$BggetChildAt (local3);
                                } else { 
                                    stack3 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::y
                        if (!(stack3 != undefined && stack3[AX_CLASS_SYMBOL])) {
                            stack3 = stack3['y'];
                        } else {
                            temp = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);
                            stack3 = temp.$Bgy;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[8]);
                            }
                        }
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack4 = local1;
//                        stack5 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack4 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack4 = t.$BggetChildAt (local3);
                                } else { 
                                    stack4 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::width
                        if (!(stack4 != undefined && stack4[AX_CLASS_SYMBOL])) {
                            stack4 = stack4['width'];
                        } else {
                            temp = stack4[AX_CLASS_SYMBOL] ? stack4 : sec.box(stack4);
                            stack4 = temp.$Bgwidth;
                            if (stack4 === undefined || typeof stack4 === 'function') {
                                stack4 = temp.axGetProperty($names[9]);
                            }
                        }
//                        stack5 = 2;// JIT: redundant assigment, value unused
                        stack4 /= 2;
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack5 = local1;
//                        stack6 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack5 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack5 = t.$BggetChildAt (local3);
                                } else { 
                                    stack5 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::height
                        //Possible type:undefined
                        if (!(stack5 != undefined && stack5[AX_CLASS_SYMBOL])) {
                            stack5 = stack5['height'];
                        } else {
                            temp = stack5[AX_CLASS_SYMBOL] ? stack5 : sec.box(stack5);
                            stack5 = temp.$Bgheight;
                            if (stack5 === undefined || typeof stack5 === 'function') {
                                stack5 = temp.axGetProperty($names[10]);
                            }
                        }
//                        stack6 = 2;// JIT: redundant assigment, value unused
                        stack5 /= 2;
//                        stack6 = 0;// JIT: redundant assigment, value unused
                        //JIT: Support fast construct:GenericScript/Object
                        stack0 = context.constructFast(stack0, [15, stack2, stack3, stack4, stack5, 0], $names[6]);
                        //IR: Drop coerce, reason: redundant
                        local5 = stack0;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::levelCollisions
                        //Possible type:7 0:levels::GenericScript
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack0 = this.$BglevelCollisions;
//                        stack1 = local5;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.push(local5);
                        } else {
                            // 7 0:http://adobe.com/AS3/2006/builtin::push
                            {
                                let t = stack0;
                                const m = t.$Bgpush || (t = sec.box(stack0), t.$Bgpush);
                                if( typeof m === "function" ) { 
                                    m.call(t, local5);
                                } else { 
                                   stack0.axCallProperty($names[11], [local5], false);
                                }
                            }
                        }
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack0 = local1;
//                        stack1 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack0 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BggetChildAt (local3);
                                } else { 
                                    stack0 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
//                        stack1 = false;// JIT: redundant assigment, value unused
                        // 7 0::visible
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.visible = false;
                        } else {
                            context.setproperty($names[12], false, stack0);
                        }
                        { p = 7023; continue; };
                    case 4806:
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack0 = local1;
//                        stack1 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack0 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BggetChildAt (local3);
                                } else { 
                                    stack0 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::LaserVerticalRightSprite
                        temp = scope0.findScopeProperty($names[73], true, false);
                        stack1 = temp.$BgLaserVerticalRightSprite;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[73]);
                        }
                        stack0 = stack1.axIsType(stack0);
                        if (!stack0) { p = 4902; continue; };
                        // 7 0:levels::GenericScript
                        stack0 = scope0.findScopeProperty($names[6], true, false);
//                        stack1 = 15;// JIT: redundant assigment, value unused
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack2 = local1;
//                        stack3 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack2 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack2 = t.$BggetChildAt (local3);
                                } else { 
                                    stack2 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::x
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['x'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$Bgx;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[7]);
                            }
                        }
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack3 = local1;
//                        stack4 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack3 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack3 = t.$BggetChildAt (local3);
                                } else { 
                                    stack3 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::y
                        if (!(stack3 != undefined && stack3[AX_CLASS_SYMBOL])) {
                            stack3 = stack3['y'];
                        } else {
                            temp = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);
                            stack3 = temp.$Bgy;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[8]);
                            }
                        }
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack4 = local1;
//                        stack5 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack4 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack4 = t.$BggetChildAt (local3);
                                } else { 
                                    stack4 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::width
                        if (!(stack4 != undefined && stack4[AX_CLASS_SYMBOL])) {
                            stack4 = stack4['width'];
                        } else {
                            temp = stack4[AX_CLASS_SYMBOL] ? stack4 : sec.box(stack4);
                            stack4 = temp.$Bgwidth;
                            if (stack4 === undefined || typeof stack4 === 'function') {
                                stack4 = temp.axGetProperty($names[9]);
                            }
                        }
//                        stack5 = 2;// JIT: redundant assigment, value unused
                        stack4 /= 2;
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack5 = local1;
//                        stack6 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack5 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack5 = t.$BggetChildAt (local3);
                                } else { 
                                    stack5 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::height
                        //Possible type:undefined
                        if (!(stack5 != undefined && stack5[AX_CLASS_SYMBOL])) {
                            stack5 = stack5['height'];
                        } else {
                            temp = stack5[AX_CLASS_SYMBOL] ? stack5 : sec.box(stack5);
                            stack5 = temp.$Bgheight;
                            if (stack5 === undefined || typeof stack5 === 'function') {
                                stack5 = temp.axGetProperty($names[10]);
                            }
                        }
//                        stack6 = 2;// JIT: redundant assigment, value unused
                        stack5 /= 2;
//                        stack6 = 1;// JIT: redundant assigment, value unused
                        //JIT: Support fast construct:GenericScript/Object
                        stack0 = context.constructFast(stack0, [15, stack2, stack3, stack4, stack5, 1], $names[6]);
                        //IR: Drop coerce, reason: redundant
                        local5 = stack0;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::levelCollisions
                        //Possible type:7 0:levels::GenericScript
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack0 = this.$BglevelCollisions;
//                        stack1 = local5;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.push(local5);
                        } else {
                            // 7 0:http://adobe.com/AS3/2006/builtin::push
                            {
                                let t = stack0;
                                const m = t.$Bgpush || (t = sec.box(stack0), t.$Bgpush);
                                if( typeof m === "function" ) { 
                                    m.call(t, local5);
                                } else { 
                                   stack0.axCallProperty($names[11], [local5], false);
                                }
                            }
                        }
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack0 = local1;
//                        stack1 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack0 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BggetChildAt (local3);
                                } else { 
                                    stack0 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
//                        stack1 = false;// JIT: redundant assigment, value unused
                        // 7 0::visible
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.visible = false;
                        } else {
                            context.setproperty($names[12], false, stack0);
                        }
                        { p = 7023; continue; };
                    case 4902:
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack0 = local1;
//                        stack1 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack0 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BggetChildAt (local3);
                                } else { 
                                    stack0 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::FanArea
                        temp = scope0.findScopeProperty($names[74], true, false);
                        stack1 = temp.$BgFanArea;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[74]);
                        }
                        stack0 = stack1.axIsType(stack0);
                        if (!stack0) { p = 4992; continue; };
                        // 7 0:levels::GenericScript
                        stack0 = scope0.findScopeProperty($names[6], true, false);
//                        stack1 = 16;// JIT: redundant assigment, value unused
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack2 = local1;
//                        stack3 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack2 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack2 = t.$BggetChildAt (local3);
                                } else { 
                                    stack2 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::x
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['x'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$Bgx;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[7]);
                            }
                        }
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack3 = local1;
//                        stack4 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack3 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack3 = t.$BggetChildAt (local3);
                                } else { 
                                    stack3 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::y
                        if (!(stack3 != undefined && stack3[AX_CLASS_SYMBOL])) {
                            stack3 = stack3['y'];
                        } else {
                            temp = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);
                            stack3 = temp.$Bgy;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[8]);
                            }
                        }
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack4 = local1;
//                        stack5 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack4 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack4 = t.$BggetChildAt (local3);
                                } else { 
                                    stack4 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::width
                        if (!(stack4 != undefined && stack4[AX_CLASS_SYMBOL])) {
                            stack4 = stack4['width'];
                        } else {
                            temp = stack4[AX_CLASS_SYMBOL] ? stack4 : sec.box(stack4);
                            stack4 = temp.$Bgwidth;
                            if (stack4 === undefined || typeof stack4 === 'function') {
                                stack4 = temp.axGetProperty($names[9]);
                            }
                        }
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack5 = local1;
//                        stack6 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack5 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack5 = t.$BggetChildAt (local3);
                                } else { 
                                    stack5 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::height
                        if (!(stack5 != undefined && stack5[AX_CLASS_SYMBOL])) {
                            stack5 = stack5['height'];
                        } else {
                            temp = stack5[AX_CLASS_SYMBOL] ? stack5 : sec.box(stack5);
                            stack5 = temp.$Bgheight;
                            if (stack5 === undefined || typeof stack5 === 'function') {
                                stack5 = temp.axGetProperty($names[10]);
                            }
                        }
//                        stack6 = 0;// JIT: redundant assigment, value unused
                        //JIT: Support fast construct:GenericScript/Object
                        stack0 = context.constructFast(stack0, [16, stack2, stack3, stack4, stack5, 0], $names[6]);
                        //IR: Drop coerce, reason: redundant
                        local5 = stack0;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::levelCollisions
                        //Possible type:7 0:levels::GenericScript
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack0 = this.$BglevelCollisions;
//                        stack1 = local5;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.push(local5);
                        } else {
                            // 7 0:http://adobe.com/AS3/2006/builtin::push
                            {
                                let t = stack0;
                                const m = t.$Bgpush || (t = sec.box(stack0), t.$Bgpush);
                                if( typeof m === "function" ) { 
                                    m.call(t, local5);
                                } else { 
                                   stack0.axCallProperty($names[11], [local5], false);
                                }
                            }
                        }
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack0 = local1;
//                        stack1 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack0 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BggetChildAt (local3);
                                } else { 
                                    stack0 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
//                        stack1 = false;// JIT: redundant assigment, value unused
                        // 7 0::visible
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.visible = false;
                        } else {
                            context.setproperty($names[12], false, stack0);
                        }
                        { p = 7023; continue; };
                    case 4992:
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack0 = local1;
//                        stack1 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack0 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BggetChildAt (local3);
                                } else { 
                                    stack0 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::FanSprite
                        temp = scope0.findScopeProperty($names[75], true, false);
                        stack1 = temp.$BgFanSprite;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[75]);
                        }
                        stack0 = stack1.axIsType(stack0);
                        if (!stack0) { p = 5066; continue; };
                        // 7 0:levels::GenericScript
                        stack0 = scope0.findScopeProperty($names[6], true, false);
//                        stack1 = 25;// JIT: redundant assigment, value unused
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack2 = local1;
//                        stack3 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack2 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack2 = t.$BggetChildAt (local3);
                                } else { 
                                    stack2 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::x
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['x'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$Bgx;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[7]);
                            }
                        }
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack3 = local1;
//                        stack4 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack3 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack3 = t.$BggetChildAt (local3);
                                } else { 
                                    stack3 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::y
                        if (!(stack3 != undefined && stack3[AX_CLASS_SYMBOL])) {
                            stack3 = stack3['y'];
                        } else {
                            temp = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);
                            stack3 = temp.$Bgy;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[8]);
                            }
                        }
//                        stack4 = 0;// JIT: redundant assigment, value unused
                        //IR: DUP changed to PUSH*, reason: prevent optimisation
//                        stack5 = 0;// JIT: redundant assigment, value unused
                        //IR: DUP changed to PUSH*, reason: prevent optimisation
//                        stack6 = 0;// JIT: redundant assigment, value unused
                        //JIT: Support fast construct:GenericScript/Object
                        stack0 = context.constructFast(stack0, [25, stack2, stack3, 0, 0, 0], $names[6]);
                        //IR: Drop coerce, reason: redundant
                        local5 = stack0;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::levelCollisions
                        //Possible type:7 0:levels::GenericScript
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack0 = this.$BglevelCollisions;
//                        stack1 = local5;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.push(local5);
                        } else {
                            // 7 0:http://adobe.com/AS3/2006/builtin::push
                            {
                                let t = stack0;
                                const m = t.$Bgpush || (t = sec.box(stack0), t.$Bgpush);
                                if( typeof m === "function" ) { 
                                    m.call(t, local5);
                                } else { 
                                   stack0.axCallProperty($names[11], [local5], false);
                                }
                            }
                        }
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack0 = local1;
//                        stack1 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack0 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BggetChildAt (local3);
                                } else { 
                                    stack0 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
//                        stack1 = false;// JIT: redundant assigment, value unused
                        // 7 0::visible
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.visible = false;
                        } else {
                            context.setproperty($names[12], false, stack0);
                        }
                        { p = 7023; continue; };
                    case 5066:
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack0 = local1;
//                        stack1 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack0 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BggetChildAt (local3);
                                } else { 
                                    stack0 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::SpinningCircleSpriteClockwise
                        temp = scope0.findScopeProperty($names[76], true, false);
                        stack1 = temp.$BgSpinningCircleSpriteClockwise;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[76]);
                        }
                        stack0 = stack1.axIsType(stack0);
                        if (!stack0) { p = 5196; continue; };
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack0 = local1;
//                        stack1 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack0 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BggetChildAt (local3);
                                } else { 
                                    stack0 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::rotation
                        //Possible type:7 0::Array
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['rotation'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgrotation;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[3]);
                            }
                        }
                        // 7 0::Math
                        /* GenerateLexImports GETLEX */
//                        stack1 = __Math;// JIT: redundant assigment, value unused
                        // 7 0::PI
                        //Possible type:7 0::Math
                        if (!(__Math != undefined && __Math[AX_CLASS_SYMBOL])) {
                            stack1 = __Math['PI'];
                        } else {
                            temp = __Math[AX_CLASS_SYMBOL] ? __Math : sec.box(__Math);
                            stack1 = temp.$BgPI;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[5]);
                            }
                        }
                        stack0 *= stack1;
//                        stack1 = 180;// JIT: redundant assigment, value unused
                        stack0 /= 180;
                        stack0 = +stack0;
                        local6 = stack0;
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack0 = local1;
//                        stack1 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack0 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BggetChildAt (local3);
                                } else { 
                                    stack0 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
//                        stack1 = 0;// JIT: redundant assigment, value unused
                        // 7 0::rotation
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.rotation = 0;
                        } else {
                            context.setproperty($names[3], 0, stack0);
                        }
                        // 7 0:levels::GenericScript
                        stack0 = scope0.findScopeProperty($names[6], true, false);
//                        stack1 = 17;// JIT: redundant assigment, value unused
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack2 = local1;
//                        stack3 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack2 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack2 = t.$BggetChildAt (local3);
                                } else { 
                                    stack2 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::x
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['x'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$Bgx;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[7]);
                            }
                        }
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack3 = local1;
//                        stack4 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack3 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack3 = t.$BggetChildAt (local3);
                                } else { 
                                    stack3 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::y
                        if (!(stack3 != undefined && stack3[AX_CLASS_SYMBOL])) {
                            stack3 = stack3['y'];
                        } else {
                            temp = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);
                            stack3 = temp.$Bgy;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[8]);
                            }
                        }
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack4 = local1;
//                        stack5 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack4 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack4 = t.$BggetChildAt (local3);
                                } else { 
                                    stack4 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::width
                        //Possible type:undefined
                        if (!(stack4 != undefined && stack4[AX_CLASS_SYMBOL])) {
                            stack4 = stack4['width'];
                        } else {
                            temp = stack4[AX_CLASS_SYMBOL] ? stack4 : sec.box(stack4);
                            stack4 = temp.$Bgwidth;
                            if (stack4 === undefined || typeof stack4 === 'function') {
                                stack4 = temp.axGetProperty($names[9]);
                            }
                        }
//                        stack5 = 2;// JIT: redundant assigment, value unused
                        stack4 /= 2;
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack5 = local1;
//                        stack6 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack5 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack5 = t.$BggetChildAt (local3);
                                } else { 
                                    stack5 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::height
                        //Possible type:undefined
                        if (!(stack5 != undefined && stack5[AX_CLASS_SYMBOL])) {
                            stack5 = stack5['height'];
                        } else {
                            temp = stack5[AX_CLASS_SYMBOL] ? stack5 : sec.box(stack5);
                            stack5 = temp.$Bgheight;
                            if (stack5 === undefined || typeof stack5 === 'function') {
                                stack5 = temp.axGetProperty($names[10]);
                            }
                        }
//                        stack6 = 2;// JIT: redundant assigment, value unused
                        stack5 /= 2;
//                        stack6 = 0;// JIT: redundant assigment, value unused
                        //JIT: Support fast construct:GenericScript/Object
                        stack0 = context.constructFast(stack0, [17, stack2, stack3, stack4, stack5, 0], $names[6]);
                        //IR: Drop coerce, reason: redundant
                        local5 = stack0;
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack0 = local1;
//                        stack1 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack0 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BggetChildAt (local3);
                                } else { 
                                    stack0 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
//                        stack1 = false;// JIT: redundant assigment, value unused
                        // 7 0::visible
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.visible = false;
                        } else {
                            context.setproperty($names[12], false, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::levelCollisions
                        //Possible type:7 0:levels::GenericScript
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack0 = this.$BglevelCollisions;
//                        stack1 = local5;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.push(local5);
                        } else {
                            // 7 0:http://adobe.com/AS3/2006/builtin::push
                            {
                                let t = stack0;
                                const m = t.$Bgpush || (t = sec.box(stack0), t.$Bgpush);
                                if( typeof m === "function" ) { 
                                    m.call(t, local5);
                                } else { 
                                   stack0.axCallProperty($names[11], [local5], false);
                                }
                            }
                        }
                        { p = 7023; continue; };
                    case 5196:
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack0 = local1;
//                        stack1 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack0 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BggetChildAt (local3);
                                } else { 
                                    stack0 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::SpinningCircleSpriteCounterClockwise
                        temp = scope0.findScopeProperty($names[77], true, false);
                        stack1 = temp.$BgSpinningCircleSpriteCounterClockwise;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[77]);
                        }
                        stack0 = stack1.axIsType(stack0);
                        if (!stack0) { p = 5326; continue; };
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack0 = local1;
//                        stack1 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack0 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BggetChildAt (local3);
                                } else { 
                                    stack0 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::rotation
                        //Possible type:7 0::Array
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['rotation'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgrotation;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[3]);
                            }
                        }
                        // 7 0::Math
                        /* GenerateLexImports GETLEX */
//                        stack1 = __Math;// JIT: redundant assigment, value unused
                        // 7 0::PI
                        //Possible type:7 0::Math
                        if (!(__Math != undefined && __Math[AX_CLASS_SYMBOL])) {
                            stack1 = __Math['PI'];
                        } else {
                            temp = __Math[AX_CLASS_SYMBOL] ? __Math : sec.box(__Math);
                            stack1 = temp.$BgPI;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[5]);
                            }
                        }
                        stack0 *= stack1;
//                        stack1 = 180;// JIT: redundant assigment, value unused
                        stack0 /= 180;
                        stack0 = +stack0;
                        local6 = stack0;
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack0 = local1;
//                        stack1 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack0 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BggetChildAt (local3);
                                } else { 
                                    stack0 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
//                        stack1 = 0;// JIT: redundant assigment, value unused
                        // 7 0::rotation
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.rotation = 0;
                        } else {
                            context.setproperty($names[3], 0, stack0);
                        }
                        // 7 0:levels::GenericScript
                        stack0 = scope0.findScopeProperty($names[6], true, false);
//                        stack1 = 17;// JIT: redundant assigment, value unused
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack2 = local1;
//                        stack3 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack2 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack2 = t.$BggetChildAt (local3);
                                } else { 
                                    stack2 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::x
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['x'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$Bgx;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[7]);
                            }
                        }
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack3 = local1;
//                        stack4 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack3 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack3 = t.$BggetChildAt (local3);
                                } else { 
                                    stack3 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::y
                        if (!(stack3 != undefined && stack3[AX_CLASS_SYMBOL])) {
                            stack3 = stack3['y'];
                        } else {
                            temp = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);
                            stack3 = temp.$Bgy;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[8]);
                            }
                        }
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack4 = local1;
//                        stack5 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack4 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack4 = t.$BggetChildAt (local3);
                                } else { 
                                    stack4 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::width
                        if (!(stack4 != undefined && stack4[AX_CLASS_SYMBOL])) {
                            stack4 = stack4['width'];
                        } else {
                            temp = stack4[AX_CLASS_SYMBOL] ? stack4 : sec.box(stack4);
                            stack4 = temp.$Bgwidth;
                            if (stack4 === undefined || typeof stack4 === 'function') {
                                stack4 = temp.axGetProperty($names[9]);
                            }
                        }
//                        stack5 = 2;// JIT: redundant assigment, value unused
                        stack4 /= 2;
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack5 = local1;
//                        stack6 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack5 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack5 = t.$BggetChildAt (local3);
                                } else { 
                                    stack5 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::height
                        //Possible type:undefined
                        if (!(stack5 != undefined && stack5[AX_CLASS_SYMBOL])) {
                            stack5 = stack5['height'];
                        } else {
                            temp = stack5[AX_CLASS_SYMBOL] ? stack5 : sec.box(stack5);
                            stack5 = temp.$Bgheight;
                            if (stack5 === undefined || typeof stack5 === 'function') {
                                stack5 = temp.axGetProperty($names[10]);
                            }
                        }
//                        stack6 = 2;// JIT: redundant assigment, value unused
                        stack5 /= 2;
//                        stack6 = 1;// JIT: redundant assigment, value unused
                        //JIT: Support fast construct:GenericScript/Object
                        stack0 = context.constructFast(stack0, [17, stack2, stack3, stack4, stack5, 1], $names[6]);
                        //IR: Drop coerce, reason: redundant
                        local5 = stack0;
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack0 = local1;
//                        stack1 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack0 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BggetChildAt (local3);
                                } else { 
                                    stack0 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
//                        stack1 = false;// JIT: redundant assigment, value unused
                        // 7 0::visible
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.visible = false;
                        } else {
                            context.setproperty($names[12], false, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::levelCollisions
                        //Possible type:7 0:levels::GenericScript
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack0 = this.$BglevelCollisions;
//                        stack1 = local5;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.push(local5);
                        } else {
                            // 7 0:http://adobe.com/AS3/2006/builtin::push
                            {
                                let t = stack0;
                                const m = t.$Bgpush || (t = sec.box(stack0), t.$Bgpush);
                                if( typeof m === "function" ) { 
                                    m.call(t, local5);
                                } else { 
                                   stack0.axCallProperty($names[11], [local5], false);
                                }
                            }
                        }
                        { p = 7023; continue; };
                    case 5326:
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack0 = local1;
//                        stack1 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack0 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BggetChildAt (local3);
                                } else { 
                                    stack0 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::LaserHorizontalTopSprite
                        temp = scope0.findScopeProperty($names[78], true, false);
                        stack1 = temp.$BgLaserHorizontalTopSprite;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[78]);
                        }
                        stack0 = stack1.axIsType(stack0);
                        if (!stack0) { p = 5422; continue; };
                        // 7 0:levels::GenericScript
                        stack0 = scope0.findScopeProperty($names[6], true, false);
//                        stack1 = 18;// JIT: redundant assigment, value unused
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack2 = local1;
//                        stack3 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack2 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack2 = t.$BggetChildAt (local3);
                                } else { 
                                    stack2 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::x
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['x'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$Bgx;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[7]);
                            }
                        }
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack3 = local1;
//                        stack4 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack3 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack3 = t.$BggetChildAt (local3);
                                } else { 
                                    stack3 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::y
                        if (!(stack3 != undefined && stack3[AX_CLASS_SYMBOL])) {
                            stack3 = stack3['y'];
                        } else {
                            temp = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);
                            stack3 = temp.$Bgy;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[8]);
                            }
                        }
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack4 = local1;
//                        stack5 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack4 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack4 = t.$BggetChildAt (local3);
                                } else { 
                                    stack4 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::width
                        if (!(stack4 != undefined && stack4[AX_CLASS_SYMBOL])) {
                            stack4 = stack4['width'];
                        } else {
                            temp = stack4[AX_CLASS_SYMBOL] ? stack4 : sec.box(stack4);
                            stack4 = temp.$Bgwidth;
                            if (stack4 === undefined || typeof stack4 === 'function') {
                                stack4 = temp.axGetProperty($names[9]);
                            }
                        }
//                        stack5 = 2;// JIT: redundant assigment, value unused
                        stack4 /= 2;
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack5 = local1;
//                        stack6 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack5 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack5 = t.$BggetChildAt (local3);
                                } else { 
                                    stack5 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::height
                        //Possible type:undefined
                        if (!(stack5 != undefined && stack5[AX_CLASS_SYMBOL])) {
                            stack5 = stack5['height'];
                        } else {
                            temp = stack5[AX_CLASS_SYMBOL] ? stack5 : sec.box(stack5);
                            stack5 = temp.$Bgheight;
                            if (stack5 === undefined || typeof stack5 === 'function') {
                                stack5 = temp.axGetProperty($names[10]);
                            }
                        }
//                        stack6 = 2;// JIT: redundant assigment, value unused
                        stack5 /= 2;
//                        stack6 = 0;// JIT: redundant assigment, value unused
                        //JIT: Support fast construct:GenericScript/Object
                        stack0 = context.constructFast(stack0, [18, stack2, stack3, stack4, stack5, 0], $names[6]);
                        //IR: Drop coerce, reason: redundant
                        local5 = stack0;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::levelCollisions
                        //Possible type:7 0:levels::GenericScript
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack0 = this.$BglevelCollisions;
//                        stack1 = local5;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.push(local5);
                        } else {
                            // 7 0:http://adobe.com/AS3/2006/builtin::push
                            {
                                let t = stack0;
                                const m = t.$Bgpush || (t = sec.box(stack0), t.$Bgpush);
                                if( typeof m === "function" ) { 
                                    m.call(t, local5);
                                } else { 
                                   stack0.axCallProperty($names[11], [local5], false);
                                }
                            }
                        }
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack0 = local1;
//                        stack1 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack0 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BggetChildAt (local3);
                                } else { 
                                    stack0 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
//                        stack1 = false;// JIT: redundant assigment, value unused
                        // 7 0::visible
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.visible = false;
                        } else {
                            context.setproperty($names[12], false, stack0);
                        }
                        { p = 7023; continue; };
                    case 5422:
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack0 = local1;
//                        stack1 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack0 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BggetChildAt (local3);
                                } else { 
                                    stack0 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::LaserHorizontalBottomSprite
                        temp = scope0.findScopeProperty($names[79], true, false);
                        stack1 = temp.$BgLaserHorizontalBottomSprite;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[79]);
                        }
                        stack0 = stack1.axIsType(stack0);
                        if (!stack0) { p = 5518; continue; };
                        // 7 0:levels::GenericScript
                        stack0 = scope0.findScopeProperty($names[6], true, false);
//                        stack1 = 18;// JIT: redundant assigment, value unused
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack2 = local1;
//                        stack3 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack2 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack2 = t.$BggetChildAt (local3);
                                } else { 
                                    stack2 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::x
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['x'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$Bgx;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[7]);
                            }
                        }
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack3 = local1;
//                        stack4 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack3 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack3 = t.$BggetChildAt (local3);
                                } else { 
                                    stack3 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::y
                        if (!(stack3 != undefined && stack3[AX_CLASS_SYMBOL])) {
                            stack3 = stack3['y'];
                        } else {
                            temp = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);
                            stack3 = temp.$Bgy;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[8]);
                            }
                        }
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack4 = local1;
//                        stack5 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack4 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack4 = t.$BggetChildAt (local3);
                                } else { 
                                    stack4 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::width
                        if (!(stack4 != undefined && stack4[AX_CLASS_SYMBOL])) {
                            stack4 = stack4['width'];
                        } else {
                            temp = stack4[AX_CLASS_SYMBOL] ? stack4 : sec.box(stack4);
                            stack4 = temp.$Bgwidth;
                            if (stack4 === undefined || typeof stack4 === 'function') {
                                stack4 = temp.axGetProperty($names[9]);
                            }
                        }
//                        stack5 = 2;// JIT: redundant assigment, value unused
                        stack4 /= 2;
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack5 = local1;
//                        stack6 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack5 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack5 = t.$BggetChildAt (local3);
                                } else { 
                                    stack5 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::height
                        //Possible type:undefined
                        if (!(stack5 != undefined && stack5[AX_CLASS_SYMBOL])) {
                            stack5 = stack5['height'];
                        } else {
                            temp = stack5[AX_CLASS_SYMBOL] ? stack5 : sec.box(stack5);
                            stack5 = temp.$Bgheight;
                            if (stack5 === undefined || typeof stack5 === 'function') {
                                stack5 = temp.axGetProperty($names[10]);
                            }
                        }
//                        stack6 = 2;// JIT: redundant assigment, value unused
                        stack5 /= 2;
//                        stack6 = 1;// JIT: redundant assigment, value unused
                        //JIT: Support fast construct:GenericScript/Object
                        stack0 = context.constructFast(stack0, [18, stack2, stack3, stack4, stack5, 1], $names[6]);
                        //IR: Drop coerce, reason: redundant
                        local5 = stack0;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::levelCollisions
                        //Possible type:7 0:levels::GenericScript
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack0 = this.$BglevelCollisions;
//                        stack1 = local5;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.push(local5);
                        } else {
                            // 7 0:http://adobe.com/AS3/2006/builtin::push
                            {
                                let t = stack0;
                                const m = t.$Bgpush || (t = sec.box(stack0), t.$Bgpush);
                                if( typeof m === "function" ) { 
                                    m.call(t, local5);
                                } else { 
                                   stack0.axCallProperty($names[11], [local5], false);
                                }
                            }
                        }
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack0 = local1;
//                        stack1 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack0 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BggetChildAt (local3);
                                } else { 
                                    stack0 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
//                        stack1 = false;// JIT: redundant assigment, value unused
                        // 7 0::visible
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.visible = false;
                        } else {
                            context.setproperty($names[12], false, stack0);
                        }
                        { p = 7023; continue; };
                    case 5518:
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack0 = local1;
//                        stack1 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack0 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BggetChildAt (local3);
                                } else { 
                                    stack0 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::LaserStaticHorizontalBottomSprite
                        temp = scope0.findScopeProperty($names[80], true, false);
                        stack1 = temp.$BgLaserStaticHorizontalBottomSprite;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[80]);
                        }
                        stack0 = stack1.axIsType(stack0);
                        if (!stack0) { p = 5614; continue; };
                        // 7 0:levels::GenericScript
                        stack0 = scope0.findScopeProperty($names[6], true, false);
//                        stack1 = 26;// JIT: redundant assigment, value unused
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack2 = local1;
//                        stack3 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack2 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack2 = t.$BggetChildAt (local3);
                                } else { 
                                    stack2 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::x
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['x'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$Bgx;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[7]);
                            }
                        }
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack3 = local1;
//                        stack4 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack3 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack3 = t.$BggetChildAt (local3);
                                } else { 
                                    stack3 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::y
                        if (!(stack3 != undefined && stack3[AX_CLASS_SYMBOL])) {
                            stack3 = stack3['y'];
                        } else {
                            temp = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);
                            stack3 = temp.$Bgy;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[8]);
                            }
                        }
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack4 = local1;
//                        stack5 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack4 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack4 = t.$BggetChildAt (local3);
                                } else { 
                                    stack4 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::width
                        if (!(stack4 != undefined && stack4[AX_CLASS_SYMBOL])) {
                            stack4 = stack4['width'];
                        } else {
                            temp = stack4[AX_CLASS_SYMBOL] ? stack4 : sec.box(stack4);
                            stack4 = temp.$Bgwidth;
                            if (stack4 === undefined || typeof stack4 === 'function') {
                                stack4 = temp.axGetProperty($names[9]);
                            }
                        }
//                        stack5 = 2;// JIT: redundant assigment, value unused
                        stack4 /= 2;
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack5 = local1;
//                        stack6 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack5 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack5 = t.$BggetChildAt (local3);
                                } else { 
                                    stack5 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::height
                        //Possible type:undefined
                        if (!(stack5 != undefined && stack5[AX_CLASS_SYMBOL])) {
                            stack5 = stack5['height'];
                        } else {
                            temp = stack5[AX_CLASS_SYMBOL] ? stack5 : sec.box(stack5);
                            stack5 = temp.$Bgheight;
                            if (stack5 === undefined || typeof stack5 === 'function') {
                                stack5 = temp.axGetProperty($names[10]);
                            }
                        }
//                        stack6 = 2;// JIT: redundant assigment, value unused
                        stack5 /= 2;
//                        stack6 = 1;// JIT: redundant assigment, value unused
                        //JIT: Support fast construct:GenericScript/Object
                        stack0 = context.constructFast(stack0, [26, stack2, stack3, stack4, stack5, 1], $names[6]);
                        //IR: Drop coerce, reason: redundant
                        local5 = stack0;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::levelCollisions
                        //Possible type:7 0:levels::GenericScript
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack0 = this.$BglevelCollisions;
//                        stack1 = local5;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.push(local5);
                        } else {
                            // 7 0:http://adobe.com/AS3/2006/builtin::push
                            {
                                let t = stack0;
                                const m = t.$Bgpush || (t = sec.box(stack0), t.$Bgpush);
                                if( typeof m === "function" ) { 
                                    m.call(t, local5);
                                } else { 
                                   stack0.axCallProperty($names[11], [local5], false);
                                }
                            }
                        }
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack0 = local1;
//                        stack1 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack0 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BggetChildAt (local3);
                                } else { 
                                    stack0 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
//                        stack1 = false;// JIT: redundant assigment, value unused
                        // 7 0::visible
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.visible = false;
                        } else {
                            context.setproperty($names[12], false, stack0);
                        }
                        { p = 7023; continue; };
                    case 5614:
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack0 = local1;
//                        stack1 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack0 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BggetChildAt (local3);
                                } else { 
                                    stack0 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::TickScript
                        temp = scope0.findScopeProperty($names[81], true, false);
                        stack1 = temp.$BgTickScript;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[81]);
                        }
                        stack0 = stack1.axIsType(stack0);
                        if (!stack0) { p = 5686; continue; };
                        // 7 0:levels::GenericScript
                        stack0 = scope0.findScopeProperty($names[6], true, false);
//                        stack1 = 27;// JIT: redundant assigment, value unused
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack2 = local1;
//                        stack3 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack2 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack2 = t.$BggetChildAt (local3);
                                } else { 
                                    stack2 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::x
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['x'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$Bgx;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[7]);
                            }
                        }
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack3 = local1;
//                        stack4 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack3 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack3 = t.$BggetChildAt (local3);
                                } else { 
                                    stack3 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::y
                        if (!(stack3 != undefined && stack3[AX_CLASS_SYMBOL])) {
                            stack3 = stack3['y'];
                        } else {
                            temp = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);
                            stack3 = temp.$Bgy;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[8]);
                            }
                        }
//                        stack4 = 0;// JIT: redundant assigment, value unused
                        //JIT: Support fast construct:GenericScript/Object
                        stack0 = context.constructFast(stack0, [27, stack2, stack3, 0], $names[6]);
                        //IR: Drop coerce, reason: redundant
                        local5 = stack0;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::levelCollisions
                        //Possible type:7 0:levels::GenericScript
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack0 = this.$BglevelCollisions;
//                        stack1 = local5;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.push(local5);
                        } else {
                            // 7 0:http://adobe.com/AS3/2006/builtin::push
                            {
                                let t = stack0;
                                const m = t.$Bgpush || (t = sec.box(stack0), t.$Bgpush);
                                if( typeof m === "function" ) { 
                                    m.call(t, local5);
                                } else { 
                                   stack0.axCallProperty($names[11], [local5], false);
                                }
                            }
                        }
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack0 = local1;
//                        stack1 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack0 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BggetChildAt (local3);
                                } else { 
                                    stack0 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
//                        stack1 = false;// JIT: redundant assigment, value unused
                        // 7 0::visible
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.visible = false;
                        } else {
                            context.setproperty($names[12], false, stack0);
                        }
                        { p = 7023; continue; };
                    case 5686:
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack0 = local1;
//                        stack1 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack0 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BggetChildAt (local3);
                                } else { 
                                    stack0 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::TockScript
                        temp = scope0.findScopeProperty($names[82], true, false);
                        stack1 = temp.$BgTockScript;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[82]);
                        }
                        stack0 = stack1.axIsType(stack0);
                        if (!stack0) { p = 5758; continue; };
                        // 7 0:levels::GenericScript
                        stack0 = scope0.findScopeProperty($names[6], true, false);
//                        stack1 = 27;// JIT: redundant assigment, value unused
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack2 = local1;
//                        stack3 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack2 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack2 = t.$BggetChildAt (local3);
                                } else { 
                                    stack2 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::x
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['x'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$Bgx;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[7]);
                            }
                        }
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack3 = local1;
//                        stack4 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack3 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack3 = t.$BggetChildAt (local3);
                                } else { 
                                    stack3 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::y
                        if (!(stack3 != undefined && stack3[AX_CLASS_SYMBOL])) {
                            stack3 = stack3['y'];
                        } else {
                            temp = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);
                            stack3 = temp.$Bgy;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[8]);
                            }
                        }
//                        stack4 = 1;// JIT: redundant assigment, value unused
                        //JIT: Support fast construct:GenericScript/Object
                        stack0 = context.constructFast(stack0, [27, stack2, stack3, 1], $names[6]);
                        //IR: Drop coerce, reason: redundant
                        local5 = stack0;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::levelCollisions
                        //Possible type:7 0:levels::GenericScript
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack0 = this.$BglevelCollisions;
//                        stack1 = local5;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.push(local5);
                        } else {
                            // 7 0:http://adobe.com/AS3/2006/builtin::push
                            {
                                let t = stack0;
                                const m = t.$Bgpush || (t = sec.box(stack0), t.$Bgpush);
                                if( typeof m === "function" ) { 
                                    m.call(t, local5);
                                } else { 
                                   stack0.axCallProperty($names[11], [local5], false);
                                }
                            }
                        }
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack0 = local1;
//                        stack1 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack0 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BggetChildAt (local3);
                                } else { 
                                    stack0 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
//                        stack1 = false;// JIT: redundant assigment, value unused
                        // 7 0::visible
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.visible = false;
                        } else {
                            context.setproperty($names[12], false, stack0);
                        }
                        { p = 7023; continue; };
                    case 5758:
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack0 = local1;
//                        stack1 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack0 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BggetChildAt (local3);
                                } else { 
                                    stack0 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::ReverseGravitySprite
                        temp = scope0.findScopeProperty($names[83], true, false);
                        stack1 = temp.$BgReverseGravitySprite;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[83]);
                        }
                        stack0 = stack1.axIsType(stack0);
                        if (!stack0) { p = 5849; continue; };
                        // 7 0:levels::GenericScript
                        stack0 = scope0.findScopeProperty($names[6], true, false);
//                        stack1 = 190;// JIT: redundant assigment, value unused
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack2 = local1;
//                        stack3 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack2 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack2 = t.$BggetChildAt (local3);
                                } else { 
                                    stack2 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::x
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['x'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$Bgx;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[7]);
                            }
                        }
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack3 = local1;
//                        stack4 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack3 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack3 = t.$BggetChildAt (local3);
                                } else { 
                                    stack3 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::y
                        if (!(stack3 != undefined && stack3[AX_CLASS_SYMBOL])) {
                            stack3 = stack3['y'];
                        } else {
                            temp = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);
                            stack3 = temp.$Bgy;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[8]);
                            }
                        }
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack4 = local1;
//                        stack5 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack4 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack4 = t.$BggetChildAt (local3);
                                } else { 
                                    stack4 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::width
                        //Possible type:undefined
                        if (!(stack4 != undefined && stack4[AX_CLASS_SYMBOL])) {
                            stack4 = stack4['width'];
                        } else {
                            temp = stack4[AX_CLASS_SYMBOL] ? stack4 : sec.box(stack4);
                            stack4 = temp.$Bgwidth;
                            if (stack4 === undefined || typeof stack4 === 'function') {
                                stack4 = temp.axGetProperty($names[9]);
                            }
                        }
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack5 = local1;
//                        stack6 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack5 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack5 = t.$BggetChildAt (local3);
                                } else { 
                                    stack5 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::height
                        if (!(stack5 != undefined && stack5[AX_CLASS_SYMBOL])) {
                            stack5 = stack5['height'];
                        } else {
                            temp = stack5[AX_CLASS_SYMBOL] ? stack5 : sec.box(stack5);
                            stack5 = temp.$Bgheight;
                            if (stack5 === undefined || typeof stack5 === 'function') {
                                stack5 = temp.axGetProperty($names[10]);
                            }
                        }
//                        stack6 = 0;// JIT: redundant assigment, value unused
                        //JIT: Support fast construct:GenericScript/Object
                        stack0 = context.constructFast(stack0, [190, stack2, stack3, stack4, stack5, 0], $names[6]);
                        //IR: Drop coerce, reason: redundant
                        local5 = stack0;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::levelCollisions
                        //Possible type:7 0:levels::GenericScript
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack0 = this.$BglevelCollisions;
//                        stack1 = local5;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.push(local5);
                        } else {
                            // 7 0:http://adobe.com/AS3/2006/builtin::push
                            {
                                let t = stack0;
                                const m = t.$Bgpush || (t = sec.box(stack0), t.$Bgpush);
                                if( typeof m === "function" ) { 
                                    m.call(t, local5);
                                } else { 
                                   stack0.axCallProperty($names[11], [local5], false);
                                }
                            }
                        }
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack0 = local1;
//                        stack1 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack0 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BggetChildAt (local3);
                                } else { 
                                    stack0 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
//                        stack1 = false;// JIT: redundant assigment, value unused
                        // 7 0::visible
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.visible = false;
                        } else {
                            context.setproperty($names[12], false, stack0);
                        }
                        { p = 7023; continue; };
                    case 5849:
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack0 = local1;
//                        stack1 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack0 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BggetChildAt (local3);
                                } else { 
                                    stack0 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::ReverseGravitySprite2
                        temp = scope0.findScopeProperty($names[84], true, false);
                        stack1 = temp.$BgReverseGravitySprite2;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[84]);
                        }
                        stack0 = stack1.axIsType(stack0);
                        if (!stack0) { p = 5940; continue; };
                        // 7 0:levels::GenericScript
                        stack0 = scope0.findScopeProperty($names[6], true, false);
//                        stack1 = 190;// JIT: redundant assigment, value unused
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack2 = local1;
//                        stack3 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack2 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack2 = t.$BggetChildAt (local3);
                                } else { 
                                    stack2 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::x
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['x'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$Bgx;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[7]);
                            }
                        }
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack3 = local1;
//                        stack4 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack3 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack3 = t.$BggetChildAt (local3);
                                } else { 
                                    stack3 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::y
                        if (!(stack3 != undefined && stack3[AX_CLASS_SYMBOL])) {
                            stack3 = stack3['y'];
                        } else {
                            temp = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);
                            stack3 = temp.$Bgy;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[8]);
                            }
                        }
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack4 = local1;
//                        stack5 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack4 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack4 = t.$BggetChildAt (local3);
                                } else { 
                                    stack4 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::width
                        if (!(stack4 != undefined && stack4[AX_CLASS_SYMBOL])) {
                            stack4 = stack4['width'];
                        } else {
                            temp = stack4[AX_CLASS_SYMBOL] ? stack4 : sec.box(stack4);
                            stack4 = temp.$Bgwidth;
                            if (stack4 === undefined || typeof stack4 === 'function') {
                                stack4 = temp.axGetProperty($names[9]);
                            }
                        }
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack5 = local1;
//                        stack6 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack5 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack5 = t.$BggetChildAt (local3);
                                } else { 
                                    stack5 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::height
                        if (!(stack5 != undefined && stack5[AX_CLASS_SYMBOL])) {
                            stack5 = stack5['height'];
                        } else {
                            temp = stack5[AX_CLASS_SYMBOL] ? stack5 : sec.box(stack5);
                            stack5 = temp.$Bgheight;
                            if (stack5 === undefined || typeof stack5 === 'function') {
                                stack5 = temp.axGetProperty($names[10]);
                            }
                        }
//                        stack6 = 1;// JIT: redundant assigment, value unused
                        //JIT: Support fast construct:GenericScript/Object
                        stack0 = context.constructFast(stack0, [190, stack2, stack3, stack4, stack5, 1], $names[6]);
                        //IR: Drop coerce, reason: redundant
                        local5 = stack0;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::levelCollisions
                        //Possible type:7 0:levels::GenericScript
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack0 = this.$BglevelCollisions;
//                        stack1 = local5;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.push(local5);
                        } else {
                            // 7 0:http://adobe.com/AS3/2006/builtin::push
                            {
                                let t = stack0;
                                const m = t.$Bgpush || (t = sec.box(stack0), t.$Bgpush);
                                if( typeof m === "function" ) { 
                                    m.call(t, local5);
                                } else { 
                                   stack0.axCallProperty($names[11], [local5], false);
                                }
                            }
                        }
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack0 = local1;
//                        stack1 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack0 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BggetChildAt (local3);
                                } else { 
                                    stack0 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
//                        stack1 = false;// JIT: redundant assigment, value unused
                        // 7 0::visible
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.visible = false;
                        } else {
                            context.setproperty($names[12], false, stack0);
                        }
                        { p = 7023; continue; };
                    case 5940:
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack0 = local1;
//                        stack1 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack0 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BggetChildAt (local3);
                                } else { 
                                    stack0 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::PlatformCollisionSprite
                        temp = scope0.findScopeProperty($names[85], true, false);
                        stack1 = temp.$BgPlatformCollisionSprite;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[85]);
                        }
                        stack0 = stack1.axIsType(stack0);
                        if (!stack0) { p = 6038; continue; };
                        // 7 0:levels::GenericScript
                        stack0 = scope0.findScopeProperty($names[6], true, false);
//                        stack1 = 33;// JIT: redundant assigment, value unused
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack2 = local1;
//                        stack3 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack2 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack2 = t.$BggetChildAt (local3);
                                } else { 
                                    stack2 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::x
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['x'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$Bgx;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[7]);
                            }
                        }
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack3 = local1;
//                        stack4 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack3 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack3 = t.$BggetChildAt (local3);
                                } else { 
                                    stack3 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::y
                        if (!(stack3 != undefined && stack3[AX_CLASS_SYMBOL])) {
                            stack3 = stack3['y'];
                        } else {
                            temp = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);
                            stack3 = temp.$Bgy;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[8]);
                            }
                        }
//                        stack4 = this;// JIT: redundant assigment, value unused
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack5 = local1;
//                        stack6 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack5 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack5 = t.$BggetChildAt (local3);
                                } else { 
                                    stack5 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::name
                        if (!(stack5 != undefined && stack5[AX_CLASS_SYMBOL])) {
                            stack5 = stack5['name'];
                        } else {
                            temp = stack5[AX_CLASS_SYMBOL] ? stack5 : sec.box(stack5);
                            stack5 = temp.$Bgname;
                            if (stack5 === undefined || typeof stack5 === 'function') {
                                stack5 = temp.axGetProperty($names[25]);
                            }
                        }
                        /* We sure that this safe call, represented in TRAIT as Method  */ 
                        stack4 = this.$BggetSecondParamValue(stack5);
//                        stack5 = this;// JIT: redundant assigment, value unused
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack6 = local1;
//                        stack7 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack6 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack6 = t.$BggetChildAt (local3);
                                } else { 
                                    stack6 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::name
                        //Possible type:undefined
                        if (!(stack6 != undefined && stack6[AX_CLASS_SYMBOL])) {
                            stack6 = stack6['name'];
                        } else {
                            temp = stack6[AX_CLASS_SYMBOL] ? stack6 : sec.box(stack6);
                            stack6 = temp.$Bgname;
                            if (stack6 === undefined || typeof stack6 === 'function') {
                                stack6 = temp.axGetProperty($names[25]);
                            }
                        }
                        /* We sure that this safe call, represented in TRAIT as Method  */ 
                        stack5 = this.$BggetFourthParamValue(stack6);
                        //JIT: Support fast construct:GenericScript/Object
                        stack0 = context.constructFast(stack0, [33, stack2, stack3, stack4, stack5], $names[6]);
                        //IR: Drop coerce, reason: redundant
                        local5 = stack0;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::levelCollisions
                        //Possible type:7 0:levels::GenericScript
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack0 = this.$BglevelCollisions;
//                        stack1 = local5;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.push(local5);
                        } else {
                            // 7 0:http://adobe.com/AS3/2006/builtin::push
                            {
                                let t = stack0;
                                const m = t.$Bgpush || (t = sec.box(stack0), t.$Bgpush);
                                if( typeof m === "function" ) { 
                                    m.call(t, local5);
                                } else { 
                                   stack0.axCallProperty($names[11], [local5], false);
                                }
                            }
                        }
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack0 = local1;
//                        stack1 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack0 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BggetChildAt (local3);
                                } else { 
                                    stack0 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
//                        stack1 = false;// JIT: redundant assigment, value unused
                        // 7 0::visible
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.visible = false;
                        } else {
                            context.setproperty($names[12], false, stack0);
                        }
                        { p = 7023; continue; };
                    case 6038:
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack0 = local1;
//                        stack1 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack0 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BggetChildAt (local3);
                                } else { 
                                    stack0 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::DownGravityChangerSprite
                        temp = scope0.findScopeProperty($names[86], true, false);
                        stack1 = temp.$BgDownGravityChangerSprite;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[86]);
                        }
                        stack0 = stack1.axIsType(stack0);
                        if (!stack0) { p = 6128; continue; };
                        // 7 0:levels::GenericScript
                        stack0 = scope0.findScopeProperty($names[6], true, false);
//                        stack1 = 19;// JIT: redundant assigment, value unused
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack2 = local1;
//                        stack3 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack2 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack2 = t.$BggetChildAt (local3);
                                } else { 
                                    stack2 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::x
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['x'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$Bgx;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[7]);
                            }
                        }
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack3 = local1;
//                        stack4 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack3 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack3 = t.$BggetChildAt (local3);
                                } else { 
                                    stack3 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::y
                        if (!(stack3 != undefined && stack3[AX_CLASS_SYMBOL])) {
                            stack3 = stack3['y'];
                        } else {
                            temp = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);
                            stack3 = temp.$Bgy;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[8]);
                            }
                        }
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack4 = local1;
//                        stack5 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack4 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack4 = t.$BggetChildAt (local3);
                                } else { 
                                    stack4 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::width
                        if (!(stack4 != undefined && stack4[AX_CLASS_SYMBOL])) {
                            stack4 = stack4['width'];
                        } else {
                            temp = stack4[AX_CLASS_SYMBOL] ? stack4 : sec.box(stack4);
                            stack4 = temp.$Bgwidth;
                            if (stack4 === undefined || typeof stack4 === 'function') {
                                stack4 = temp.axGetProperty($names[9]);
                            }
                        }
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack5 = local1;
//                        stack6 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack5 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack5 = t.$BggetChildAt (local3);
                                } else { 
                                    stack5 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::height
                        if (!(stack5 != undefined && stack5[AX_CLASS_SYMBOL])) {
                            stack5 = stack5['height'];
                        } else {
                            temp = stack5[AX_CLASS_SYMBOL] ? stack5 : sec.box(stack5);
                            stack5 = temp.$Bgheight;
                            if (stack5 === undefined || typeof stack5 === 'function') {
                                stack5 = temp.axGetProperty($names[10]);
                            }
                        }
//                        stack6 = 0;// JIT: redundant assigment, value unused
                        //JIT: Support fast construct:GenericScript/Object
                        stack0 = context.constructFast(stack0, [19, stack2, stack3, stack4, stack5, 0], $names[6]);
                        //IR: Drop coerce, reason: redundant
                        local5 = stack0;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::levelCollisions
                        //Possible type:7 0:levels::GenericScript
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack0 = this.$BglevelCollisions;
//                        stack1 = local5;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.push(local5);
                        } else {
                            // 7 0:http://adobe.com/AS3/2006/builtin::push
                            {
                                let t = stack0;
                                const m = t.$Bgpush || (t = sec.box(stack0), t.$Bgpush);
                                if( typeof m === "function" ) { 
                                    m.call(t, local5);
                                } else { 
                                   stack0.axCallProperty($names[11], [local5], false);
                                }
                            }
                        }
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack0 = local1;
//                        stack1 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack0 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BggetChildAt (local3);
                                } else { 
                                    stack0 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
//                        stack1 = false;// JIT: redundant assigment, value unused
                        // 7 0::visible
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.visible = false;
                        } else {
                            context.setproperty($names[12], false, stack0);
                        }
                        { p = 7023; continue; };
                    case 6128:
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack0 = local1;
//                        stack1 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack0 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BggetChildAt (local3);
                                } else { 
                                    stack0 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::UpGravityChangerSpriteEnd
                        temp = scope0.findScopeProperty($names[87], true, false);
                        stack1 = temp.$BgUpGravityChangerSpriteEnd;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[87]);
                        }
                        stack0 = stack1.axIsType(stack0);
                        if (!stack0) { p = 6220; continue; };
                        // 7 0:levels::GenericScript
                        stack0 = scope0.findScopeProperty($names[6], true, false);
//                        stack1 = 19;// JIT: redundant assigment, value unused
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack2 = local1;
//                        stack3 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack2 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack2 = t.$BggetChildAt (local3);
                                } else { 
                                    stack2 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::x
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['x'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$Bgx;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[7]);
                            }
                        }
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack3 = local1;
//                        stack4 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack3 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack3 = t.$BggetChildAt (local3);
                                } else { 
                                    stack3 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::y
                        if (!(stack3 != undefined && stack3[AX_CLASS_SYMBOL])) {
                            stack3 = stack3['y'];
                        } else {
                            temp = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);
                            stack3 = temp.$Bgy;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[8]);
                            }
                        }
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack4 = local1;
//                        stack5 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack4 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack4 = t.$BggetChildAt (local3);
                                } else { 
                                    stack4 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::width
                        if (!(stack4 != undefined && stack4[AX_CLASS_SYMBOL])) {
                            stack4 = stack4['width'];
                        } else {
                            temp = stack4[AX_CLASS_SYMBOL] ? stack4 : sec.box(stack4);
                            stack4 = temp.$Bgwidth;
                            if (stack4 === undefined || typeof stack4 === 'function') {
                                stack4 = temp.axGetProperty($names[9]);
                            }
                        }
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack5 = local1;
//                        stack6 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack5 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack5 = t.$BggetChildAt (local3);
                                } else { 
                                    stack5 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::height
                        if (!(stack5 != undefined && stack5[AX_CLASS_SYMBOL])) {
                            stack5 = stack5['height'];
                        } else {
                            temp = stack5[AX_CLASS_SYMBOL] ? stack5 : sec.box(stack5);
                            stack5 = temp.$Bgheight;
                            if (stack5 === undefined || typeof stack5 === 'function') {
                                stack5 = temp.axGetProperty($names[10]);
                            }
                        }
//                        stack6 = 1;// JIT: redundant assigment, value unused
//                        stack7 = 0;// JIT: redundant assigment, value unused
                        //JIT: Support fast construct:GenericScript/Object
                        stack0 = context.constructFast(stack0, [19, stack2, stack3, stack4, stack5, 1, 0], $names[6]);
                        //IR: Drop coerce, reason: redundant
                        local5 = stack0;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::levelCollisions
                        //Possible type:7 0:levels::GenericScript
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack0 = this.$BglevelCollisions;
//                        stack1 = local5;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.push(local5);
                        } else {
                            // 7 0:http://adobe.com/AS3/2006/builtin::push
                            {
                                let t = stack0;
                                const m = t.$Bgpush || (t = sec.box(stack0), t.$Bgpush);
                                if( typeof m === "function" ) { 
                                    m.call(t, local5);
                                } else { 
                                   stack0.axCallProperty($names[11], [local5], false);
                                }
                            }
                        }
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack0 = local1;
//                        stack1 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack0 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BggetChildAt (local3);
                                } else { 
                                    stack0 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
//                        stack1 = false;// JIT: redundant assigment, value unused
                        // 7 0::visible
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.visible = false;
                        } else {
                            context.setproperty($names[12], false, stack0);
                        }
                        { p = 7023; continue; };
                    case 6220:
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack0 = local1;
//                        stack1 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack0 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BggetChildAt (local3);
                                } else { 
                                    stack0 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::UpGravityChangerSprite
                        temp = scope0.findScopeProperty($names[88], true, false);
                        stack1 = temp.$BgUpGravityChangerSprite;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[88]);
                        }
                        stack0 = stack1.axIsType(stack0);
                        if (!stack0) { p = 6311; continue; };
                        // 7 0:levels::GenericScript
                        stack0 = scope0.findScopeProperty($names[6], true, false);
//                        stack1 = 19;// JIT: redundant assigment, value unused
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack2 = local1;
//                        stack3 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack2 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack2 = t.$BggetChildAt (local3);
                                } else { 
                                    stack2 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::x
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['x'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$Bgx;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[7]);
                            }
                        }
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack3 = local1;
//                        stack4 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack3 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack3 = t.$BggetChildAt (local3);
                                } else { 
                                    stack3 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::y
                        if (!(stack3 != undefined && stack3[AX_CLASS_SYMBOL])) {
                            stack3 = stack3['y'];
                        } else {
                            temp = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);
                            stack3 = temp.$Bgy;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[8]);
                            }
                        }
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack4 = local1;
//                        stack5 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack4 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack4 = t.$BggetChildAt (local3);
                                } else { 
                                    stack4 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::width
                        if (!(stack4 != undefined && stack4[AX_CLASS_SYMBOL])) {
                            stack4 = stack4['width'];
                        } else {
                            temp = stack4[AX_CLASS_SYMBOL] ? stack4 : sec.box(stack4);
                            stack4 = temp.$Bgwidth;
                            if (stack4 === undefined || typeof stack4 === 'function') {
                                stack4 = temp.axGetProperty($names[9]);
                            }
                        }
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack5 = local1;
//                        stack6 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack5 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack5 = t.$BggetChildAt (local3);
                                } else { 
                                    stack5 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::height
                        if (!(stack5 != undefined && stack5[AX_CLASS_SYMBOL])) {
                            stack5 = stack5['height'];
                        } else {
                            temp = stack5[AX_CLASS_SYMBOL] ? stack5 : sec.box(stack5);
                            stack5 = temp.$Bgheight;
                            if (stack5 === undefined || typeof stack5 === 'function') {
                                stack5 = temp.axGetProperty($names[10]);
                            }
                        }
//                        stack6 = 1;// JIT: redundant assigment, value unused
                        //IR: DUP changed to PUSH*, reason: prevent optimisation
//                        stack7 = 1;// JIT: redundant assigment, value unused
                        //JIT: Support fast construct:GenericScript/Object
                        stack0 = context.constructFast(stack0, [19, stack2, stack3, stack4, stack5, 1, 1], $names[6]);
                        //IR: Drop coerce, reason: redundant
                        local5 = stack0;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::levelCollisions
                        //Possible type:7 0:levels::GenericScript
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack0 = this.$BglevelCollisions;
//                        stack1 = local5;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.push(local5);
                        } else {
                            // 7 0:http://adobe.com/AS3/2006/builtin::push
                            {
                                let t = stack0;
                                const m = t.$Bgpush || (t = sec.box(stack0), t.$Bgpush);
                                if( typeof m === "function" ) { 
                                    m.call(t, local5);
                                } else { 
                                   stack0.axCallProperty($names[11], [local5], false);
                                }
                            }
                        }
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack0 = local1;
//                        stack1 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack0 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BggetChildAt (local3);
                                } else { 
                                    stack0 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
//                        stack1 = false;// JIT: redundant assigment, value unused
                        // 7 0::visible
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.visible = false;
                        } else {
                            context.setproperty($names[12], false, stack0);
                        }
                        { p = 7023; continue; };
                    case 6311:
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack0 = local1;
//                        stack1 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack0 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BggetChildAt (local3);
                                } else { 
                                    stack0 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::DoubleSpikeTile
                        temp = scope0.findScopeProperty($names[89], true, false);
                        stack1 = temp.$BgDoubleSpikeTile;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[89]);
                        }
                        stack0 = stack1.axIsType(stack0);
                        if (!stack0) { p = 6401; continue; };
                        // 7 0:levels::GenericScript
                        stack0 = scope0.findScopeProperty($names[6], true, false);
//                        stack1 = 20;// JIT: redundant assigment, value unused
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack2 = local1;
//                        stack3 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack2 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack2 = t.$BggetChildAt (local3);
                                } else { 
                                    stack2 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::x
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['x'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$Bgx;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[7]);
                            }
                        }
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack3 = local1;
//                        stack4 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack3 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack3 = t.$BggetChildAt (local3);
                                } else { 
                                    stack3 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::y
                        if (!(stack3 != undefined && stack3[AX_CLASS_SYMBOL])) {
                            stack3 = stack3['y'];
                        } else {
                            temp = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);
                            stack3 = temp.$Bgy;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[8]);
                            }
                        }
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack4 = local1;
//                        stack5 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack4 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack4 = t.$BggetChildAt (local3);
                                } else { 
                                    stack4 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::width
                        if (!(stack4 != undefined && stack4[AX_CLASS_SYMBOL])) {
                            stack4 = stack4['width'];
                        } else {
                            temp = stack4[AX_CLASS_SYMBOL] ? stack4 : sec.box(stack4);
                            stack4 = temp.$Bgwidth;
                            if (stack4 === undefined || typeof stack4 === 'function') {
                                stack4 = temp.axGetProperty($names[9]);
                            }
                        }
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack5 = local1;
//                        stack6 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack5 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack5 = t.$BggetChildAt (local3);
                                } else { 
                                    stack5 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::height
                        if (!(stack5 != undefined && stack5[AX_CLASS_SYMBOL])) {
                            stack5 = stack5['height'];
                        } else {
                            temp = stack5[AX_CLASS_SYMBOL] ? stack5 : sec.box(stack5);
                            stack5 = temp.$Bgheight;
                            if (stack5 === undefined || typeof stack5 === 'function') {
                                stack5 = temp.axGetProperty($names[10]);
                            }
                        }
//                        stack6 = 0;// JIT: redundant assigment, value unused
                        //JIT: Support fast construct:GenericScript/Object
                        stack0 = context.constructFast(stack0, [20, stack2, stack3, stack4, stack5, 0], $names[6]);
                        //IR: Drop coerce, reason: redundant
                        local5 = stack0;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::levelCollisions
                        //Possible type:7 0:levels::GenericScript
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack0 = this.$BglevelCollisions;
//                        stack1 = local5;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.push(local5);
                        } else {
                            // 7 0:http://adobe.com/AS3/2006/builtin::push
                            {
                                let t = stack0;
                                const m = t.$Bgpush || (t = sec.box(stack0), t.$Bgpush);
                                if( typeof m === "function" ) { 
                                    m.call(t, local5);
                                } else { 
                                   stack0.axCallProperty($names[11], [local5], false);
                                }
                            }
                        }
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack0 = local1;
//                        stack1 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack0 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BggetChildAt (local3);
                                } else { 
                                    stack0 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
//                        stack1 = false;// JIT: redundant assigment, value unused
                        // 7 0::visible
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.visible = false;
                        } else {
                            context.setproperty($names[12], false, stack0);
                        }
                        { p = 7023; continue; };
                    case 6401:
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack0 = local1;
//                        stack1 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack0 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BggetChildAt (local3);
                                } else { 
                                    stack0 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::DoubleSpikeCeilTile
                        temp = scope0.findScopeProperty($names[90], true, false);
                        stack1 = temp.$BgDoubleSpikeCeilTile;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[90]);
                        }
                        stack0 = stack1.axIsType(stack0);
                        if (!stack0) { p = 6491; continue; };
                        // 7 0:levels::GenericScript
                        stack0 = scope0.findScopeProperty($names[6], true, false);
//                        stack1 = 20;// JIT: redundant assigment, value unused
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack2 = local1;
//                        stack3 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack2 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack2 = t.$BggetChildAt (local3);
                                } else { 
                                    stack2 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::x
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['x'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$Bgx;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[7]);
                            }
                        }
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack3 = local1;
//                        stack4 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack3 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack3 = t.$BggetChildAt (local3);
                                } else { 
                                    stack3 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::y
                        if (!(stack3 != undefined && stack3[AX_CLASS_SYMBOL])) {
                            stack3 = stack3['y'];
                        } else {
                            temp = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);
                            stack3 = temp.$Bgy;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[8]);
                            }
                        }
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack4 = local1;
//                        stack5 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack4 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack4 = t.$BggetChildAt (local3);
                                } else { 
                                    stack4 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::width
                        if (!(stack4 != undefined && stack4[AX_CLASS_SYMBOL])) {
                            stack4 = stack4['width'];
                        } else {
                            temp = stack4[AX_CLASS_SYMBOL] ? stack4 : sec.box(stack4);
                            stack4 = temp.$Bgwidth;
                            if (stack4 === undefined || typeof stack4 === 'function') {
                                stack4 = temp.axGetProperty($names[9]);
                            }
                        }
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack5 = local1;
//                        stack6 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack5 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack5 = t.$BggetChildAt (local3);
                                } else { 
                                    stack5 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::height
                        if (!(stack5 != undefined && stack5[AX_CLASS_SYMBOL])) {
                            stack5 = stack5['height'];
                        } else {
                            temp = stack5[AX_CLASS_SYMBOL] ? stack5 : sec.box(stack5);
                            stack5 = temp.$Bgheight;
                            if (stack5 === undefined || typeof stack5 === 'function') {
                                stack5 = temp.axGetProperty($names[10]);
                            }
                        }
//                        stack6 = 1;// JIT: redundant assigment, value unused
                        //JIT: Support fast construct:GenericScript/Object
                        stack0 = context.constructFast(stack0, [20, stack2, stack3, stack4, stack5, 1], $names[6]);
                        //IR: Drop coerce, reason: redundant
                        local5 = stack0;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::levelCollisions
                        //Possible type:7 0:levels::GenericScript
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack0 = this.$BglevelCollisions;
//                        stack1 = local5;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.push(local5);
                        } else {
                            // 7 0:http://adobe.com/AS3/2006/builtin::push
                            {
                                let t = stack0;
                                const m = t.$Bgpush || (t = sec.box(stack0), t.$Bgpush);
                                if( typeof m === "function" ) { 
                                    m.call(t, local5);
                                } else { 
                                   stack0.axCallProperty($names[11], [local5], false);
                                }
                            }
                        }
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack0 = local1;
//                        stack1 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack0 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BggetChildAt (local3);
                                } else { 
                                    stack0 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
//                        stack1 = false;// JIT: redundant assigment, value unused
                        // 7 0::visible
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.visible = false;
                        } else {
                            context.setproperty($names[12], false, stack0);
                        }
                        { p = 7023; continue; };
                    case 6491:
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack0 = local1;
//                        stack1 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack0 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BggetChildAt (local3);
                                } else { 
                                    stack0 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::TunnelCircleTile
                        temp = scope0.findScopeProperty($names[91], true, false);
                        stack1 = temp.$BgTunnelCircleTile;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[91]);
                        }
                        stack0 = stack1.axIsType(stack0);
                        if (!stack0) { p = 6621; continue; };
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack0 = local1;
//                        stack1 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack0 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BggetChildAt (local3);
                                } else { 
                                    stack0 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::rotation
                        //Possible type:7 0::Array
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['rotation'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgrotation;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[3]);
                            }
                        }
                        // 7 0::Math
                        /* GenerateLexImports GETLEX */
//                        stack1 = __Math;// JIT: redundant assigment, value unused
                        // 7 0::PI
                        //Possible type:7 0::Math
                        if (!(__Math != undefined && __Math[AX_CLASS_SYMBOL])) {
                            stack1 = __Math['PI'];
                        } else {
                            temp = __Math[AX_CLASS_SYMBOL] ? __Math : sec.box(__Math);
                            stack1 = temp.$BgPI;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[5]);
                            }
                        }
                        stack0 *= stack1;
//                        stack1 = 180;// JIT: redundant assigment, value unused
                        stack0 /= 180;
                        stack0 = +stack0;
                        local6 = stack0;
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack0 = local1;
//                        stack1 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack0 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BggetChildAt (local3);
                                } else { 
                                    stack0 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
//                        stack1 = 0;// JIT: redundant assigment, value unused
                        // 7 0::rotation
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.rotation = 0;
                        } else {
                            context.setproperty($names[3], 0, stack0);
                        }
                        // 7 0:levels::GenericScript
                        stack0 = scope0.findScopeProperty($names[6], true, false);
//                        stack1 = 21;// JIT: redundant assigment, value unused
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack2 = local1;
//                        stack3 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack2 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack2 = t.$BggetChildAt (local3);
                                } else { 
                                    stack2 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::x
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['x'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$Bgx;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[7]);
                            }
                        }
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack3 = local1;
//                        stack4 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack3 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack3 = t.$BggetChildAt (local3);
                                } else { 
                                    stack3 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::y
                        if (!(stack3 != undefined && stack3[AX_CLASS_SYMBOL])) {
                            stack3 = stack3['y'];
                        } else {
                            temp = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);
                            stack3 = temp.$Bgy;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[8]);
                            }
                        }
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack4 = local1;
//                        stack5 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack4 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack4 = t.$BggetChildAt (local3);
                                } else { 
                                    stack4 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::width
                        if (!(stack4 != undefined && stack4[AX_CLASS_SYMBOL])) {
                            stack4 = stack4['width'];
                        } else {
                            temp = stack4[AX_CLASS_SYMBOL] ? stack4 : sec.box(stack4);
                            stack4 = temp.$Bgwidth;
                            if (stack4 === undefined || typeof stack4 === 'function') {
                                stack4 = temp.axGetProperty($names[9]);
                            }
                        }
//                        stack5 = 2;// JIT: redundant assigment, value unused
                        stack4 /= 2;
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack5 = local1;
//                        stack6 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack5 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack5 = t.$BggetChildAt (local3);
                                } else { 
                                    stack5 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::height
                        //Possible type:undefined
                        if (!(stack5 != undefined && stack5[AX_CLASS_SYMBOL])) {
                            stack5 = stack5['height'];
                        } else {
                            temp = stack5[AX_CLASS_SYMBOL] ? stack5 : sec.box(stack5);
                            stack5 = temp.$Bgheight;
                            if (stack5 === undefined || typeof stack5 === 'function') {
                                stack5 = temp.axGetProperty($names[10]);
                            }
                        }
//                        stack6 = 2;// JIT: redundant assigment, value unused
                        stack5 /= 2;
//                        stack6 = local6;// JIT: redundant assigment, value unused
                        //JIT: Support fast construct:GenericScript/Object
                        stack0 = context.constructFast(stack0, [21, stack2, stack3, stack4, stack5, local6], $names[6]);
                        //IR: Drop coerce, reason: redundant
                        local5 = stack0;
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack0 = local1;
//                        stack1 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack0 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BggetChildAt (local3);
                                } else { 
                                    stack0 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
//                        stack1 = false;// JIT: redundant assigment, value unused
                        // 7 0::visible
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.visible = false;
                        } else {
                            context.setproperty($names[12], false, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::levelCollisions
                        //Possible type:7 0:levels::GenericScript
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack0 = this.$BglevelCollisions;
//                        stack1 = local5;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.push(local5);
                        } else {
                            // 7 0:http://adobe.com/AS3/2006/builtin::push
                            {
                                let t = stack0;
                                const m = t.$Bgpush || (t = sec.box(stack0), t.$Bgpush);
                                if( typeof m === "function" ) { 
                                    m.call(t, local5);
                                } else { 
                                   stack0.axCallProperty($names[11], [local5], false);
                                }
                            }
                        }
                        { p = 7023; continue; };
                    case 6621:
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack0 = local1;
//                        stack1 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack0 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BggetChildAt (local3);
                                } else { 
                                    stack0 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::PitCircleTile
                        temp = scope0.findScopeProperty($names[92], true, false);
                        stack1 = temp.$BgPitCircleTile;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[92]);
                        }
                        stack0 = stack1.axIsType(stack0);
                        if (!stack0) { p = 6717; continue; };
                        // 7 0:levels::GenericScript
                        stack0 = scope0.findScopeProperty($names[6], true, false);
//                        stack1 = 22;// JIT: redundant assigment, value unused
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack2 = local1;
//                        stack3 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack2 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack2 = t.$BggetChildAt (local3);
                                } else { 
                                    stack2 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::x
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['x'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$Bgx;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[7]);
                            }
                        }
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack3 = local1;
//                        stack4 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack3 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack3 = t.$BggetChildAt (local3);
                                } else { 
                                    stack3 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::y
                        if (!(stack3 != undefined && stack3[AX_CLASS_SYMBOL])) {
                            stack3 = stack3['y'];
                        } else {
                            temp = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);
                            stack3 = temp.$Bgy;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[8]);
                            }
                        }
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack4 = local1;
//                        stack5 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack4 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack4 = t.$BggetChildAt (local3);
                                } else { 
                                    stack4 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::width
                        if (!(stack4 != undefined && stack4[AX_CLASS_SYMBOL])) {
                            stack4 = stack4['width'];
                        } else {
                            temp = stack4[AX_CLASS_SYMBOL] ? stack4 : sec.box(stack4);
                            stack4 = temp.$Bgwidth;
                            if (stack4 === undefined || typeof stack4 === 'function') {
                                stack4 = temp.axGetProperty($names[9]);
                            }
                        }
//                        stack5 = 2;// JIT: redundant assigment, value unused
                        stack4 /= 2;
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack5 = local1;
//                        stack6 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack5 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack5 = t.$BggetChildAt (local3);
                                } else { 
                                    stack5 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::height
                        //Possible type:undefined
                        if (!(stack5 != undefined && stack5[AX_CLASS_SYMBOL])) {
                            stack5 = stack5['height'];
                        } else {
                            temp = stack5[AX_CLASS_SYMBOL] ? stack5 : sec.box(stack5);
                            stack5 = temp.$Bgheight;
                            if (stack5 === undefined || typeof stack5 === 'function') {
                                stack5 = temp.axGetProperty($names[10]);
                            }
                        }
//                        stack6 = 2;// JIT: redundant assigment, value unused
                        stack5 /= 2;
//                        stack6 = 0;// JIT: redundant assigment, value unused
                        //JIT: Support fast construct:GenericScript/Object
                        stack0 = context.constructFast(stack0, [22, stack2, stack3, stack4, stack5, 0], $names[6]);
                        //IR: Drop coerce, reason: redundant
                        local5 = stack0;
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack0 = local1;
//                        stack1 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack0 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BggetChildAt (local3);
                                } else { 
                                    stack0 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
//                        stack1 = false;// JIT: redundant assigment, value unused
                        // 7 0::visible
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.visible = false;
                        } else {
                            context.setproperty($names[12], false, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::levelCollisions
                        //Possible type:7 0:levels::GenericScript
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack0 = this.$BglevelCollisions;
//                        stack1 = local5;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.push(local5);
                        } else {
                            // 7 0:http://adobe.com/AS3/2006/builtin::push
                            {
                                let t = stack0;
                                const m = t.$Bgpush || (t = sec.box(stack0), t.$Bgpush);
                                if( typeof m === "function" ) { 
                                    m.call(t, local5);
                                } else { 
                                   stack0.axCallProperty($names[11], [local5], false);
                                }
                            }
                        }
                        { p = 7023; continue; };
                    case 6717:
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack0 = local1;
//                        stack1 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack0 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BggetChildAt (local3);
                                } else { 
                                    stack0 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::SlimeSplitterInSprite
                        temp = scope0.findScopeProperty($names[93], true, false);
                        stack1 = temp.$BgSlimeSplitterInSprite;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[93]);
                        }
                        stack0 = stack1.axIsType(stack0);
                        if (!stack0) { p = 6807; continue; };
                        // 7 0:levels::GenericScript
                        stack0 = scope0.findScopeProperty($names[6], true, false);
//                        stack1 = 23;// JIT: redundant assigment, value unused
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack2 = local1;
//                        stack3 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack2 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack2 = t.$BggetChildAt (local3);
                                } else { 
                                    stack2 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::x
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['x'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$Bgx;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[7]);
                            }
                        }
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack3 = local1;
//                        stack4 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack3 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack3 = t.$BggetChildAt (local3);
                                } else { 
                                    stack3 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::y
                        if (!(stack3 != undefined && stack3[AX_CLASS_SYMBOL])) {
                            stack3 = stack3['y'];
                        } else {
                            temp = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);
                            stack3 = temp.$Bgy;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[8]);
                            }
                        }
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack4 = local1;
//                        stack5 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack4 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack4 = t.$BggetChildAt (local3);
                                } else { 
                                    stack4 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::width
                        if (!(stack4 != undefined && stack4[AX_CLASS_SYMBOL])) {
                            stack4 = stack4['width'];
                        } else {
                            temp = stack4[AX_CLASS_SYMBOL] ? stack4 : sec.box(stack4);
                            stack4 = temp.$Bgwidth;
                            if (stack4 === undefined || typeof stack4 === 'function') {
                                stack4 = temp.axGetProperty($names[9]);
                            }
                        }
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack5 = local1;
//                        stack6 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack5 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack5 = t.$BggetChildAt (local3);
                                } else { 
                                    stack5 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::height
                        if (!(stack5 != undefined && stack5[AX_CLASS_SYMBOL])) {
                            stack5 = stack5['height'];
                        } else {
                            temp = stack5[AX_CLASS_SYMBOL] ? stack5 : sec.box(stack5);
                            stack5 = temp.$Bgheight;
                            if (stack5 === undefined || typeof stack5 === 'function') {
                                stack5 = temp.axGetProperty($names[10]);
                            }
                        }
//                        stack6 = 0;// JIT: redundant assigment, value unused
                        //JIT: Support fast construct:GenericScript/Object
                        stack0 = context.constructFast(stack0, [23, stack2, stack3, stack4, stack5, 0], $names[6]);
                        //IR: Drop coerce, reason: redundant
                        local5 = stack0;
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack0 = local1;
//                        stack1 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack0 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BggetChildAt (local3);
                                } else { 
                                    stack0 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
//                        stack1 = false;// JIT: redundant assigment, value unused
                        // 7 0::visible
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.visible = false;
                        } else {
                            context.setproperty($names[12], false, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::levelCollisions
                        //Possible type:7 0:levels::GenericScript
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack0 = this.$BglevelCollisions;
//                        stack1 = local5;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.push(local5);
                        } else {
                            // 7 0:http://adobe.com/AS3/2006/builtin::push
                            {
                                let t = stack0;
                                const m = t.$Bgpush || (t = sec.box(stack0), t.$Bgpush);
                                if( typeof m === "function" ) { 
                                    m.call(t, local5);
                                } else { 
                                   stack0.axCallProperty($names[11], [local5], false);
                                }
                            }
                        }
                        { p = 7023; continue; };
                    case 6807:
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack0 = local1;
//                        stack1 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack0 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BggetChildAt (local3);
                                } else { 
                                    stack0 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::SlimeSplitterOutSprite
                        temp = scope0.findScopeProperty($names[94], true, false);
                        stack1 = temp.$BgSlimeSplitterOutSprite;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[94]);
                        }
                        stack0 = stack1.axIsType(stack0);
                        if (!stack0) { p = 6897; continue; };
                        // 7 0:levels::GenericScript
                        stack0 = scope0.findScopeProperty($names[6], true, false);
//                        stack1 = 24;// JIT: redundant assigment, value unused
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack2 = local1;
//                        stack3 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack2 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack2 = t.$BggetChildAt (local3);
                                } else { 
                                    stack2 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::x
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['x'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$Bgx;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[7]);
                            }
                        }
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack3 = local1;
//                        stack4 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack3 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack3 = t.$BggetChildAt (local3);
                                } else { 
                                    stack3 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::y
                        if (!(stack3 != undefined && stack3[AX_CLASS_SYMBOL])) {
                            stack3 = stack3['y'];
                        } else {
                            temp = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);
                            stack3 = temp.$Bgy;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[8]);
                            }
                        }
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack4 = local1;
//                        stack5 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack4 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack4 = t.$BggetChildAt (local3);
                                } else { 
                                    stack4 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::width
                        if (!(stack4 != undefined && stack4[AX_CLASS_SYMBOL])) {
                            stack4 = stack4['width'];
                        } else {
                            temp = stack4[AX_CLASS_SYMBOL] ? stack4 : sec.box(stack4);
                            stack4 = temp.$Bgwidth;
                            if (stack4 === undefined || typeof stack4 === 'function') {
                                stack4 = temp.axGetProperty($names[9]);
                            }
                        }
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack5 = local1;
//                        stack6 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack5 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack5 = t.$BggetChildAt (local3);
                                } else { 
                                    stack5 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::height
                        if (!(stack5 != undefined && stack5[AX_CLASS_SYMBOL])) {
                            stack5 = stack5['height'];
                        } else {
                            temp = stack5[AX_CLASS_SYMBOL] ? stack5 : sec.box(stack5);
                            stack5 = temp.$Bgheight;
                            if (stack5 === undefined || typeof stack5 === 'function') {
                                stack5 = temp.axGetProperty($names[10]);
                            }
                        }
//                        stack6 = 0;// JIT: redundant assigment, value unused
                        //JIT: Support fast construct:GenericScript/Object
                        stack0 = context.constructFast(stack0, [24, stack2, stack3, stack4, stack5, 0], $names[6]);
                        //IR: Drop coerce, reason: redundant
                        local5 = stack0;
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack0 = local1;
//                        stack1 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack0 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BggetChildAt (local3);
                                } else { 
                                    stack0 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
//                        stack1 = false;// JIT: redundant assigment, value unused
                        // 7 0::visible
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.visible = false;
                        } else {
                            context.setproperty($names[12], false, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::levelCollisions
                        //Possible type:7 0:levels::GenericScript
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack0 = this.$BglevelCollisions;
//                        stack1 = local5;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.push(local5);
                        } else {
                            // 7 0:http://adobe.com/AS3/2006/builtin::push
                            {
                                let t = stack0;
                                const m = t.$Bgpush || (t = sec.box(stack0), t.$Bgpush);
                                if( typeof m === "function" ) { 
                                    m.call(t, local5);
                                } else { 
                                   stack0.axCallProperty($names[11], [local5], false);
                                }
                            }
                        }
                        { p = 7023; continue; };
                    case 6897:
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack0 = local1;
//                        stack1 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack0 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BggetChildAt (local3);
                                } else { 
                                    stack0 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::CrateSprite
                        temp = scope0.findScopeProperty($names[95], true, false);
                        stack1 = temp.$BgCrateSprite;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[95]);
                        }
                        stack0 = stack1.axIsType(stack0);
                        if (!stack0) { p = 7023; continue; };
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack0 = local1;
//                        stack1 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack0 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BggetChildAt (local3);
                                } else { 
                                    stack0 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::rotation
                        //Possible type:7 0::Array
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['rotation'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgrotation;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[3]);
                            }
                        }
                        // 7 0::Math
                        /* GenerateLexImports GETLEX */
//                        stack1 = __Math;// JIT: redundant assigment, value unused
                        // 7 0::PI
                        //Possible type:7 0::Math
                        if (!(__Math != undefined && __Math[AX_CLASS_SYMBOL])) {
                            stack1 = __Math['PI'];
                        } else {
                            temp = __Math[AX_CLASS_SYMBOL] ? __Math : sec.box(__Math);
                            stack1 = temp.$BgPI;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[5]);
                            }
                        }
                        stack0 *= stack1;
//                        stack1 = 180;// JIT: redundant assigment, value unused
                        stack0 /= 180;
                        stack0 = +stack0;
                        local6 = stack0;
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack0 = local1;
//                        stack1 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack0 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BggetChildAt (local3);
                                } else { 
                                    stack0 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
//                        stack1 = 0;// JIT: redundant assigment, value unused
                        // 7 0::rotation
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.rotation = 0;
                        } else {
                            context.setproperty($names[3], 0, stack0);
                        }
                        // 7 0:levels::GenericScript
                        stack0 = scope0.findScopeProperty($names[6], true, false);
//                        stack1 = 29;// JIT: redundant assigment, value unused
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack2 = local1;
//                        stack3 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack2 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack2 = t.$BggetChildAt (local3);
                                } else { 
                                    stack2 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::x
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['x'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$Bgx;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[7]);
                            }
                        }
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack3 = local1;
//                        stack4 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack3 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack3 = t.$BggetChildAt (local3);
                                } else { 
                                    stack3 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::y
                        if (!(stack3 != undefined && stack3[AX_CLASS_SYMBOL])) {
                            stack3 = stack3['y'];
                        } else {
                            temp = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);
                            stack3 = temp.$Bgy;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[8]);
                            }
                        }
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack4 = local1;
//                        stack5 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack4 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack4 = t.$BggetChildAt (local3);
                                } else { 
                                    stack4 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::width
                        if (!(stack4 != undefined && stack4[AX_CLASS_SYMBOL])) {
                            stack4 = stack4['width'];
                        } else {
                            temp = stack4[AX_CLASS_SYMBOL] ? stack4 : sec.box(stack4);
                            stack4 = temp.$Bgwidth;
                            if (stack4 === undefined || typeof stack4 === 'function') {
                                stack4 = temp.axGetProperty($names[9]);
                            }
                        }
//                        stack5 = 2;// JIT: redundant assigment, value unused
                        stack4 /= 2;
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack5 = local1;
//                        stack6 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack5 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack5 = t.$BggetChildAt (local3);
                                } else { 
                                    stack5 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
                        // 7 0::height
                        //Possible type:undefined
                        if (!(stack5 != undefined && stack5[AX_CLASS_SYMBOL])) {
                            stack5 = stack5['height'];
                        } else {
                            temp = stack5[AX_CLASS_SYMBOL] ? stack5 : sec.box(stack5);
                            stack5 = temp.$Bgheight;
                            if (stack5 === undefined || typeof stack5 === 'function') {
                                stack5 = temp.axGetProperty($names[10]);
                            }
                        }
//                        stack6 = 2;// JIT: redundant assigment, value unused
                        stack5 /= 2;
//                        stack6 = local6;// JIT: redundant assigment, value unused
                        //JIT: Support fast construct:GenericScript/Object
                        stack0 = context.constructFast(stack0, [29, stack2, stack3, stack4, stack5, local6], $names[6]);
                        //IR: Drop coerce, reason: redundant
                        local5 = stack0;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::levelCollisions
                        //Possible type:7 0:levels::GenericScript
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack0 = this.$BglevelCollisions;
//                        stack1 = local5;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.push(local5);
                        } else {
                            // 7 0:http://adobe.com/AS3/2006/builtin::push
                            {
                                let t = stack0;
                                const m = t.$Bgpush || (t = sec.box(stack0), t.$Bgpush);
                                if( typeof m === "function" ) { 
                                    m.call(t, local5);
                                } else { 
                                   stack0.axCallProperty($names[11], [local5], false);
                                }
                            }
                        }
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack0 = local1;
//                        stack1 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack0 = local1.getChildAt(local3);
                        } else {
                            // 7 0::getChildAt
                            {
                                let t = local1;
                                const m = t.$BggetChildAt || (t = sec.box(local1), t.$BggetChildAt);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BggetChildAt (local3);
                                } else { 
                                    stack0 = local1.axCallProperty($names[1], [local3], false);
                                }
                            }
                        }
//                        stack1 = false;// JIT: redundant assigment, value unused
                        // 7 0::visible
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.visible = false;
                        } else {
                            context.setproperty($names[12], false, stack0);
                        }
                    case 7023:
                        stack0 = local3;
                        stack0++;
                        
                        local3 = stack0;
                    case 7027:
                        stack0 = local3;
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack1 = local1;
                        // 7 0::numChildren
                        //Possible type:undefined
                        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])) {
                            stack1 = local1['numChildren'];
                        } else {
                            temp = local1[AX_CLASS_SYMBOL] ? local1 : sec.box(local1);
                            stack1 = temp.$BgnumChildren;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[96]);
                            }
                        }
                        if (stack1 > local3) { p = 69; continue; };
                        return;
                    }
                }
            }
//# sourceURL=http://jit/levels/ScriptManager/constructor.js
})