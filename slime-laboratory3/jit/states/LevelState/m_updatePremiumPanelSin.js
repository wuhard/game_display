(function anonymous(context
) {
/*
	Index: 984
	Path:  states/LevelState::m_updatePremiumPanelSin
	Type:  Protected
	Kind:  Method
	Super: Object
	Return: 7 0::void
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;

             /* e */
             const __Math = context.getTopLevel(0)['$BgMath']; // :Math

    return function compiled_m_updatePremiumPanelSin() {
        // Possible use a real "this"

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
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 1:states:LevelState::sinCounter
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
                        stack1 = this.$BgsinCounter;
//                        stack2 = 0.15;// JIT: redundant assigment, value unused
                        stack1 += 0.15;
                        // 7 1:states:LevelState::sinCounter
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Number  */ 
                        this.$BgsinCounter = (+stack1);
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 1:states:LevelState::sinCounter
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
                        stack0 = this.$BgsinCounter;
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
                                stack1 = temp.axGetProperty($names[1]);
                            }
                        }
//                        stack2 = 2;// JIT: redundant assigment, value unused
                        stack1 *= 2;
                        if (!(stack1 < stack0)) { p = 48; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 1:states:LevelState::sinCounter
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
                        stack1 = this.$BgsinCounter;
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
                                stack2 = temp.axGetProperty($names[1]);
                            }
                        }
//                        stack3 = 2;// JIT: redundant assigment, value unused
                        stack2 *= 2;
                        stack1 -= stack2;
                        // 7 1:states:LevelState::sinCounter
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Number  */ 
                        this.$BgsinCounter = (+stack1);
                    case 48:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 1:states:LevelState::IS_RATE
                        //Possible type:7 0::Number
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Boolean  */ 
                        stack0 = this.$BgIS_RATE;
                        if (!stack0) { p = 620; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::ratePanel
                        //Possible type:7 0::Boolean
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::RatePanel  */ 
                        stack0 = this.$BgratePanel;
                        // 7 0::titleText
                        //Possible type:7 0::RatePanel
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['titleText'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgtitleText;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[2]);
                            }
                        }
                        // 9 {3, 0, 1:states:LevelState, 0:levels, 0:flash.display, 0:flash.events, 3, 0:states, 2:states, 0:http://adobe.com/AS3/2006/builtin, 0:flash.net, 0:flash.ui, 5:states:LevelState}::letter1
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['letter1'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgletter1;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[3]);
                            }
                        }
                        // 7 0::Math
                        /* GenerateLexImports GETLEX */
//                        stack1 = __Math;// JIT: redundant assigment, value unused
                        stack2 = -7;
                        // 7 0::Math
                        /* GenerateLexImports GETLEX */
//                        stack3 = __Math;// JIT: redundant assigment, value unused
//                        stack4 = this;// JIT: redundant assigment, value unused
                        // 7 1:states:LevelState::sinCounter
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
                        stack4 = this.$BgsinCounter;
//                        stack5 = 1.5;// JIT: redundant assigment, value unused
                        stack4 += 1.5;
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
                                    stack3 = __Math.axCallProperty($names[4], [stack4], false);
                                }
                            }
                        }
//                        stack4 = 2;// JIT: redundant assigment, value unused
                        stack3 *= 2;
                        stack2 += stack3;
                        if (!(_a = typeof __Math, ((_a !== 'object' && _a !== 'function' ) || __Math == null || __Math[AX_CLASS_SYMBOL]))) {
                           stack1 = __Math.round(stack2);
                        } else {
                            // 7 0::round
                            {
                                let t = __Math;
                                const m = t.$Bground || (t = sec.box(__Math), t.$Bground);
                                if( typeof m === "function" ) { 
                                    stack1 = t.$Bground (stack2);
                                } else { 
                                    stack1 = __Math.axCallProperty($names[5], [stack2], false);
                                }
                            }
                        }
                        // 9 {3, 0, 1:states:LevelState, 0:levels, 0:flash.display, 0:flash.events, 3, 0:states, 2:states, 0:http://adobe.com/AS3/2006/builtin, 0:flash.net, 0:flash.ui, 5:states:LevelState}::y
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.y = stack1;
                        } else {
                            context.setproperty($names[6], stack1, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::ratePanel
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::RatePanel  */ 
                        stack0 = this.$BgratePanel;
                        // 7 0::titleText
                        //Possible type:7 0::RatePanel
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['titleText'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgtitleText;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[2]);
                            }
                        }
                        // 9 {3, 0, 1:states:LevelState, 0:levels, 0:flash.display, 0:flash.events, 3, 0:states, 2:states, 0:http://adobe.com/AS3/2006/builtin, 0:flash.net, 0:flash.ui, 5:states:LevelState}::letter2
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['letter2'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgletter2;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[7]);
                            }
                        }
                        // 7 0::Math
                        /* GenerateLexImports GETLEX */
//                        stack1 = __Math;// JIT: redundant assigment, value unused
                        stack2 = -7;
                        // 7 0::Math
                        /* GenerateLexImports GETLEX */
//                        stack3 = __Math;// JIT: redundant assigment, value unused
//                        stack4 = this;// JIT: redundant assigment, value unused
                        // 7 1:states:LevelState::sinCounter
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
                        stack4 = this.$BgsinCounter;
//                        stack5 = 3;// JIT: redundant assigment, value unused
                        stack4 += 3;
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
                                    stack3 = __Math.axCallProperty($names[4], [stack4], false);
                                }
                            }
                        }
//                        stack4 = 2;// JIT: redundant assigment, value unused
                        stack3 *= 2;
                        stack2 += stack3;
                        if (!(_a = typeof __Math, ((_a !== 'object' && _a !== 'function' ) || __Math == null || __Math[AX_CLASS_SYMBOL]))) {
                           stack1 = __Math.round(stack2);
                        } else {
                            // 7 0::round
                            {
                                let t = __Math;
                                const m = t.$Bground || (t = sec.box(__Math), t.$Bground);
                                if( typeof m === "function" ) { 
                                    stack1 = t.$Bground (stack2);
                                } else { 
                                    stack1 = __Math.axCallProperty($names[5], [stack2], false);
                                }
                            }
                        }
                        // 9 {3, 0, 1:states:LevelState, 0:levels, 0:flash.display, 0:flash.events, 3, 0:states, 2:states, 0:http://adobe.com/AS3/2006/builtin, 0:flash.net, 0:flash.ui, 5:states:LevelState}::y
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.y = stack1;
                        } else {
                            context.setproperty($names[6], stack1, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::ratePanel
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::RatePanel  */ 
                        stack0 = this.$BgratePanel;
                        // 7 0::titleText
                        //Possible type:7 0::RatePanel
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['titleText'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgtitleText;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[2]);
                            }
                        }
                        // 9 {3, 0, 1:states:LevelState, 0:levels, 0:flash.display, 0:flash.events, 3, 0:states, 2:states, 0:http://adobe.com/AS3/2006/builtin, 0:flash.net, 0:flash.ui, 5:states:LevelState}::letter3
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['letter3'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgletter3;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[8]);
                            }
                        }
                        // 7 0::Math
                        /* GenerateLexImports GETLEX */
//                        stack1 = __Math;// JIT: redundant assigment, value unused
                        stack2 = -7;
                        // 7 0::Math
                        /* GenerateLexImports GETLEX */
//                        stack3 = __Math;// JIT: redundant assigment, value unused
//                        stack4 = this;// JIT: redundant assigment, value unused
                        // 7 1:states:LevelState::sinCounter
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
                        stack4 = this.$BgsinCounter;
//                        stack5 = 4.5;// JIT: redundant assigment, value unused
                        stack4 += 4.5;
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
                                    stack3 = __Math.axCallProperty($names[4], [stack4], false);
                                }
                            }
                        }
//                        stack4 = 2;// JIT: redundant assigment, value unused
                        stack3 *= 2;
                        stack2 += stack3;
                        if (!(_a = typeof __Math, ((_a !== 'object' && _a !== 'function' ) || __Math == null || __Math[AX_CLASS_SYMBOL]))) {
                           stack1 = __Math.round(stack2);
                        } else {
                            // 7 0::round
                            {
                                let t = __Math;
                                const m = t.$Bground || (t = sec.box(__Math), t.$Bground);
                                if( typeof m === "function" ) { 
                                    stack1 = t.$Bground (stack2);
                                } else { 
                                    stack1 = __Math.axCallProperty($names[5], [stack2], false);
                                }
                            }
                        }
                        // 9 {3, 0, 1:states:LevelState, 0:levels, 0:flash.display, 0:flash.events, 3, 0:states, 2:states, 0:http://adobe.com/AS3/2006/builtin, 0:flash.net, 0:flash.ui, 5:states:LevelState}::y
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.y = stack1;
                        } else {
                            context.setproperty($names[6], stack1, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::ratePanel
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::RatePanel  */ 
                        stack0 = this.$BgratePanel;
                        // 7 0::titleText
                        //Possible type:7 0::RatePanel
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['titleText'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgtitleText;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[2]);
                            }
                        }
                        // 9 {3, 0, 1:states:LevelState, 0:levels, 0:flash.display, 0:flash.events, 3, 0:states, 2:states, 0:http://adobe.com/AS3/2006/builtin, 0:flash.net, 0:flash.ui, 5:states:LevelState}::letter4
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['letter4'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgletter4;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[9]);
                            }
                        }
                        // 7 0::Math
                        /* GenerateLexImports GETLEX */
//                        stack1 = __Math;// JIT: redundant assigment, value unused
                        stack2 = -7;
                        // 7 0::Math
                        /* GenerateLexImports GETLEX */
//                        stack3 = __Math;// JIT: redundant assigment, value unused
//                        stack4 = this;// JIT: redundant assigment, value unused
                        // 7 1:states:LevelState::sinCounter
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
                        stack4 = this.$BgsinCounter;
//                        stack5 = 6;// JIT: redundant assigment, value unused
                        stack4 += 6;
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
                                    stack3 = __Math.axCallProperty($names[4], [stack4], false);
                                }
                            }
                        }
//                        stack4 = 2;// JIT: redundant assigment, value unused
                        stack3 *= 2;
                        stack2 += stack3;
                        if (!(_a = typeof __Math, ((_a !== 'object' && _a !== 'function' ) || __Math == null || __Math[AX_CLASS_SYMBOL]))) {
                           stack1 = __Math.round(stack2);
                        } else {
                            // 7 0::round
                            {
                                let t = __Math;
                                const m = t.$Bground || (t = sec.box(__Math), t.$Bground);
                                if( typeof m === "function" ) { 
                                    stack1 = t.$Bground (stack2);
                                } else { 
                                    stack1 = __Math.axCallProperty($names[5], [stack2], false);
                                }
                            }
                        }
                        // 9 {3, 0, 1:states:LevelState, 0:levels, 0:flash.display, 0:flash.events, 3, 0:states, 2:states, 0:http://adobe.com/AS3/2006/builtin, 0:flash.net, 0:flash.ui, 5:states:LevelState}::y
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.y = stack1;
                        } else {
                            context.setproperty($names[6], stack1, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::ratePanel
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::RatePanel  */ 
                        stack0 = this.$BgratePanel;
                        // 7 0::titleText
                        //Possible type:7 0::RatePanel
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['titleText'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgtitleText;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[2]);
                            }
                        }
                        // 9 {3, 0, 1:states:LevelState, 0:levels, 0:flash.display, 0:flash.events, 3, 0:states, 2:states, 0:http://adobe.com/AS3/2006/builtin, 0:flash.net, 0:flash.ui, 5:states:LevelState}::letter5
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['letter5'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgletter5;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[10]);
                            }
                        }
                        // 7 0::Math
                        /* GenerateLexImports GETLEX */
//                        stack1 = __Math;// JIT: redundant assigment, value unused
                        stack2 = -7;
                        // 7 0::Math
                        /* GenerateLexImports GETLEX */
//                        stack3 = __Math;// JIT: redundant assigment, value unused
//                        stack4 = this;// JIT: redundant assigment, value unused
                        // 7 1:states:LevelState::sinCounter
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
                        stack4 = this.$BgsinCounter;
//                        stack5 = 9;// JIT: redundant assigment, value unused
                        stack4 += 9;
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
                                    stack3 = __Math.axCallProperty($names[4], [stack4], false);
                                }
                            }
                        }
//                        stack4 = 2;// JIT: redundant assigment, value unused
                        stack3 *= 2;
                        stack2 += stack3;
                        if (!(_a = typeof __Math, ((_a !== 'object' && _a !== 'function' ) || __Math == null || __Math[AX_CLASS_SYMBOL]))) {
                           stack1 = __Math.round(stack2);
                        } else {
                            // 7 0::round
                            {
                                let t = __Math;
                                const m = t.$Bground || (t = sec.box(__Math), t.$Bground);
                                if( typeof m === "function" ) { 
                                    stack1 = t.$Bground (stack2);
                                } else { 
                                    stack1 = __Math.axCallProperty($names[5], [stack2], false);
                                }
                            }
                        }
                        // 9 {3, 0, 1:states:LevelState, 0:levels, 0:flash.display, 0:flash.events, 3, 0:states, 2:states, 0:http://adobe.com/AS3/2006/builtin, 0:flash.net, 0:flash.ui, 5:states:LevelState}::y
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.y = stack1;
                        } else {
                            context.setproperty($names[6], stack1, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::ratePanel
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::RatePanel  */ 
                        stack0 = this.$BgratePanel;
                        // 7 0::titleText
                        //Possible type:7 0::RatePanel
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['titleText'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgtitleText;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[2]);
                            }
                        }
                        // 9 {3, 0, 1:states:LevelState, 0:levels, 0:flash.display, 0:flash.events, 3, 0:states, 2:states, 0:http://adobe.com/AS3/2006/builtin, 0:flash.net, 0:flash.ui, 5:states:LevelState}::letter6
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['letter6'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgletter6;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[11]);
                            }
                        }
                        // 7 0::Math
                        /* GenerateLexImports GETLEX */
//                        stack1 = __Math;// JIT: redundant assigment, value unused
                        stack2 = -7;
                        // 7 0::Math
                        /* GenerateLexImports GETLEX */
//                        stack3 = __Math;// JIT: redundant assigment, value unused
//                        stack4 = this;// JIT: redundant assigment, value unused
                        // 7 1:states:LevelState::sinCounter
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
                        stack4 = this.$BgsinCounter;
//                        stack5 = 10.5;// JIT: redundant assigment, value unused
                        stack4 += 10.5;
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
                                    stack3 = __Math.axCallProperty($names[4], [stack4], false);
                                }
                            }
                        }
//                        stack4 = 2;// JIT: redundant assigment, value unused
                        stack3 *= 2;
                        stack2 += stack3;
                        if (!(_a = typeof __Math, ((_a !== 'object' && _a !== 'function' ) || __Math == null || __Math[AX_CLASS_SYMBOL]))) {
                           stack1 = __Math.round(stack2);
                        } else {
                            // 7 0::round
                            {
                                let t = __Math;
                                const m = t.$Bground || (t = sec.box(__Math), t.$Bground);
                                if( typeof m === "function" ) { 
                                    stack1 = t.$Bground (stack2);
                                } else { 
                                    stack1 = __Math.axCallProperty($names[5], [stack2], false);
                                }
                            }
                        }
                        // 9 {3, 0, 1:states:LevelState, 0:levels, 0:flash.display, 0:flash.events, 3, 0:states, 2:states, 0:http://adobe.com/AS3/2006/builtin, 0:flash.net, 0:flash.ui, 5:states:LevelState}::y
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.y = stack1;
                        } else {
                            context.setproperty($names[6], stack1, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::ratePanel
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::RatePanel  */ 
                        stack0 = this.$BgratePanel;
                        // 7 0::titleText
                        //Possible type:7 0::RatePanel
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['titleText'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgtitleText;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[2]);
                            }
                        }
                        // 9 {3, 0, 1:states:LevelState, 0:levels, 0:flash.display, 0:flash.events, 3, 0:states, 2:states, 0:http://adobe.com/AS3/2006/builtin, 0:flash.net, 0:flash.ui, 5:states:LevelState}::letter7
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['letter7'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgletter7;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[12]);
                            }
                        }
                        // 7 0::Math
                        /* GenerateLexImports GETLEX */
//                        stack1 = __Math;// JIT: redundant assigment, value unused
                        stack2 = -7;
                        // 7 0::Math
                        /* GenerateLexImports GETLEX */
//                        stack3 = __Math;// JIT: redundant assigment, value unused
//                        stack4 = this;// JIT: redundant assigment, value unused
                        // 7 1:states:LevelState::sinCounter
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
                        stack4 = this.$BgsinCounter;
//                        stack5 = 12;// JIT: redundant assigment, value unused
                        stack4 += 12;
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
                                    stack3 = __Math.axCallProperty($names[4], [stack4], false);
                                }
                            }
                        }
//                        stack4 = 2;// JIT: redundant assigment, value unused
                        stack3 *= 2;
                        stack2 += stack3;
                        if (!(_a = typeof __Math, ((_a !== 'object' && _a !== 'function' ) || __Math == null || __Math[AX_CLASS_SYMBOL]))) {
                           stack1 = __Math.round(stack2);
                        } else {
                            // 7 0::round
                            {
                                let t = __Math;
                                const m = t.$Bground || (t = sec.box(__Math), t.$Bground);
                                if( typeof m === "function" ) { 
                                    stack1 = t.$Bground (stack2);
                                } else { 
                                    stack1 = __Math.axCallProperty($names[5], [stack2], false);
                                }
                            }
                        }
                        // 9 {3, 0, 1:states:LevelState, 0:levels, 0:flash.display, 0:flash.events, 3, 0:states, 2:states, 0:http://adobe.com/AS3/2006/builtin, 0:flash.net, 0:flash.ui, 5:states:LevelState}::y
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.y = stack1;
                        } else {
                            context.setproperty($names[6], stack1, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::ratePanel
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::RatePanel  */ 
                        stack0 = this.$BgratePanel;
                        // 7 0::titleText
                        //Possible type:7 0::RatePanel
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['titleText'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgtitleText;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[2]);
                            }
                        }
                        // 9 {3, 0, 1:states:LevelState, 0:levels, 0:flash.display, 0:flash.events, 3, 0:states, 2:states, 0:http://adobe.com/AS3/2006/builtin, 0:flash.net, 0:flash.ui, 5:states:LevelState}::letter8
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['letter8'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgletter8;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[13]);
                            }
                        }
                        // 7 0::Math
                        /* GenerateLexImports GETLEX */
//                        stack1 = __Math;// JIT: redundant assigment, value unused
                        stack2 = -7;
                        // 7 0::Math
                        /* GenerateLexImports GETLEX */
//                        stack3 = __Math;// JIT: redundant assigment, value unused
//                        stack4 = this;// JIT: redundant assigment, value unused
                        // 7 1:states:LevelState::sinCounter
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
                        stack4 = this.$BgsinCounter;
//                        stack5 = 13.5;// JIT: redundant assigment, value unused
                        stack4 += 13.5;
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
                                    stack3 = __Math.axCallProperty($names[4], [stack4], false);
                                }
                            }
                        }
//                        stack4 = 2;// JIT: redundant assigment, value unused
                        stack3 *= 2;
                        stack2 += stack3;
                        if (!(_a = typeof __Math, ((_a !== 'object' && _a !== 'function' ) || __Math == null || __Math[AX_CLASS_SYMBOL]))) {
                           stack1 = __Math.round(stack2);
                        } else {
                            // 7 0::round
                            {
                                let t = __Math;
                                const m = t.$Bground || (t = sec.box(__Math), t.$Bground);
                                if( typeof m === "function" ) { 
                                    stack1 = t.$Bground (stack2);
                                } else { 
                                    stack1 = __Math.axCallProperty($names[5], [stack2], false);
                                }
                            }
                        }
                        // 9 {3, 0, 1:states:LevelState, 0:levels, 0:flash.display, 0:flash.events, 3, 0:states, 2:states, 0:http://adobe.com/AS3/2006/builtin, 0:flash.net, 0:flash.ui, 5:states:LevelState}::y
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.y = stack1;
                        } else {
                            context.setproperty($names[6], stack1, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::ratePanel
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::RatePanel  */ 
                        stack0 = this.$BgratePanel;
                        // 7 0::titleText
                        //Possible type:7 0::RatePanel
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['titleText'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgtitleText;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[2]);
                            }
                        }
                        // 9 {3, 0, 1:states:LevelState, 0:levels, 0:flash.display, 0:flash.events, 3, 0:states, 2:states, 0:http://adobe.com/AS3/2006/builtin, 0:flash.net, 0:flash.ui, 5:states:LevelState}::letter9
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['letter9'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgletter9;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[14]);
                            }
                        }
                        // 7 0::Math
                        /* GenerateLexImports GETLEX */
//                        stack1 = __Math;// JIT: redundant assigment, value unused
                        stack2 = -7;
                        // 7 0::Math
                        /* GenerateLexImports GETLEX */
//                        stack3 = __Math;// JIT: redundant assigment, value unused
//                        stack4 = this;// JIT: redundant assigment, value unused
                        // 7 1:states:LevelState::sinCounter
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
                        stack4 = this.$BgsinCounter;
//                        stack5 = 15;// JIT: redundant assigment, value unused
                        stack4 += 15;
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
                                    stack3 = __Math.axCallProperty($names[4], [stack4], false);
                                }
                            }
                        }
//                        stack4 = 2;// JIT: redundant assigment, value unused
                        stack3 *= 2;
                        stack2 += stack3;
                        if (!(_a = typeof __Math, ((_a !== 'object' && _a !== 'function' ) || __Math == null || __Math[AX_CLASS_SYMBOL]))) {
                           stack1 = __Math.round(stack2);
                        } else {
                            // 7 0::round
                            {
                                let t = __Math;
                                const m = t.$Bground || (t = sec.box(__Math), t.$Bground);
                                if( typeof m === "function" ) { 
                                    stack1 = t.$Bground (stack2);
                                } else { 
                                    stack1 = __Math.axCallProperty($names[5], [stack2], false);
                                }
                            }
                        }
                        // 9 {3, 0, 1:states:LevelState, 0:levels, 0:flash.display, 0:flash.events, 3, 0:states, 2:states, 0:http://adobe.com/AS3/2006/builtin, 0:flash.net, 0:flash.ui, 5:states:LevelState}::y
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.y = stack1;
                        } else {
                            context.setproperty($names[6], stack1, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::ratePanel
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::RatePanel  */ 
                        stack0 = this.$BgratePanel;
                        // 7 0::titleText
                        //Possible type:7 0::RatePanel
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['titleText'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgtitleText;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[2]);
                            }
                        }
                        // 9 {3, 0, 1:states:LevelState, 0:levels, 0:flash.display, 0:flash.events, 3, 0:states, 2:states, 0:http://adobe.com/AS3/2006/builtin, 0:flash.net, 0:flash.ui, 5:states:LevelState}::letter10
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['letter10'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgletter10;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[15]);
                            }
                        }
                        // 7 0::Math
                        /* GenerateLexImports GETLEX */
//                        stack1 = __Math;// JIT: redundant assigment, value unused
                        stack2 = -7;
                        // 7 0::Math
                        /* GenerateLexImports GETLEX */
//                        stack3 = __Math;// JIT: redundant assigment, value unused
//                        stack4 = this;// JIT: redundant assigment, value unused
                        // 7 1:states:LevelState::sinCounter
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
                        stack4 = this.$BgsinCounter;
//                        stack5 = 16.5;// JIT: redundant assigment, value unused
                        stack4 += 16.5;
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
                                    stack3 = __Math.axCallProperty($names[4], [stack4], false);
                                }
                            }
                        }
//                        stack4 = 2;// JIT: redundant assigment, value unused
                        stack3 *= 2;
                        stack2 += stack3;
                        if (!(_a = typeof __Math, ((_a !== 'object' && _a !== 'function' ) || __Math == null || __Math[AX_CLASS_SYMBOL]))) {
                           stack1 = __Math.round(stack2);
                        } else {
                            // 7 0::round
                            {
                                let t = __Math;
                                const m = t.$Bground || (t = sec.box(__Math), t.$Bground);
                                if( typeof m === "function" ) { 
                                    stack1 = t.$Bground (stack2);
                                } else { 
                                    stack1 = __Math.axCallProperty($names[5], [stack2], false);
                                }
                            }
                        }
                        // 9 {3, 0, 1:states:LevelState, 0:levels, 0:flash.display, 0:flash.events, 3, 0:states, 2:states, 0:http://adobe.com/AS3/2006/builtin, 0:flash.net, 0:flash.ui, 5:states:LevelState}::y
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.y = stack1;
                        } else {
                            context.setproperty($names[6], stack1, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::ratePanel
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::RatePanel  */ 
                        stack0 = this.$BgratePanel;
                        // 7 0::titleText
                        //Possible type:7 0::RatePanel
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['titleText'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgtitleText;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[2]);
                            }
                        }
                        // 9 {3, 0, 1:states:LevelState, 0:levels, 0:flash.display, 0:flash.events, 3, 0:states, 2:states, 0:http://adobe.com/AS3/2006/builtin, 0:flash.net, 0:flash.ui, 5:states:LevelState}::letter11
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['letter11'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgletter11;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[16]);
                            }
                        }
                        // 7 0::Math
                        /* GenerateLexImports GETLEX */
//                        stack1 = __Math;// JIT: redundant assigment, value unused
                        stack2 = -7;
                        // 7 0::Math
                        /* GenerateLexImports GETLEX */
//                        stack3 = __Math;// JIT: redundant assigment, value unused
//                        stack4 = this;// JIT: redundant assigment, value unused
                        // 7 1:states:LevelState::sinCounter
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
                        stack4 = this.$BgsinCounter;
//                        stack5 = 18;// JIT: redundant assigment, value unused
                        stack4 += 18;
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
                                    stack3 = __Math.axCallProperty($names[4], [stack4], false);
                                }
                            }
                        }
//                        stack4 = 2;// JIT: redundant assigment, value unused
                        stack3 *= 2;
                        stack2 += stack3;
                        if (!(_a = typeof __Math, ((_a !== 'object' && _a !== 'function' ) || __Math == null || __Math[AX_CLASS_SYMBOL]))) {
                           stack1 = __Math.round(stack2);
                        } else {
                            // 7 0::round
                            {
                                let t = __Math;
                                const m = t.$Bground || (t = sec.box(__Math), t.$Bground);
                                if( typeof m === "function" ) { 
                                    stack1 = t.$Bground (stack2);
                                } else { 
                                    stack1 = __Math.axCallProperty($names[5], [stack2], false);
                                }
                            }
                        }
                        // 9 {3, 0, 1:states:LevelState, 0:levels, 0:flash.display, 0:flash.events, 3, 0:states, 2:states, 0:http://adobe.com/AS3/2006/builtin, 0:flash.net, 0:flash.ui, 5:states:LevelState}::y
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.y = stack1;
                        } else {
                            context.setproperty($names[6], stack1, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::ratePanel
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::RatePanel  */ 
                        stack0 = this.$BgratePanel;
                        // 7 0::titleText
                        //Possible type:7 0::RatePanel
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['titleText'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgtitleText;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[2]);
                            }
                        }
                        // 9 {3, 0, 1:states:LevelState, 0:levels, 0:flash.display, 0:flash.events, 3, 0:states, 2:states, 0:http://adobe.com/AS3/2006/builtin, 0:flash.net, 0:flash.ui, 5:states:LevelState}::letter12
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['letter12'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgletter12;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[17]);
                            }
                        }
                        // 7 0::Math
                        /* GenerateLexImports GETLEX */
//                        stack1 = __Math;// JIT: redundant assigment, value unused
                        stack2 = -7;
                        // 7 0::Math
                        /* GenerateLexImports GETLEX */
//                        stack3 = __Math;// JIT: redundant assigment, value unused
//                        stack4 = this;// JIT: redundant assigment, value unused
                        // 7 1:states:LevelState::sinCounter
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
                        stack4 = this.$BgsinCounter;
//                        stack5 = 19.5;// JIT: redundant assigment, value unused
                        stack4 += 19.5;
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
                                    stack3 = __Math.axCallProperty($names[4], [stack4], false);
                                }
                            }
                        }
//                        stack4 = 2;// JIT: redundant assigment, value unused
                        stack3 *= 2;
                        stack2 += stack3;
                        if (!(_a = typeof __Math, ((_a !== 'object' && _a !== 'function' ) || __Math == null || __Math[AX_CLASS_SYMBOL]))) {
                           stack1 = __Math.round(stack2);
                        } else {
                            // 7 0::round
                            {
                                let t = __Math;
                                const m = t.$Bground || (t = sec.box(__Math), t.$Bground);
                                if( typeof m === "function" ) { 
                                    stack1 = t.$Bground (stack2);
                                } else { 
                                    stack1 = __Math.axCallProperty($names[5], [stack2], false);
                                }
                            }
                        }
                        // 9 {3, 0, 1:states:LevelState, 0:levels, 0:flash.display, 0:flash.events, 3, 0:states, 2:states, 0:http://adobe.com/AS3/2006/builtin, 0:flash.net, 0:flash.ui, 5:states:LevelState}::y
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.y = stack1;
                        } else {
                            context.setproperty($names[6], stack1, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::ratePanel
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::RatePanel  */ 
                        stack0 = this.$BgratePanel;
                        // 7 0::titleText
                        //Possible type:7 0::RatePanel
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['titleText'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgtitleText;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[2]);
                            }
                        }
                        // 9 {3, 0, 1:states:LevelState, 0:levels, 0:flash.display, 0:flash.events, 3, 0:states, 2:states, 0:http://adobe.com/AS3/2006/builtin, 0:flash.net, 0:flash.ui, 5:states:LevelState}::letter13
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['letter13'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgletter13;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[18]);
                            }
                        }
                        // 7 0::Math
                        /* GenerateLexImports GETLEX */
//                        stack1 = __Math;// JIT: redundant assigment, value unused
                        stack2 = -7;
                        // 7 0::Math
                        /* GenerateLexImports GETLEX */
//                        stack3 = __Math;// JIT: redundant assigment, value unused
//                        stack4 = this;// JIT: redundant assigment, value unused
                        // 7 1:states:LevelState::sinCounter
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
                        stack4 = this.$BgsinCounter;
//                        stack5 = 21;// JIT: redundant assigment, value unused
                        stack4 += 21;
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
                                    stack3 = __Math.axCallProperty($names[4], [stack4], false);
                                }
                            }
                        }
//                        stack4 = 2;// JIT: redundant assigment, value unused
                        stack3 *= 2;
                        stack2 += stack3;
                        if (!(_a = typeof __Math, ((_a !== 'object' && _a !== 'function' ) || __Math == null || __Math[AX_CLASS_SYMBOL]))) {
                           stack1 = __Math.round(stack2);
                        } else {
                            // 7 0::round
                            {
                                let t = __Math;
                                const m = t.$Bground || (t = sec.box(__Math), t.$Bground);
                                if( typeof m === "function" ) { 
                                    stack1 = t.$Bground (stack2);
                                } else { 
                                    stack1 = __Math.axCallProperty($names[5], [stack2], false);
                                }
                            }
                        }
                        // 9 {3, 0, 1:states:LevelState, 0:levels, 0:flash.display, 0:flash.events, 3, 0:states, 2:states, 0:http://adobe.com/AS3/2006/builtin, 0:flash.net, 0:flash.ui, 5:states:LevelState}::y
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.y = stack1;
                        } else {
                            context.setproperty($names[6], stack1, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::ratePanel
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::RatePanel  */ 
                        stack0 = this.$BgratePanel;
                        // 7 0::titleText
                        //Possible type:7 0::RatePanel
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['titleText'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgtitleText;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[2]);
                            }
                        }
                        // 9 {3, 0, 1:states:LevelState, 0:levels, 0:flash.display, 0:flash.events, 3, 0:states, 2:states, 0:http://adobe.com/AS3/2006/builtin, 0:flash.net, 0:flash.ui, 5:states:LevelState}::letter14
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['letter14'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgletter14;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[19]);
                            }
                        }
                        // 7 0::Math
                        /* GenerateLexImports GETLEX */
//                        stack1 = __Math;// JIT: redundant assigment, value unused
                        stack2 = -7;
                        // 7 0::Math
                        /* GenerateLexImports GETLEX */
//                        stack3 = __Math;// JIT: redundant assigment, value unused
//                        stack4 = this;// JIT: redundant assigment, value unused
                        // 7 1:states:LevelState::sinCounter
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
                        stack4 = this.$BgsinCounter;
//                        stack5 = 22.5;// JIT: redundant assigment, value unused
                        stack4 += 22.5;
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
                                    stack3 = __Math.axCallProperty($names[4], [stack4], false);
                                }
                            }
                        }
//                        stack4 = 2;// JIT: redundant assigment, value unused
                        stack3 *= 2;
                        stack2 += stack3;
                        if (!(_a = typeof __Math, ((_a !== 'object' && _a !== 'function' ) || __Math == null || __Math[AX_CLASS_SYMBOL]))) {
                           stack1 = __Math.round(stack2);
                        } else {
                            // 7 0::round
                            {
                                let t = __Math;
                                const m = t.$Bground || (t = sec.box(__Math), t.$Bground);
                                if( typeof m === "function" ) { 
                                    stack1 = t.$Bground (stack2);
                                } else { 
                                    stack1 = __Math.axCallProperty($names[5], [stack2], false);
                                }
                            }
                        }
                        // 9 {3, 0, 1:states:LevelState, 0:levels, 0:flash.display, 0:flash.events, 3, 0:states, 2:states, 0:http://adobe.com/AS3/2006/builtin, 0:flash.net, 0:flash.ui, 5:states:LevelState}::y
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.y = stack1;
                        } else {
                            context.setproperty($names[6], stack1, stack0);
                        }
                        //JIT: Emit inline return
                        return;
                    case 620:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::premiumPanel
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::PremiumPanel  */ 
                        stack0 = this.$BgpremiumPanel;
                        // 7 0::titleText
                        //Possible type:7 0::PremiumPanel
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['titleText'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgtitleText;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[2]);
                            }
                        }
                        // 9 {3, 0, 1:states:LevelState, 0:levels, 0:flash.display, 0:flash.events, 3, 0:states, 2:states, 0:http://adobe.com/AS3/2006/builtin, 0:flash.net, 0:flash.ui, 5:states:LevelState}::letter1
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['letter1'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgletter1;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[3]);
                            }
                        }
                        // 7 0::Math
                        /* GenerateLexImports GETLEX */
//                        stack1 = __Math;// JIT: redundant assigment, value unused
                        stack2 = -7;
                        // 7 0::Math
                        /* GenerateLexImports GETLEX */
//                        stack3 = __Math;// JIT: redundant assigment, value unused
//                        stack4 = this;// JIT: redundant assigment, value unused
                        // 7 1:states:LevelState::sinCounter
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
                        stack4 = this.$BgsinCounter;
//                        stack5 = 1.5;// JIT: redundant assigment, value unused
                        stack4 += 1.5;
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
                                    stack3 = __Math.axCallProperty($names[4], [stack4], false);
                                }
                            }
                        }
//                        stack4 = 2;// JIT: redundant assigment, value unused
                        stack3 *= 2;
                        stack2 += stack3;
                        if (!(_a = typeof __Math, ((_a !== 'object' && _a !== 'function' ) || __Math == null || __Math[AX_CLASS_SYMBOL]))) {
                           stack1 = __Math.round(stack2);
                        } else {
                            // 7 0::round
                            {
                                let t = __Math;
                                const m = t.$Bground || (t = sec.box(__Math), t.$Bground);
                                if( typeof m === "function" ) { 
                                    stack1 = t.$Bground (stack2);
                                } else { 
                                    stack1 = __Math.axCallProperty($names[5], [stack2], false);
                                }
                            }
                        }
                        // 9 {3, 0, 1:states:LevelState, 0:levels, 0:flash.display, 0:flash.events, 3, 0:states, 2:states, 0:http://adobe.com/AS3/2006/builtin, 0:flash.net, 0:flash.ui, 5:states:LevelState}::y
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.y = stack1;
                        } else {
                            context.setproperty($names[6], stack1, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::premiumPanel
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::PremiumPanel  */ 
                        stack0 = this.$BgpremiumPanel;
                        // 7 0::titleText
                        //Possible type:7 0::PremiumPanel
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['titleText'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgtitleText;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[2]);
                            }
                        }
                        // 9 {3, 0, 1:states:LevelState, 0:levels, 0:flash.display, 0:flash.events, 3, 0:states, 2:states, 0:http://adobe.com/AS3/2006/builtin, 0:flash.net, 0:flash.ui, 5:states:LevelState}::letter2
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['letter2'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgletter2;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[7]);
                            }
                        }
                        // 7 0::Math
                        /* GenerateLexImports GETLEX */
//                        stack1 = __Math;// JIT: redundant assigment, value unused
                        stack2 = -7;
                        // 7 0::Math
                        /* GenerateLexImports GETLEX */
//                        stack3 = __Math;// JIT: redundant assigment, value unused
//                        stack4 = this;// JIT: redundant assigment, value unused
                        // 7 1:states:LevelState::sinCounter
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
                        stack4 = this.$BgsinCounter;
//                        stack5 = 3;// JIT: redundant assigment, value unused
                        stack4 += 3;
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
                                    stack3 = __Math.axCallProperty($names[4], [stack4], false);
                                }
                            }
                        }
//                        stack4 = 2;// JIT: redundant assigment, value unused
                        stack3 *= 2;
                        stack2 += stack3;
                        if (!(_a = typeof __Math, ((_a !== 'object' && _a !== 'function' ) || __Math == null || __Math[AX_CLASS_SYMBOL]))) {
                           stack1 = __Math.round(stack2);
                        } else {
                            // 7 0::round
                            {
                                let t = __Math;
                                const m = t.$Bground || (t = sec.box(__Math), t.$Bground);
                                if( typeof m === "function" ) { 
                                    stack1 = t.$Bground (stack2);
                                } else { 
                                    stack1 = __Math.axCallProperty($names[5], [stack2], false);
                                }
                            }
                        }
                        // 9 {3, 0, 1:states:LevelState, 0:levels, 0:flash.display, 0:flash.events, 3, 0:states, 2:states, 0:http://adobe.com/AS3/2006/builtin, 0:flash.net, 0:flash.ui, 5:states:LevelState}::y
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.y = stack1;
                        } else {
                            context.setproperty($names[6], stack1, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::premiumPanel
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::PremiumPanel  */ 
                        stack0 = this.$BgpremiumPanel;
                        // 7 0::titleText
                        //Possible type:7 0::PremiumPanel
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['titleText'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgtitleText;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[2]);
                            }
                        }
                        // 9 {3, 0, 1:states:LevelState, 0:levels, 0:flash.display, 0:flash.events, 3, 0:states, 2:states, 0:http://adobe.com/AS3/2006/builtin, 0:flash.net, 0:flash.ui, 5:states:LevelState}::letter3
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['letter3'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgletter3;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[8]);
                            }
                        }
                        // 7 0::Math
                        /* GenerateLexImports GETLEX */
//                        stack1 = __Math;// JIT: redundant assigment, value unused
                        stack2 = -7;
                        // 7 0::Math
                        /* GenerateLexImports GETLEX */
//                        stack3 = __Math;// JIT: redundant assigment, value unused
//                        stack4 = this;// JIT: redundant assigment, value unused
                        // 7 1:states:LevelState::sinCounter
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
                        stack4 = this.$BgsinCounter;
//                        stack5 = 4.5;// JIT: redundant assigment, value unused
                        stack4 += 4.5;
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
                                    stack3 = __Math.axCallProperty($names[4], [stack4], false);
                                }
                            }
                        }
//                        stack4 = 2;// JIT: redundant assigment, value unused
                        stack3 *= 2;
                        stack2 += stack3;
                        if (!(_a = typeof __Math, ((_a !== 'object' && _a !== 'function' ) || __Math == null || __Math[AX_CLASS_SYMBOL]))) {
                           stack1 = __Math.round(stack2);
                        } else {
                            // 7 0::round
                            {
                                let t = __Math;
                                const m = t.$Bground || (t = sec.box(__Math), t.$Bground);
                                if( typeof m === "function" ) { 
                                    stack1 = t.$Bground (stack2);
                                } else { 
                                    stack1 = __Math.axCallProperty($names[5], [stack2], false);
                                }
                            }
                        }
                        // 9 {3, 0, 1:states:LevelState, 0:levels, 0:flash.display, 0:flash.events, 3, 0:states, 2:states, 0:http://adobe.com/AS3/2006/builtin, 0:flash.net, 0:flash.ui, 5:states:LevelState}::y
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.y = stack1;
                        } else {
                            context.setproperty($names[6], stack1, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::premiumPanel
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::PremiumPanel  */ 
                        stack0 = this.$BgpremiumPanel;
                        // 7 0::titleText
                        //Possible type:7 0::PremiumPanel
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['titleText'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgtitleText;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[2]);
                            }
                        }
                        // 9 {3, 0, 1:states:LevelState, 0:levels, 0:flash.display, 0:flash.events, 3, 0:states, 2:states, 0:http://adobe.com/AS3/2006/builtin, 0:flash.net, 0:flash.ui, 5:states:LevelState}::letter4
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['letter4'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgletter4;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[9]);
                            }
                        }
                        // 7 0::Math
                        /* GenerateLexImports GETLEX */
//                        stack1 = __Math;// JIT: redundant assigment, value unused
                        stack2 = -7;
                        // 7 0::Math
                        /* GenerateLexImports GETLEX */
//                        stack3 = __Math;// JIT: redundant assigment, value unused
//                        stack4 = this;// JIT: redundant assigment, value unused
                        // 7 1:states:LevelState::sinCounter
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
                        stack4 = this.$BgsinCounter;
//                        stack5 = 6;// JIT: redundant assigment, value unused
                        stack4 += 6;
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
                                    stack3 = __Math.axCallProperty($names[4], [stack4], false);
                                }
                            }
                        }
//                        stack4 = 2;// JIT: redundant assigment, value unused
                        stack3 *= 2;
                        stack2 += stack3;
                        if (!(_a = typeof __Math, ((_a !== 'object' && _a !== 'function' ) || __Math == null || __Math[AX_CLASS_SYMBOL]))) {
                           stack1 = __Math.round(stack2);
                        } else {
                            // 7 0::round
                            {
                                let t = __Math;
                                const m = t.$Bground || (t = sec.box(__Math), t.$Bground);
                                if( typeof m === "function" ) { 
                                    stack1 = t.$Bground (stack2);
                                } else { 
                                    stack1 = __Math.axCallProperty($names[5], [stack2], false);
                                }
                            }
                        }
                        // 9 {3, 0, 1:states:LevelState, 0:levels, 0:flash.display, 0:flash.events, 3, 0:states, 2:states, 0:http://adobe.com/AS3/2006/builtin, 0:flash.net, 0:flash.ui, 5:states:LevelState}::y
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.y = stack1;
                        } else {
                            context.setproperty($names[6], stack1, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::premiumPanel
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::PremiumPanel  */ 
                        stack0 = this.$BgpremiumPanel;
                        // 7 0::titleText
                        //Possible type:7 0::PremiumPanel
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['titleText'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgtitleText;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[2]);
                            }
                        }
                        // 9 {3, 0, 1:states:LevelState, 0:levels, 0:flash.display, 0:flash.events, 3, 0:states, 2:states, 0:http://adobe.com/AS3/2006/builtin, 0:flash.net, 0:flash.ui, 5:states:LevelState}::letter5
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['letter5'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgletter5;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[10]);
                            }
                        }
                        // 7 0::Math
                        /* GenerateLexImports GETLEX */
//                        stack1 = __Math;// JIT: redundant assigment, value unused
                        stack2 = -7;
                        // 7 0::Math
                        /* GenerateLexImports GETLEX */
//                        stack3 = __Math;// JIT: redundant assigment, value unused
//                        stack4 = this;// JIT: redundant assigment, value unused
                        // 7 1:states:LevelState::sinCounter
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
                        stack4 = this.$BgsinCounter;
//                        stack5 = 9;// JIT: redundant assigment, value unused
                        stack4 += 9;
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
                                    stack3 = __Math.axCallProperty($names[4], [stack4], false);
                                }
                            }
                        }
//                        stack4 = 2;// JIT: redundant assigment, value unused
                        stack3 *= 2;
                        stack2 += stack3;
                        if (!(_a = typeof __Math, ((_a !== 'object' && _a !== 'function' ) || __Math == null || __Math[AX_CLASS_SYMBOL]))) {
                           stack1 = __Math.round(stack2);
                        } else {
                            // 7 0::round
                            {
                                let t = __Math;
                                const m = t.$Bground || (t = sec.box(__Math), t.$Bground);
                                if( typeof m === "function" ) { 
                                    stack1 = t.$Bground (stack2);
                                } else { 
                                    stack1 = __Math.axCallProperty($names[5], [stack2], false);
                                }
                            }
                        }
                        // 9 {3, 0, 1:states:LevelState, 0:levels, 0:flash.display, 0:flash.events, 3, 0:states, 2:states, 0:http://adobe.com/AS3/2006/builtin, 0:flash.net, 0:flash.ui, 5:states:LevelState}::y
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.y = stack1;
                        } else {
                            context.setproperty($names[6], stack1, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::premiumPanel
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::PremiumPanel  */ 
                        stack0 = this.$BgpremiumPanel;
                        // 7 0::titleText
                        //Possible type:7 0::PremiumPanel
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['titleText'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgtitleText;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[2]);
                            }
                        }
                        // 9 {3, 0, 1:states:LevelState, 0:levels, 0:flash.display, 0:flash.events, 3, 0:states, 2:states, 0:http://adobe.com/AS3/2006/builtin, 0:flash.net, 0:flash.ui, 5:states:LevelState}::letter6
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['letter6'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgletter6;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[11]);
                            }
                        }
                        // 7 0::Math
                        /* GenerateLexImports GETLEX */
//                        stack1 = __Math;// JIT: redundant assigment, value unused
                        stack2 = -7;
                        // 7 0::Math
                        /* GenerateLexImports GETLEX */
//                        stack3 = __Math;// JIT: redundant assigment, value unused
//                        stack4 = this;// JIT: redundant assigment, value unused
                        // 7 1:states:LevelState::sinCounter
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
                        stack4 = this.$BgsinCounter;
//                        stack5 = 10.5;// JIT: redundant assigment, value unused
                        stack4 += 10.5;
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
                                    stack3 = __Math.axCallProperty($names[4], [stack4], false);
                                }
                            }
                        }
//                        stack4 = 2;// JIT: redundant assigment, value unused
                        stack3 *= 2;
                        stack2 += stack3;
                        if (!(_a = typeof __Math, ((_a !== 'object' && _a !== 'function' ) || __Math == null || __Math[AX_CLASS_SYMBOL]))) {
                           stack1 = __Math.round(stack2);
                        } else {
                            // 7 0::round
                            {
                                let t = __Math;
                                const m = t.$Bground || (t = sec.box(__Math), t.$Bground);
                                if( typeof m === "function" ) { 
                                    stack1 = t.$Bground (stack2);
                                } else { 
                                    stack1 = __Math.axCallProperty($names[5], [stack2], false);
                                }
                            }
                        }
                        // 9 {3, 0, 1:states:LevelState, 0:levels, 0:flash.display, 0:flash.events, 3, 0:states, 2:states, 0:http://adobe.com/AS3/2006/builtin, 0:flash.net, 0:flash.ui, 5:states:LevelState}::y
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.y = stack1;
                        } else {
                            context.setproperty($names[6], stack1, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::premiumPanel
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::PremiumPanel  */ 
                        stack0 = this.$BgpremiumPanel;
                        // 7 0::titleText
                        //Possible type:7 0::PremiumPanel
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['titleText'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgtitleText;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[2]);
                            }
                        }
                        // 9 {3, 0, 1:states:LevelState, 0:levels, 0:flash.display, 0:flash.events, 3, 0:states, 2:states, 0:http://adobe.com/AS3/2006/builtin, 0:flash.net, 0:flash.ui, 5:states:LevelState}::letter7
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['letter7'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgletter7;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[12]);
                            }
                        }
                        // 7 0::Math
                        /* GenerateLexImports GETLEX */
//                        stack1 = __Math;// JIT: redundant assigment, value unused
                        stack2 = -7;
                        // 7 0::Math
                        /* GenerateLexImports GETLEX */
//                        stack3 = __Math;// JIT: redundant assigment, value unused
//                        stack4 = this;// JIT: redundant assigment, value unused
                        // 7 1:states:LevelState::sinCounter
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
                        stack4 = this.$BgsinCounter;
//                        stack5 = 12;// JIT: redundant assigment, value unused
                        stack4 += 12;
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
                                    stack3 = __Math.axCallProperty($names[4], [stack4], false);
                                }
                            }
                        }
//                        stack4 = 2;// JIT: redundant assigment, value unused
                        stack3 *= 2;
                        stack2 += stack3;
                        if (!(_a = typeof __Math, ((_a !== 'object' && _a !== 'function' ) || __Math == null || __Math[AX_CLASS_SYMBOL]))) {
                           stack1 = __Math.round(stack2);
                        } else {
                            // 7 0::round
                            {
                                let t = __Math;
                                const m = t.$Bground || (t = sec.box(__Math), t.$Bground);
                                if( typeof m === "function" ) { 
                                    stack1 = t.$Bground (stack2);
                                } else { 
                                    stack1 = __Math.axCallProperty($names[5], [stack2], false);
                                }
                            }
                        }
                        // 9 {3, 0, 1:states:LevelState, 0:levels, 0:flash.display, 0:flash.events, 3, 0:states, 2:states, 0:http://adobe.com/AS3/2006/builtin, 0:flash.net, 0:flash.ui, 5:states:LevelState}::y
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.y = stack1;
                        } else {
                            context.setproperty($names[6], stack1, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::premiumPanel
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::PremiumPanel  */ 
                        stack0 = this.$BgpremiumPanel;
                        // 7 0::titleText
                        //Possible type:7 0::PremiumPanel
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['titleText'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgtitleText;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[2]);
                            }
                        }
                        // 9 {3, 0, 1:states:LevelState, 0:levels, 0:flash.display, 0:flash.events, 3, 0:states, 2:states, 0:http://adobe.com/AS3/2006/builtin, 0:flash.net, 0:flash.ui, 5:states:LevelState}::letter8
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['letter8'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgletter8;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[13]);
                            }
                        }
                        // 7 0::Math
                        /* GenerateLexImports GETLEX */
//                        stack1 = __Math;// JIT: redundant assigment, value unused
                        stack2 = -7;
                        // 7 0::Math
                        /* GenerateLexImports GETLEX */
//                        stack3 = __Math;// JIT: redundant assigment, value unused
//                        stack4 = this;// JIT: redundant assigment, value unused
                        // 7 1:states:LevelState::sinCounter
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
                        stack4 = this.$BgsinCounter;
//                        stack5 = 13.5;// JIT: redundant assigment, value unused
                        stack4 += 13.5;
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
                                    stack3 = __Math.axCallProperty($names[4], [stack4], false);
                                }
                            }
                        }
//                        stack4 = 2;// JIT: redundant assigment, value unused
                        stack3 *= 2;
                        stack2 += stack3;
                        if (!(_a = typeof __Math, ((_a !== 'object' && _a !== 'function' ) || __Math == null || __Math[AX_CLASS_SYMBOL]))) {
                           stack1 = __Math.round(stack2);
                        } else {
                            // 7 0::round
                            {
                                let t = __Math;
                                const m = t.$Bground || (t = sec.box(__Math), t.$Bground);
                                if( typeof m === "function" ) { 
                                    stack1 = t.$Bground (stack2);
                                } else { 
                                    stack1 = __Math.axCallProperty($names[5], [stack2], false);
                                }
                            }
                        }
                        // 9 {3, 0, 1:states:LevelState, 0:levels, 0:flash.display, 0:flash.events, 3, 0:states, 2:states, 0:http://adobe.com/AS3/2006/builtin, 0:flash.net, 0:flash.ui, 5:states:LevelState}::y
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.y = stack1;
                        } else {
                            context.setproperty($names[6], stack1, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::premiumPanel
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::PremiumPanel  */ 
                        stack0 = this.$BgpremiumPanel;
                        // 7 0::titleText
                        //Possible type:7 0::PremiumPanel
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['titleText'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgtitleText;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[2]);
                            }
                        }
                        // 9 {3, 0, 1:states:LevelState, 0:levels, 0:flash.display, 0:flash.events, 3, 0:states, 2:states, 0:http://adobe.com/AS3/2006/builtin, 0:flash.net, 0:flash.ui, 5:states:LevelState}::letter9
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['letter9'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgletter9;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[14]);
                            }
                        }
                        // 7 0::Math
                        /* GenerateLexImports GETLEX */
//                        stack1 = __Math;// JIT: redundant assigment, value unused
                        stack2 = -7;
                        // 7 0::Math
                        /* GenerateLexImports GETLEX */
//                        stack3 = __Math;// JIT: redundant assigment, value unused
//                        stack4 = this;// JIT: redundant assigment, value unused
                        // 7 1:states:LevelState::sinCounter
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
                        stack4 = this.$BgsinCounter;
//                        stack5 = 15;// JIT: redundant assigment, value unused
                        stack4 += 15;
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
                                    stack3 = __Math.axCallProperty($names[4], [stack4], false);
                                }
                            }
                        }
//                        stack4 = 2;// JIT: redundant assigment, value unused
                        stack3 *= 2;
                        stack2 += stack3;
                        if (!(_a = typeof __Math, ((_a !== 'object' && _a !== 'function' ) || __Math == null || __Math[AX_CLASS_SYMBOL]))) {
                           stack1 = __Math.round(stack2);
                        } else {
                            // 7 0::round
                            {
                                let t = __Math;
                                const m = t.$Bground || (t = sec.box(__Math), t.$Bground);
                                if( typeof m === "function" ) { 
                                    stack1 = t.$Bground (stack2);
                                } else { 
                                    stack1 = __Math.axCallProperty($names[5], [stack2], false);
                                }
                            }
                        }
                        // 9 {3, 0, 1:states:LevelState, 0:levels, 0:flash.display, 0:flash.events, 3, 0:states, 2:states, 0:http://adobe.com/AS3/2006/builtin, 0:flash.net, 0:flash.ui, 5:states:LevelState}::y
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.y = stack1;
                        } else {
                            context.setproperty($names[6], stack1, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::premiumPanel
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::PremiumPanel  */ 
                        stack0 = this.$BgpremiumPanel;
                        // 7 0::titleText
                        //Possible type:7 0::PremiumPanel
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['titleText'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgtitleText;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[2]);
                            }
                        }
                        // 9 {3, 0, 1:states:LevelState, 0:levels, 0:flash.display, 0:flash.events, 3, 0:states, 2:states, 0:http://adobe.com/AS3/2006/builtin, 0:flash.net, 0:flash.ui, 5:states:LevelState}::letter10
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['letter10'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgletter10;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[15]);
                            }
                        }
                        // 7 0::Math
                        /* GenerateLexImports GETLEX */
//                        stack1 = __Math;// JIT: redundant assigment, value unused
                        stack2 = -7;
                        // 7 0::Math
                        /* GenerateLexImports GETLEX */
//                        stack3 = __Math;// JIT: redundant assigment, value unused
//                        stack4 = this;// JIT: redundant assigment, value unused
                        // 7 1:states:LevelState::sinCounter
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
                        stack4 = this.$BgsinCounter;
//                        stack5 = 16.5;// JIT: redundant assigment, value unused
                        stack4 += 16.5;
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
                                    stack3 = __Math.axCallProperty($names[4], [stack4], false);
                                }
                            }
                        }
//                        stack4 = 2;// JIT: redundant assigment, value unused
                        stack3 *= 2;
                        stack2 += stack3;
                        if (!(_a = typeof __Math, ((_a !== 'object' && _a !== 'function' ) || __Math == null || __Math[AX_CLASS_SYMBOL]))) {
                           stack1 = __Math.round(stack2);
                        } else {
                            // 7 0::round
                            {
                                let t = __Math;
                                const m = t.$Bground || (t = sec.box(__Math), t.$Bground);
                                if( typeof m === "function" ) { 
                                    stack1 = t.$Bground (stack2);
                                } else { 
                                    stack1 = __Math.axCallProperty($names[5], [stack2], false);
                                }
                            }
                        }
                        // 9 {3, 0, 1:states:LevelState, 0:levels, 0:flash.display, 0:flash.events, 3, 0:states, 2:states, 0:http://adobe.com/AS3/2006/builtin, 0:flash.net, 0:flash.ui, 5:states:LevelState}::y
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.y = stack1;
                        } else {
                            context.setproperty($names[6], stack1, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::premiumPanel
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::PremiumPanel  */ 
                        stack0 = this.$BgpremiumPanel;
                        // 7 0::titleText
                        //Possible type:7 0::PremiumPanel
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['titleText'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgtitleText;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[2]);
                            }
                        }
                        // 9 {3, 0, 1:states:LevelState, 0:levels, 0:flash.display, 0:flash.events, 3, 0:states, 2:states, 0:http://adobe.com/AS3/2006/builtin, 0:flash.net, 0:flash.ui, 5:states:LevelState}::letter11
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['letter11'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgletter11;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[16]);
                            }
                        }
                        // 7 0::Math
                        /* GenerateLexImports GETLEX */
//                        stack1 = __Math;// JIT: redundant assigment, value unused
                        stack2 = -7;
                        // 7 0::Math
                        /* GenerateLexImports GETLEX */
//                        stack3 = __Math;// JIT: redundant assigment, value unused
//                        stack4 = this;// JIT: redundant assigment, value unused
                        // 7 1:states:LevelState::sinCounter
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
                        stack4 = this.$BgsinCounter;
//                        stack5 = 18;// JIT: redundant assigment, value unused
                        stack4 += 18;
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
                                    stack3 = __Math.axCallProperty($names[4], [stack4], false);
                                }
                            }
                        }
//                        stack4 = 2;// JIT: redundant assigment, value unused
                        stack3 *= 2;
                        stack2 += stack3;
                        if (!(_a = typeof __Math, ((_a !== 'object' && _a !== 'function' ) || __Math == null || __Math[AX_CLASS_SYMBOL]))) {
                           stack1 = __Math.round(stack2);
                        } else {
                            // 7 0::round
                            {
                                let t = __Math;
                                const m = t.$Bground || (t = sec.box(__Math), t.$Bground);
                                if( typeof m === "function" ) { 
                                    stack1 = t.$Bground (stack2);
                                } else { 
                                    stack1 = __Math.axCallProperty($names[5], [stack2], false);
                                }
                            }
                        }
                        // 9 {3, 0, 1:states:LevelState, 0:levels, 0:flash.display, 0:flash.events, 3, 0:states, 2:states, 0:http://adobe.com/AS3/2006/builtin, 0:flash.net, 0:flash.ui, 5:states:LevelState}::y
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.y = stack1;
                        } else {
                            context.setproperty($names[6], stack1, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::premiumPanel
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::PremiumPanel  */ 
                        stack0 = this.$BgpremiumPanel;
                        // 7 0::titleText
                        //Possible type:7 0::PremiumPanel
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['titleText'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgtitleText;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[2]);
                            }
                        }
                        // 9 {3, 0, 1:states:LevelState, 0:levels, 0:flash.display, 0:flash.events, 3, 0:states, 2:states, 0:http://adobe.com/AS3/2006/builtin, 0:flash.net, 0:flash.ui, 5:states:LevelState}::letter12
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['letter12'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgletter12;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[17]);
                            }
                        }
                        // 7 0::Math
                        /* GenerateLexImports GETLEX */
//                        stack1 = __Math;// JIT: redundant assigment, value unused
                        stack2 = -7;
                        // 7 0::Math
                        /* GenerateLexImports GETLEX */
//                        stack3 = __Math;// JIT: redundant assigment, value unused
//                        stack4 = this;// JIT: redundant assigment, value unused
                        // 7 1:states:LevelState::sinCounter
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
                        stack4 = this.$BgsinCounter;
//                        stack5 = 19.5;// JIT: redundant assigment, value unused
                        stack4 += 19.5;
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
                                    stack3 = __Math.axCallProperty($names[4], [stack4], false);
                                }
                            }
                        }
//                        stack4 = 2;// JIT: redundant assigment, value unused
                        stack3 *= 2;
                        stack2 += stack3;
                        if (!(_a = typeof __Math, ((_a !== 'object' && _a !== 'function' ) || __Math == null || __Math[AX_CLASS_SYMBOL]))) {
                           stack1 = __Math.round(stack2);
                        } else {
                            // 7 0::round
                            {
                                let t = __Math;
                                const m = t.$Bground || (t = sec.box(__Math), t.$Bground);
                                if( typeof m === "function" ) { 
                                    stack1 = t.$Bground (stack2);
                                } else { 
                                    stack1 = __Math.axCallProperty($names[5], [stack2], false);
                                }
                            }
                        }
                        // 9 {3, 0, 1:states:LevelState, 0:levels, 0:flash.display, 0:flash.events, 3, 0:states, 2:states, 0:http://adobe.com/AS3/2006/builtin, 0:flash.net, 0:flash.ui, 5:states:LevelState}::y
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.y = stack1;
                        } else {
                            context.setproperty($names[6], stack1, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::premiumPanel
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::PremiumPanel  */ 
                        stack0 = this.$BgpremiumPanel;
                        // 7 0::shades1
                        //Possible type:7 0::PremiumPanel
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['shades1'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgshades1;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[20]);
                            }
                        }
                        // 7 0::Math
                        /* GenerateLexImports GETLEX */
//                        stack1 = __Math;// JIT: redundant assigment, value unused
                        stack2 = 25;
                        // 7 0::Math
                        /* GenerateLexImports GETLEX */
//                        stack3 = __Math;// JIT: redundant assigment, value unused
//                        stack4 = this;// JIT: redundant assigment, value unused
                        // 7 1:states:LevelState::sinCounter
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
                        stack4 = this.$BgsinCounter;
//                        stack5 = 1.5;// JIT: redundant assigment, value unused
                        stack4 += 1.5;
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
                                    stack3 = __Math.axCallProperty($names[4], [stack4], false);
                                }
                            }
                        }
//                        stack4 = 4;// JIT: redundant assigment, value unused
                        stack3 *= 4;
                        stack2 += stack3;
                        if (!(_a = typeof __Math, ((_a !== 'object' && _a !== 'function' ) || __Math == null || __Math[AX_CLASS_SYMBOL]))) {
                           stack1 = __Math.round(stack2);
                        } else {
                            // 7 0::round
                            {
                                let t = __Math;
                                const m = t.$Bground || (t = sec.box(__Math), t.$Bground);
                                if( typeof m === "function" ) { 
                                    stack1 = t.$Bground (stack2);
                                } else { 
                                    stack1 = __Math.axCallProperty($names[5], [stack2], false);
                                }
                            }
                        }
                        // 7 0::x
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.x = stack1;
                        } else {
                            context.setproperty($names[21], stack1, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::premiumPanel
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::PremiumPanel  */ 
                        stack0 = this.$BgpremiumPanel;
                        // 7 0::shades2
                        //Possible type:7 0::PremiumPanel
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['shades2'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgshades2;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[22]);
                            }
                        }
                        // 7 0::Math
                        /* GenerateLexImports GETLEX */
//                        stack1 = __Math;// JIT: redundant assigment, value unused
                        stack2 = 25;
                        // 7 0::Math
                        /* GenerateLexImports GETLEX */
//                        stack3 = __Math;// JIT: redundant assigment, value unused
//                        stack4 = this;// JIT: redundant assigment, value unused
                        // 7 1:states:LevelState::sinCounter
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
                        stack4 = this.$BgsinCounter;
//                        stack5 = 3;// JIT: redundant assigment, value unused
                        stack4 += 3;
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
                                    stack3 = __Math.axCallProperty($names[4], [stack4], false);
                                }
                            }
                        }
//                        stack4 = 4;// JIT: redundant assigment, value unused
                        stack3 *= 4;
                        stack2 += stack3;
                        if (!(_a = typeof __Math, ((_a !== 'object' && _a !== 'function' ) || __Math == null || __Math[AX_CLASS_SYMBOL]))) {
                           stack1 = __Math.round(stack2);
                        } else {
                            // 7 0::round
                            {
                                let t = __Math;
                                const m = t.$Bground || (t = sec.box(__Math), t.$Bground);
                                if( typeof m === "function" ) { 
                                    stack1 = t.$Bground (stack2);
                                } else { 
                                    stack1 = __Math.axCallProperty($names[5], [stack2], false);
                                }
                            }
                        }
                        // 7 0::x
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.x = stack1;
                        } else {
                            context.setproperty($names[21], stack1, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::premiumPanel
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::PremiumPanel  */ 
                        stack0 = this.$BgpremiumPanel;
                        // 7 0::shades3
                        //Possible type:7 0::PremiumPanel
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['shades3'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgshades3;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[23]);
                            }
                        }
                        // 7 0::Math
                        /* GenerateLexImports GETLEX */
//                        stack1 = __Math;// JIT: redundant assigment, value unused
                        stack2 = 25;
                        // 7 0::Math
                        /* GenerateLexImports GETLEX */
//                        stack3 = __Math;// JIT: redundant assigment, value unused
//                        stack4 = this;// JIT: redundant assigment, value unused
                        // 7 1:states:LevelState::sinCounter
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
                        stack4 = this.$BgsinCounter;
//                        stack5 = 4.5;// JIT: redundant assigment, value unused
                        stack4 += 4.5;
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
                                    stack3 = __Math.axCallProperty($names[4], [stack4], false);
                                }
                            }
                        }
//                        stack4 = 4;// JIT: redundant assigment, value unused
                        stack3 *= 4;
                        stack2 += stack3;
                        if (!(_a = typeof __Math, ((_a !== 'object' && _a !== 'function' ) || __Math == null || __Math[AX_CLASS_SYMBOL]))) {
                           stack1 = __Math.round(stack2);
                        } else {
                            // 7 0::round
                            {
                                let t = __Math;
                                const m = t.$Bground || (t = sec.box(__Math), t.$Bground);
                                if( typeof m === "function" ) { 
                                    stack1 = t.$Bground (stack2);
                                } else { 
                                    stack1 = __Math.axCallProperty($names[5], [stack2], false);
                                }
                            }
                        }
                        // 7 0::x
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.x = stack1;
                        } else {
                            context.setproperty($names[21], stack1, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::premiumPanel
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::PremiumPanel  */ 
                        stack0 = this.$BgpremiumPanel;
                        // 7 0::shades4
                        //Possible type:7 0::PremiumPanel
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['shades4'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgshades4;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[24]);
                            }
                        }
                        // 7 0::Math
                        /* GenerateLexImports GETLEX */
//                        stack1 = __Math;// JIT: redundant assigment, value unused
                        stack2 = 218;
                        // 7 0::Math
                        /* GenerateLexImports GETLEX */
//                        stack3 = __Math;// JIT: redundant assigment, value unused
//                        stack4 = this;// JIT: redundant assigment, value unused
                        // 7 1:states:LevelState::sinCounter
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
                        stack4 = this.$BgsinCounter;
//                        stack5 = 1.5;// JIT: redundant assigment, value unused
                        stack4 += 1.5;
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
                                    stack3 = __Math.axCallProperty($names[4], [stack4], false);
                                }
                            }
                        }
//                        stack4 = 4;// JIT: redundant assigment, value unused
                        stack3 *= 4;
                        stack2 += stack3;
                        if (!(_a = typeof __Math, ((_a !== 'object' && _a !== 'function' ) || __Math == null || __Math[AX_CLASS_SYMBOL]))) {
                           stack1 = __Math.round(stack2);
                        } else {
                            // 7 0::round
                            {
                                let t = __Math;
                                const m = t.$Bground || (t = sec.box(__Math), t.$Bground);
                                if( typeof m === "function" ) { 
                                    stack1 = t.$Bground (stack2);
                                } else { 
                                    stack1 = __Math.axCallProperty($names[5], [stack2], false);
                                }
                            }
                        }
                        // 7 0::x
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.x = stack1;
                        } else {
                            context.setproperty($names[21], stack1, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::premiumPanel
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::PremiumPanel  */ 
                        stack0 = this.$BgpremiumPanel;
                        // 7 0::shades5
                        //Possible type:7 0::PremiumPanel
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['shades5'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgshades5;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[25]);
                            }
                        }
                        // 7 0::Math
                        /* GenerateLexImports GETLEX */
//                        stack1 = __Math;// JIT: redundant assigment, value unused
                        stack2 = 218;
                        // 7 0::Math
                        /* GenerateLexImports GETLEX */
//                        stack3 = __Math;// JIT: redundant assigment, value unused
//                        stack4 = this;// JIT: redundant assigment, value unused
                        // 7 1:states:LevelState::sinCounter
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
                        stack4 = this.$BgsinCounter;
//                        stack5 = 3;// JIT: redundant assigment, value unused
                        stack4 += 3;
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
                                    stack3 = __Math.axCallProperty($names[4], [stack4], false);
                                }
                            }
                        }
//                        stack4 = 4;// JIT: redundant assigment, value unused
                        stack3 *= 4;
                        stack2 += stack3;
                        if (!(_a = typeof __Math, ((_a !== 'object' && _a !== 'function' ) || __Math == null || __Math[AX_CLASS_SYMBOL]))) {
                           stack1 = __Math.round(stack2);
                        } else {
                            // 7 0::round
                            {
                                let t = __Math;
                                const m = t.$Bground || (t = sec.box(__Math), t.$Bground);
                                if( typeof m === "function" ) { 
                                    stack1 = t.$Bground (stack2);
                                } else { 
                                    stack1 = __Math.axCallProperty($names[5], [stack2], false);
                                }
                            }
                        }
                        // 7 0::x
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.x = stack1;
                        } else {
                            context.setproperty($names[21], stack1, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::premiumPanel
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::PremiumPanel  */ 
                        stack0 = this.$BgpremiumPanel;
                        // 7 0::shades6
                        //Possible type:7 0::PremiumPanel
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['shades6'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgshades6;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[26]);
                            }
                        }
                        // 7 0::Math
                        /* GenerateLexImports GETLEX */
//                        stack1 = __Math;// JIT: redundant assigment, value unused
                        stack2 = 218;
                        // 7 0::Math
                        /* GenerateLexImports GETLEX */
//                        stack3 = __Math;// JIT: redundant assigment, value unused
//                        stack4 = this;// JIT: redundant assigment, value unused
                        // 7 1:states:LevelState::sinCounter
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
                        stack4 = this.$BgsinCounter;
//                        stack5 = 4.5;// JIT: redundant assigment, value unused
                        stack4 += 4.5;
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
                                    stack3 = __Math.axCallProperty($names[4], [stack4], false);
                                }
                            }
                        }
//                        stack4 = 4;// JIT: redundant assigment, value unused
                        stack3 *= 4;
                        stack2 += stack3;
                        if (!(_a = typeof __Math, ((_a !== 'object' && _a !== 'function' ) || __Math == null || __Math[AX_CLASS_SYMBOL]))) {
                           stack1 = __Math.round(stack2);
                        } else {
                            // 7 0::round
                            {
                                let t = __Math;
                                const m = t.$Bground || (t = sec.box(__Math), t.$Bground);
                                if( typeof m === "function" ) { 
                                    stack1 = t.$Bground (stack2);
                                } else { 
                                    stack1 = __Math.axCallProperty($names[5], [stack2], false);
                                }
                            }
                        }
                        // 7 0::x
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.x = stack1;
                        } else {
                            context.setproperty($names[21], stack1, stack0);
                        }
                    case 1325:
                        return;
                    }
                }
            }
//# sourceURL=http://jit/states/LevelState/m_updatePremiumPanelSin.js
})