(function anonymous(context
) {
/*
	Index: 1784
	Path:  levels/collisions/TutorialCollision::m_update
	Type:  Public
	Kind:  Method
	Super: levels/collisions/LevelCollision
	Return: 7 0::void
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_m_update() {
        // Possible use a real "this"

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
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack0 = this.$BglevelCollisionSprite;
                        // 9 {3, 0, 3, 0:levels.collisions, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.events, 0:flash.geom, 0:levels, 0:entities, 1:levels.collisions:TutorialCollision, 5:levels.collisions:TutorialCollision, 5:levels.collisions:LevelCollision}::vSynch
                        //Possible type:7 0::levelCollisionSprite
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['vSynch'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgvSynch;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[0]);
                            }
                        }
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack1 = this.$BglevelCollisionSprite;
                        // 9 {3, 0, 3, 0:levels.collisions, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.events, 0:flash.geom, 0:levels, 0:entities, 1:levels.collisions:TutorialCollision, 5:levels.collisions:TutorialCollision, 5:levels.collisions:LevelCollision}::vSynchMask
                        //Possible type:7 0::levelCollisionSprite
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['vSynchMask'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$BgvSynchMask;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[1]);
                            }
                        }
                        // 9 {3, 0, 3, 0:levels.collisions, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.events, 0:flash.geom, 0:levels, 0:entities, 1:levels.collisions:TutorialCollision, 5:levels.collisions:TutorialCollision, 5:levels.collisions:LevelCollision}::mask
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.mask = stack1;
                        } else {
                            context.setproperty($names[2], stack1, stack0);
                        }
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[3], true, false);
                        stack0 = temp.$BgUtils;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[3]);
                        }
                        // 7 0::IS_USING_JOYPAD
                        //Possible type:7 0::Utils
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['IS_USING_JOYPAD'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgIS_USING_JOYPAD;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[4]);
                            }
                        }
                        if (!stack0) { p = 182; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:TutorialCollision::INDEX
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::int  */ 
                        stack0 = this.$BgINDEX;
                        stack1 = 1;
                        if (1 != stack0) { p = 58; continue; };
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack0 = this.$BglevelCollisionSprite;
                        // 9 {3, 0, 3, 0:levels.collisions, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.events, 0:flash.geom, 0:levels, 0:entities, 1:levels.collisions:TutorialCollision, 5:levels.collisions:TutorialCollision, 5:levels.collisions:LevelCollision}::tutorialText
                        //Possible type:7 0::levelCollisionSprite
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['tutorialText'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgtutorialText;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[5]);
                            }
                        }
                        // 7 0::int
                        temp = scope0.findScopeProperty($names[6], true, false);
                        stack1 = temp.$Bgint;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[6]);
                        }
                        stack2 = context.savedScope.global.object;
//                        stack3 = 18;// JIT: redundant assigment, value unused
                        stack1 = context.call(stack1, stack2, [18], scope0);
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.gotoAndStop(stack1);
                        } else {
                            // 9 {3, 0, 3, 0:levels.collisions, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.events, 0:flash.geom, 0:levels, 0:entities, 1:levels.collisions:TutorialCollision, 5:levels.collisions:TutorialCollision, 5:levels.collisions:LevelCollision}::gotoAndStop
                            {
                                let t = stack0;
                                const m = t.$BggotoAndStop || (t = sec.box(stack0), t.$BggotoAndStop);
                                if( typeof m === "function" ) { 
                                    m.call(t, stack1);
                                } else { 
                                   stack0.axCallProperty($names[7], [stack1], false);
                                }
                            }
                        }
                        { p = 178; continue; };
                    case 58:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:TutorialCollision::INDEX
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::int  */ 
                        stack0 = this.$BgINDEX;
                        stack1 = 2;
                        if (2 != stack0) { p = 120; continue; };
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[3], true, false);
                        stack0 = temp.$BgUtils;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[3]);
                        }
                        // 7 0::IS_PLAYSTATION_JOYPAD
                        //Possible type:7 0::Utils
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['IS_PLAYSTATION_JOYPAD'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgIS_PLAYSTATION_JOYPAD;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[8]);
                            }
                        }
                        if (!stack0) { p = 99; continue; };
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack0 = this.$BglevelCollisionSprite;
                        // 9 {3, 0, 3, 0:levels.collisions, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.events, 0:flash.geom, 0:levels, 0:entities, 1:levels.collisions:TutorialCollision, 5:levels.collisions:TutorialCollision, 5:levels.collisions:LevelCollision}::tutorialText
                        //Possible type:7 0::levelCollisionSprite
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['tutorialText'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgtutorialText;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[5]);
                            }
                        }
                        // 7 0::int
                        temp = scope0.findScopeProperty($names[6], true, false);
                        stack1 = temp.$Bgint;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[6]);
                        }
                        stack2 = context.savedScope.global.object;
//                        stack3 = 21;// JIT: redundant assigment, value unused
                        stack1 = context.call(stack1, stack2, [21], scope0);
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.gotoAndStop(stack1);
                        } else {
                            // 9 {3, 0, 3, 0:levels.collisions, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.events, 0:flash.geom, 0:levels, 0:entities, 1:levels.collisions:TutorialCollision, 5:levels.collisions:TutorialCollision, 5:levels.collisions:LevelCollision}::gotoAndStop
                            {
                                let t = stack0;
                                const m = t.$BggotoAndStop || (t = sec.box(stack0), t.$BggotoAndStop);
                                if( typeof m === "function" ) { 
                                    m.call(t, stack1);
                                } else { 
                                   stack0.axCallProperty($names[7], [stack1], false);
                                }
                            }
                        }
                        { p = 116; continue; };
                    case 99:
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack0 = this.$BglevelCollisionSprite;
                        // 9 {3, 0, 3, 0:levels.collisions, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.events, 0:flash.geom, 0:levels, 0:entities, 1:levels.collisions:TutorialCollision, 5:levels.collisions:TutorialCollision, 5:levels.collisions:LevelCollision}::tutorialText
                        //Possible type:7 0::levelCollisionSprite
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['tutorialText'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgtutorialText;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[5]);
                            }
                        }
                        // 7 0::int
                        temp = scope0.findScopeProperty($names[6], true, false);
                        stack1 = temp.$Bgint;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[6]);
                        }
                        stack2 = context.savedScope.global.object;
//                        stack3 = 19;// JIT: redundant assigment, value unused
                        stack1 = context.call(stack1, stack2, [19], scope0);
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.gotoAndStop(stack1);
                        } else {
                            // 9 {3, 0, 3, 0:levels.collisions, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.events, 0:flash.geom, 0:levels, 0:entities, 1:levels.collisions:TutorialCollision, 5:levels.collisions:TutorialCollision, 5:levels.collisions:LevelCollision}::gotoAndStop
                            {
                                let t = stack0;
                                const m = t.$BggotoAndStop || (t = sec.box(stack0), t.$BggotoAndStop);
                                if( typeof m === "function" ) { 
                                    m.call(t, stack1);
                                } else { 
                                   stack0.axCallProperty($names[7], [stack1], false);
                                }
                            }
                        }
                    case 116:
                        { p = 178; continue; };
                    case 120:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:TutorialCollision::INDEX
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::int  */ 
                        stack0 = this.$BgINDEX;
                        stack1 = 3;
                        if (3 != stack0) { p = 178; continue; };
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[3], true, false);
                        stack0 = temp.$BgUtils;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[3]);
                        }
                        // 7 0::IS_PLAYSTATION_JOYPAD
                        //Possible type:7 0::Utils
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['IS_PLAYSTATION_JOYPAD'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgIS_PLAYSTATION_JOYPAD;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[8]);
                            }
                        }
                        if (!stack0) { p = 161; continue; };
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack0 = this.$BglevelCollisionSprite;
                        // 9 {3, 0, 3, 0:levels.collisions, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.events, 0:flash.geom, 0:levels, 0:entities, 1:levels.collisions:TutorialCollision, 5:levels.collisions:TutorialCollision, 5:levels.collisions:LevelCollision}::tutorialText
                        //Possible type:7 0::levelCollisionSprite
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['tutorialText'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgtutorialText;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[5]);
                            }
                        }
                        // 7 0::int
                        temp = scope0.findScopeProperty($names[6], true, false);
                        stack1 = temp.$Bgint;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[6]);
                        }
                        stack2 = context.savedScope.global.object;
//                        stack3 = 22;// JIT: redundant assigment, value unused
                        stack1 = context.call(stack1, stack2, [22], scope0);
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.gotoAndStop(stack1);
                        } else {
                            // 9 {3, 0, 3, 0:levels.collisions, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.events, 0:flash.geom, 0:levels, 0:entities, 1:levels.collisions:TutorialCollision, 5:levels.collisions:TutorialCollision, 5:levels.collisions:LevelCollision}::gotoAndStop
                            {
                                let t = stack0;
                                const m = t.$BggotoAndStop || (t = sec.box(stack0), t.$BggotoAndStop);
                                if( typeof m === "function" ) { 
                                    m.call(t, stack1);
                                } else { 
                                   stack0.axCallProperty($names[7], [stack1], false);
                                }
                            }
                        }
                        { p = 178; continue; };
                    case 161:
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack0 = this.$BglevelCollisionSprite;
                        // 9 {3, 0, 3, 0:levels.collisions, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.events, 0:flash.geom, 0:levels, 0:entities, 1:levels.collisions:TutorialCollision, 5:levels.collisions:TutorialCollision, 5:levels.collisions:LevelCollision}::tutorialText
                        //Possible type:7 0::levelCollisionSprite
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['tutorialText'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgtutorialText;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[5]);
                            }
                        }
                        // 7 0::int
                        temp = scope0.findScopeProperty($names[6], true, false);
                        stack1 = temp.$Bgint;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[6]);
                        }
                        stack2 = context.savedScope.global.object;
//                        stack3 = 20;// JIT: redundant assigment, value unused
                        stack1 = context.call(stack1, stack2, [20], scope0);
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.gotoAndStop(stack1);
                        } else {
                            // 9 {3, 0, 3, 0:levels.collisions, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.events, 0:flash.geom, 0:levels, 0:entities, 1:levels.collisions:TutorialCollision, 5:levels.collisions:TutorialCollision, 5:levels.collisions:LevelCollision}::gotoAndStop
                            {
                                let t = stack0;
                                const m = t.$BggotoAndStop || (t = sec.box(stack0), t.$BggotoAndStop);
                                if( typeof m === "function" ) { 
                                    m.call(t, stack1);
                                } else { 
                                   stack0.axCallProperty($names[7], [stack1], false);
                                }
                            }
                        }
                    case 178:
                        //JIT: Emit inline return
                        return;
                    case 182:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:TutorialCollision::INDEX
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::int  */ 
                        stack0 = this.$BgINDEX;
                        stack1 = 1;
                        if (1 != stack0) { p = 210; continue; };
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack0 = this.$BglevelCollisionSprite;
                        // 9 {3, 0, 3, 0:levels.collisions, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.events, 0:flash.geom, 0:levels, 0:entities, 1:levels.collisions:TutorialCollision, 5:levels.collisions:TutorialCollision, 5:levels.collisions:LevelCollision}::tutorialText
                        //Possible type:7 0::levelCollisionSprite
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['tutorialText'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgtutorialText;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[5]);
                            }
                        }
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:TutorialCollision::INDEX
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::int  */ 
                        stack1 = this.$BgINDEX;
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.gotoAndStop(stack1);
                        } else {
                            // 9 {3, 0, 3, 0:levels.collisions, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.events, 0:flash.geom, 0:levels, 0:entities, 1:levels.collisions:TutorialCollision, 5:levels.collisions:TutorialCollision, 5:levels.collisions:LevelCollision}::gotoAndStop
                            {
                                let t = stack0;
                                const m = t.$BggotoAndStop || (t = sec.box(stack0), t.$BggotoAndStop);
                                if( typeof m === "function" ) { 
                                    m.call(t, stack1);
                                } else { 
                                   stack0.axCallProperty($names[7], [stack1], false);
                                }
                            }
                        }
                        //JIT: Emit inline return
                        return;
                    case 210:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:TutorialCollision::INDEX
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::int  */ 
                        stack0 = this.$BgINDEX;
                        stack1 = 2;
                        if (2 != stack0) { p = 238; continue; };
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack0 = this.$BglevelCollisionSprite;
                        // 9 {3, 0, 3, 0:levels.collisions, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.events, 0:flash.geom, 0:levels, 0:entities, 1:levels.collisions:TutorialCollision, 5:levels.collisions:TutorialCollision, 5:levels.collisions:LevelCollision}::tutorialText
                        //Possible type:7 0::levelCollisionSprite
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['tutorialText'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgtutorialText;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[5]);
                            }
                        }
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:TutorialCollision::INDEX
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::int  */ 
                        stack1 = this.$BgINDEX;
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.gotoAndStop(stack1);
                        } else {
                            // 9 {3, 0, 3, 0:levels.collisions, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.events, 0:flash.geom, 0:levels, 0:entities, 1:levels.collisions:TutorialCollision, 5:levels.collisions:TutorialCollision, 5:levels.collisions:LevelCollision}::gotoAndStop
                            {
                                let t = stack0;
                                const m = t.$BggotoAndStop || (t = sec.box(stack0), t.$BggotoAndStop);
                                if( typeof m === "function" ) { 
                                    m.call(t, stack1);
                                } else { 
                                   stack0.axCallProperty($names[7], [stack1], false);
                                }
                            }
                        }
                        //JIT: Emit inline return
                        return;
                    case 238:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:TutorialCollision::INDEX
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::int  */ 
                        stack0 = this.$BgINDEX;
                        stack1 = 3;
                        //JIT: Emit inline return
                        if (3 != stack0) { return; }
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack0 = this.$BglevelCollisionSprite;
                        // 9 {3, 0, 3, 0:levels.collisions, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.events, 0:flash.geom, 0:levels, 0:entities, 1:levels.collisions:TutorialCollision, 5:levels.collisions:TutorialCollision, 5:levels.collisions:LevelCollision}::tutorialText
                        //Possible type:7 0::levelCollisionSprite
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['tutorialText'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgtutorialText;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[5]);
                            }
                        }
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:TutorialCollision::INDEX
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::int  */ 
                        stack1 = this.$BgINDEX;
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.gotoAndStop(stack1);
                        } else {
                            // 9 {3, 0, 3, 0:levels.collisions, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.events, 0:flash.geom, 0:levels, 0:entities, 1:levels.collisions:TutorialCollision, 5:levels.collisions:TutorialCollision, 5:levels.collisions:LevelCollision}::gotoAndStop
                            {
                                let t = stack0;
                                const m = t.$BggotoAndStop || (t = sec.box(stack0), t.$BggotoAndStop);
                                if( typeof m === "function" ) { 
                                    m.call(t, stack1);
                                } else { 
                                   stack0.axCallProperty($names[7], [stack1], false);
                                }
                            }
                        }
                    case 262:
                        return;
                    }
                }
            }
//# sourceURL=http://jit/levels/collisions/TutorialCollision/m_update.js
})