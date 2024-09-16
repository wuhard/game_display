(function anonymous(context
) {
/*
	Index: 1069
	Path:  entities/SmallHero::constructor
	Type:  Public
	Kind:  null
	Super: entities/Entity
	Return: 7 0::void
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_constructor(local1 /* Level */, local2 /* Number */, local3 /* Number */) {
        // Possible use a real "this"
        /* Force Number coerce */
        local2 = (+local2);
        /* Force Number coerce */
        local3 = (+local3);
        // local4 is assigned before read, skip init
        let local4 = undefined
        // local5 is assigned before read, skip init
        let local5 = undefined
        let stack0 = undefined;
        let stack1 = undefined;
        let stack2 = undefined;
        let stack3 = undefined;
        let stack4 = undefined;
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
                        stack0 = this;
//                        // JIT: potential type:7 0:levels::Level// JIT: redundant assigment, value unused
                        stack1 = local1;
                        context.savedScope.superConstructor.call(this, local1);
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = 0;// JIT: redundant assigment, value unused
                        // 7 0::heroDeadAtX
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: null  */ 
                        this.$BgheroDeadAtX = 0;
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = 0;// JIT: redundant assigment, value unused
                        // 7 0::heroDeadAtY
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Number  */ 
                        this.$BgheroDeadAtY = 0;
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = 1;// JIT: redundant assigment, value unused
                        // 7 0::magnitude
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Number  */ 
                        this.$Bgmagnitude = 1;
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        // JIT: potential type:7 0::Number// JIT: redundant assigment, value unused
                        stack1 = local2;
                        // 7 0::initXPos
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: null  */ 
                        this.$BginitXPos = local2;
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        // JIT: potential type:7 0::Number// JIT: redundant assigment, value unused
                        stack1 = local3;
                        // 7 0::initYPos
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Number  */ 
                        this.$BginitYPos = (+local3);
                        // 7 0::animationManager
                        stack0 = scope0.findScopeProperty($names[0], false, false);
                        // 7 0:entities::AnimationManager
                        stack1 = scope0.findScopeProperty($names[1], true, false);
//                        stack2 = this;// JIT: redundant assigment, value unused
                        //JIT: Support fast construct:AnimationManager/Object
                        stack1 = context.constructFast(stack1, [this], $names[1]);
                        // 7 0::animationManager
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.animationManager = stack1;
                        } else {
                            context.setproperty($names[0], stack1, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        /* We sure that this safe call, represented in TRAIT as Method  */ 
                        this.$BginitHeroGeometry();
                        // 7 0::entitySprite
                        stack0 = scope0.findScopeProperty($names[2], false, false);
                        // 7 0:flash.display::MovieClip
                        stack1 = scope0.findScopeProperty($names[3], true, false);
                        stack1 = context.constructprop($names[3], stack1, []);
                        // 7 0::entitySprite
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.entitySprite = stack1;
                        } else {
                            context.setproperty($names[2], stack1, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        /* We sure that this safe call, represented in TRAIT as Method  */ 
                        stack0 = this.$BggetBitmapFilter();
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[4], true, false);
                            _e || console.warn('[constructor] Coerce Type not found:', "BitmapFilter")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        local4 = stack0;
                        // 7 0::Array
                        stack0 = scope0.findScopeProperty($names[5], true, false);
                        //JIT: Support fast construct:Array/Object
                        stack0 = context.constructFast(stack0, [], $names[5]);
                        //IR: Drop coerce, reason: redundant
                        local5 = stack0;
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[6], true, false);
                        stack0 = temp.$BgUtils;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[6]);
                        }
                        // 7 0::IS_ANDROID
                        //Possible type:7 0::Utils
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['IS_ANDROID'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgIS_ANDROID;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[7]);
                            }
                        }
                        if (!stack0) { p = 96; continue; };
                        { p = 104; continue; };
                    case 96:
//                        stack0 = local5;// JIT: redundant assigment, value unused
//                        stack1 = local4;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local5, ((_a !== 'object' && _a !== 'function' ) || local5 == null || local5[AX_CLASS_SYMBOL]))) {
                            local5.push(local4);
                        } else {
                            // 7 0:http://adobe.com/AS3/2006/builtin::push
                            {
                                let t = local5;
                                const m = t.$Bgpush || (t = sec.box(local5), t.$Bgpush);
                                if( typeof m === "function" ) { 
                                    m.call(t, local4);
                                } else { 
                                   local5.axCallProperty($names[8], [local4], false);
                                }
                            }
                        }
                    case 104:
//                        stack0 = local5;// JIT: redundant assigment, value unused
//                        stack1 = this;// JIT: redundant assigment, value unused
                        /* We sure that this safe call, represented in TRAIT as Method  */ 
                        stack1 = this.$BggetGlowFilter();
                        if (!(_a = typeof local5, ((_a !== 'object' && _a !== 'function' ) || local5 == null || local5[AX_CLASS_SYMBOL]))) {
                            local5.push(stack1);
                        } else {
                            // 7 0:http://adobe.com/AS3/2006/builtin::push
                            {
                                let t = local5;
                                const m = t.$Bgpush || (t = sec.box(local5), t.$Bgpush);
                                if( typeof m === "function" ) { 
                                    m.call(t, stack1);
                                } else { 
                                   local5.axCallProperty($names[8], [stack1], false);
                                }
                            }
                        }
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack0 = this.$BgentitySprite;
//                        stack1 = local5;// JIT: redundant assigment, value unused
                        // 7 0::filters
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.filters = local5;
                        } else {
                            context.setproperty($names[9], local5, stack0);
                        }
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[6], true, false);
                        stack0 = temp.$BgUtils;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[6]);
                        }
                        // 7 0::world
                        //Possible type:7 0::Utils
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['world'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgworld;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[10]);
                            }
                        }
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack1 = this.$BgentitySprite;
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.addChild(stack1);
                        } else {
                            // 7 0::addChild
                            {
                                let t = stack0;
                                const m = t.$BgaddChild || (t = sec.box(stack0), t.$BgaddChild);
                                if( typeof m === "function" ) { 
                                    m.call(t, stack1);
                                } else { 
                                   stack0.axCallProperty($names[11], [stack1], false);
                                }
                            }
                        }
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[6], true, false);
                        stack0 = temp.$BgUtils;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[6]);
                        }
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                           stack0 = stack0.GetSlimeParticleIndex();
                        } else {
                            // 7 0::GetSlimeParticleIndex
                            {
                                let t = stack0;
                                const m = t.$BgGetSlimeParticleIndex || (t = sec.box(stack0), t.$BgGetSlimeParticleIndex);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BgGetSlimeParticleIndex ();
                                } else { 
                                    stack0 = stack0.axCallProperty($names[12], [], false);
                                }
                            }
                        }
                        stack1 = 1;
                        if (1 != stack0) { p = 164; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::Eye
                        stack1 = scope0.findScopeProperty($names[13], true, false);
                        stack1 = context.constructprop($names[13], stack1, []);
                        // 7 0::eye1
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0:flash.display::MovieClip  */ 
                        this.$Bgeye1 = stack1;
                        { p = 287; continue; };
                    case 164:
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[6], true, false);
                        stack0 = temp.$BgUtils;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[6]);
                        }
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                           stack0 = stack0.GetSlimeParticleIndex();
                        } else {
                            // 7 0::GetSlimeParticleIndex
                            {
                                let t = stack0;
                                const m = t.$BgGetSlimeParticleIndex || (t = sec.box(stack0), t.$BgGetSlimeParticleIndex);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BgGetSlimeParticleIndex ();
                                } else { 
                                    stack0 = stack0.axCallProperty($names[12], [], false);
                                }
                            }
                        }
                        stack1 = 2;
                        if (2 != stack0) { p = 192; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::EyeYellow
                        stack1 = scope0.findScopeProperty($names[14], true, false);
                        stack1 = context.constructprop($names[14], stack1, []);
                        // 7 0::eye1
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0:flash.display::MovieClip  */ 
                        this.$Bgeye1 = stack1;
                        { p = 287; continue; };
                    case 192:
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[6], true, false);
                        stack0 = temp.$BgUtils;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[6]);
                        }
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                           stack0 = stack0.GetSlimeParticleIndex();
                        } else {
                            // 7 0::GetSlimeParticleIndex
                            {
                                let t = stack0;
                                const m = t.$BgGetSlimeParticleIndex || (t = sec.box(stack0), t.$BgGetSlimeParticleIndex);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BgGetSlimeParticleIndex ();
                                } else { 
                                    stack0 = stack0.axCallProperty($names[12], [], false);
                                }
                            }
                        }
                        stack1 = 3;
                        if (3 != stack0) { p = 220; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::EyePink
                        stack1 = scope0.findScopeProperty($names[15], true, false);
                        stack1 = context.constructprop($names[15], stack1, []);
                        // 7 0::eye1
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0:flash.display::MovieClip  */ 
                        this.$Bgeye1 = stack1;
                        { p = 287; continue; };
                    case 220:
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[6], true, false);
                        stack0 = temp.$BgUtils;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[6]);
                        }
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                           stack0 = stack0.GetSlimeParticleIndex();
                        } else {
                            // 7 0::GetSlimeParticleIndex
                            {
                                let t = stack0;
                                const m = t.$BgGetSlimeParticleIndex || (t = sec.box(stack0), t.$BgGetSlimeParticleIndex);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BgGetSlimeParticleIndex ();
                                } else { 
                                    stack0 = stack0.axCallProperty($names[12], [], false);
                                }
                            }
                        }
                        stack1 = 4;
                        if (4 != stack0) { p = 248; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::EyeBlue
                        stack1 = scope0.findScopeProperty($names[16], true, false);
                        stack1 = context.constructprop($names[16], stack1, []);
                        // 7 0::eye1
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0:flash.display::MovieClip  */ 
                        this.$Bgeye1 = stack1;
                        { p = 287; continue; };
                    case 248:
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[6], true, false);
                        stack0 = temp.$BgUtils;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[6]);
                        }
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                           stack0 = stack0.GetSlimeParticleIndex();
                        } else {
                            // 7 0::GetSlimeParticleIndex
                            {
                                let t = stack0;
                                const m = t.$BgGetSlimeParticleIndex || (t = sec.box(stack0), t.$BgGetSlimeParticleIndex);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BgGetSlimeParticleIndex ();
                                } else { 
                                    stack0 = stack0.axCallProperty($names[12], [], false);
                                }
                            }
                        }
                        stack1 = 5;
                        if (5 != stack0) { p = 276; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::EyeWhite
                        stack1 = scope0.findScopeProperty($names[17], true, false);
                        stack1 = context.constructprop($names[17], stack1, []);
                        // 7 0::eye1
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0:flash.display::MovieClip  */ 
                        this.$Bgeye1 = stack1;
                        { p = 287; continue; };
                    case 276:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::EyeBrown
                        stack1 = scope0.findScopeProperty($names[18], true, false);
                        stack1 = context.constructprop($names[18], stack1, []);
                        // 7 0::eye1
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0:flash.display::MovieClip  */ 
                        this.$Bgeye1 = stack1;
                    case 287:
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[6], true, false);
                        stack0 = temp.$BgUtils;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[6]);
                        }
                        // 7 0::world
                        //Possible type:7 0::Utils
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['world'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgworld;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[10]);
                            }
                        }
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::eye1
                        //Possible type:7 0::EyeBrown
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack1 = this.$Bgeye1;
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.addChild(stack1);
                        } else {
                            // 7 0::addChild
                            {
                                let t = stack0;
                                const m = t.$BgaddChild || (t = sec.box(stack0), t.$BgaddChild);
                                if( typeof m === "function" ) { 
                                    m.call(t, stack1);
                                } else { 
                                   stack0.axCallProperty($names[11], [stack1], false);
                                }
                            }
                        }
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack0 = this.$BganimationManager;
                        // 7 0:entities::AnimationManager
                        temp = scope0.findScopeProperty($names[1], true, false);
                        stack1 = temp.$BgAnimationManager;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[1]);
                        }
                        // 7 0::IsStandingState
                        //Possible type:7 0:entities::AnimationManager
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['IsStandingState'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$BgIsStandingState;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[19]);
                            }
                        }
                        // 7 0:entities::AnimationManager
                        temp = scope0.findScopeProperty($names[1], true, false);
                        stack2 = temp.$BgAnimationManager;
                        if (stack2 === undefined || typeof stack2 === 'function') {
                            stack2 = temp.axGetProperty($names[1]);
                        }
                        // 7 0::WalkKeyAction
                        //Possible type:7 0:entities::AnimationManager
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['WalkKeyAction'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$BgWalkKeyAction;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[20]);
                            }
                        }
                        // 7 0:entities::AnimationManager
                        temp = scope0.findScopeProperty($names[1], true, false);
                        stack3 = temp.$BgAnimationManager;
                        if (stack3 === undefined || typeof stack3 === 'function') {
                            stack3 = temp.axGetProperty($names[1]);
                        }
                        // 7 0::IsWalkingState
                        //Possible type:7 0:entities::AnimationManager
                        if (!(stack3 != undefined && stack3[AX_CLASS_SYMBOL])) {
                            stack3 = stack3['IsWalkingState'];
                        } else {
                            temp = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);
                            stack3 = temp.$BgIsWalkingState;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[21]);
                            }
                        }
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.setRule(stack1, stack2, stack3);
                        } else {
                            // 7 0::setRule
                            {
                                let t = stack0;
                                const m = t.$BgsetRule || (t = sec.box(stack0), t.$BgsetRule);
                                if( typeof m === "function" ) { 
                                    m.call(t, stack1, stack2, stack3);
                                } else { 
                                   stack0.axCallProperty($names[22], [stack1, stack2, stack3], false);
                                }
                            }
                        }
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack0 = this.$BganimationManager;
                        // 7 0:entities::AnimationManager
                        temp = scope0.findScopeProperty($names[1], true, false);
                        stack1 = temp.$BgAnimationManager;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[1]);
                        }
                        // 7 0::IsWalkingState
                        //Possible type:7 0:entities::AnimationManager
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['IsWalkingState'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$BgIsWalkingState;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[21]);
                            }
                        }
                        // 7 0:entities::AnimationManager
                        temp = scope0.findScopeProperty($names[1], true, false);
                        stack2 = temp.$BgAnimationManager;
                        if (stack2 === undefined || typeof stack2 === 'function') {
                            stack2 = temp.axGetProperty($names[1]);
                        }
                        // 7 0::ZeroXVelAction
                        //Possible type:7 0:entities::AnimationManager
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['ZeroXVelAction'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$BgZeroXVelAction;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[23]);
                            }
                        }
                        // 7 0:entities::AnimationManager
                        temp = scope0.findScopeProperty($names[1], true, false);
                        stack3 = temp.$BgAnimationManager;
                        if (stack3 === undefined || typeof stack3 === 'function') {
                            stack3 = temp.axGetProperty($names[1]);
                        }
                        // 7 0::IsStandingState
                        //Possible type:7 0:entities::AnimationManager
                        if (!(stack3 != undefined && stack3[AX_CLASS_SYMBOL])) {
                            stack3 = stack3['IsStandingState'];
                        } else {
                            temp = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);
                            stack3 = temp.$BgIsStandingState;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[19]);
                            }
                        }
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.setRule(stack1, stack2, stack3);
                        } else {
                            // 7 0::setRule
                            {
                                let t = stack0;
                                const m = t.$BgsetRule || (t = sec.box(stack0), t.$BgsetRule);
                                if( typeof m === "function" ) { 
                                    m.call(t, stack1, stack2, stack3);
                                } else { 
                                   stack0.axCallProperty($names[22], [stack1, stack2, stack3], false);
                                }
                            }
                        }
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack0 = this.$BganimationManager;
                        // 7 0:entities::AnimationManager
                        temp = scope0.findScopeProperty($names[1], true, false);
                        stack1 = temp.$BgAnimationManager;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[1]);
                        }
                        // 7 0::IsStandingState
                        //Possible type:7 0:entities::AnimationManager
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['IsStandingState'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$BgIsStandingState;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[19]);
                            }
                        }
                        // 7 0:entities::AnimationManager
                        temp = scope0.findScopeProperty($names[1], true, false);
                        stack2 = temp.$BgAnimationManager;
                        if (stack2 === undefined || typeof stack2 === 'function') {
                            stack2 = temp.axGetProperty($names[1]);
                        }
                        // 7 0::JumpKeyAction
                        //Possible type:7 0:entities::AnimationManager
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['JumpKeyAction'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$BgJumpKeyAction;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[24]);
                            }
                        }
                        // 7 0:entities::AnimationManager
                        temp = scope0.findScopeProperty($names[1], true, false);
                        stack3 = temp.$BgAnimationManager;
                        if (stack3 === undefined || typeof stack3 === 'function') {
                            stack3 = temp.axGetProperty($names[1]);
                        }
                        // 7 0::IsJumpingState
                        //Possible type:7 0:entities::AnimationManager
                        if (!(stack3 != undefined && stack3[AX_CLASS_SYMBOL])) {
                            stack3 = stack3['IsJumpingState'];
                        } else {
                            temp = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);
                            stack3 = temp.$BgIsJumpingState;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[25]);
                            }
                        }
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.setRule(stack1, stack2, stack3);
                        } else {
                            // 7 0::setRule
                            {
                                let t = stack0;
                                const m = t.$BgsetRule || (t = sec.box(stack0), t.$BgsetRule);
                                if( typeof m === "function" ) { 
                                    m.call(t, stack1, stack2, stack3);
                                } else { 
                                   stack0.axCallProperty($names[22], [stack1, stack2, stack3], false);
                                }
                            }
                        }
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack0 = this.$BganimationManager;
                        // 7 0:entities::AnimationManager
                        temp = scope0.findScopeProperty($names[1], true, false);
                        stack1 = temp.$BgAnimationManager;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[1]);
                        }
                        // 7 0::IsWalkingState
                        //Possible type:7 0:entities::AnimationManager
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['IsWalkingState'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$BgIsWalkingState;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[21]);
                            }
                        }
                        // 7 0:entities::AnimationManager
                        temp = scope0.findScopeProperty($names[1], true, false);
                        stack2 = temp.$BgAnimationManager;
                        if (stack2 === undefined || typeof stack2 === 'function') {
                            stack2 = temp.axGetProperty($names[1]);
                        }
                        // 7 0::JumpKeyAction
                        //Possible type:7 0:entities::AnimationManager
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['JumpKeyAction'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$BgJumpKeyAction;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[24]);
                            }
                        }
                        // 7 0:entities::AnimationManager
                        temp = scope0.findScopeProperty($names[1], true, false);
                        stack3 = temp.$BgAnimationManager;
                        if (stack3 === undefined || typeof stack3 === 'function') {
                            stack3 = temp.axGetProperty($names[1]);
                        }
                        // 7 0::IsJumpingState
                        //Possible type:7 0:entities::AnimationManager
                        if (!(stack3 != undefined && stack3[AX_CLASS_SYMBOL])) {
                            stack3 = stack3['IsJumpingState'];
                        } else {
                            temp = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);
                            stack3 = temp.$BgIsJumpingState;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[25]);
                            }
                        }
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.setRule(stack1, stack2, stack3);
                        } else {
                            // 7 0::setRule
                            {
                                let t = stack0;
                                const m = t.$BgsetRule || (t = sec.box(stack0), t.$BgsetRule);
                                if( typeof m === "function" ) { 
                                    m.call(t, stack1, stack2, stack3);
                                } else { 
                                   stack0.axCallProperty($names[22], [stack1, stack2, stack3], false);
                                }
                            }
                        }
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack0 = this.$BganimationManager;
                        // 7 0:entities::AnimationManager
                        temp = scope0.findScopeProperty($names[1], true, false);
                        stack1 = temp.$BgAnimationManager;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[1]);
                        }
                        // 7 0::IsJumpingState
                        //Possible type:7 0:entities::AnimationManager
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['IsJumpingState'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$BgIsJumpingState;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[25]);
                            }
                        }
                        // 7 0:entities::AnimationManager
                        temp = scope0.findScopeProperty($names[1], true, false);
                        stack2 = temp.$BgAnimationManager;
                        if (stack2 === undefined || typeof stack2 === 'function') {
                            stack2 = temp.axGetProperty($names[1]);
                        }
                        // 7 0::PositiveYVelAction
                        //Possible type:7 0:entities::AnimationManager
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['PositiveYVelAction'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$BgPositiveYVelAction;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[26]);
                            }
                        }
                        // 7 0:entities::AnimationManager
                        temp = scope0.findScopeProperty($names[1], true, false);
                        stack3 = temp.$BgAnimationManager;
                        if (stack3 === undefined || typeof stack3 === 'function') {
                            stack3 = temp.axGetProperty($names[1]);
                        }
                        // 7 0::IsFallingState
                        //Possible type:7 0:entities::AnimationManager
                        if (!(stack3 != undefined && stack3[AX_CLASS_SYMBOL])) {
                            stack3 = stack3['IsFallingState'];
                        } else {
                            temp = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);
                            stack3 = temp.$BgIsFallingState;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[27]);
                            }
                        }
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.setRule(stack1, stack2, stack3);
                        } else {
                            // 7 0::setRule
                            {
                                let t = stack0;
                                const m = t.$BgsetRule || (t = sec.box(stack0), t.$BgsetRule);
                                if( typeof m === "function" ) { 
                                    m.call(t, stack1, stack2, stack3);
                                } else { 
                                   stack0.axCallProperty($names[22], [stack1, stack2, stack3], false);
                                }
                            }
                        }
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack0 = this.$BganimationManager;
                        // 7 0:entities::AnimationManager
                        temp = scope0.findScopeProperty($names[1], true, false);
                        stack1 = temp.$BgAnimationManager;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[1]);
                        }
                        // 7 0::IsJumpingState
                        //Possible type:7 0:entities::AnimationManager
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['IsJumpingState'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$BgIsJumpingState;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[25]);
                            }
                        }
                        // 7 0:entities::AnimationManager
                        temp = scope0.findScopeProperty($names[1], true, false);
                        stack2 = temp.$BgAnimationManager;
                        if (stack2 === undefined || typeof stack2 === 'function') {
                            stack2 = temp.axGetProperty($names[1]);
                        }
                        // 7 0::GroundCollisionAction
                        //Possible type:7 0:entities::AnimationManager
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['GroundCollisionAction'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$BgGroundCollisionAction;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[28]);
                            }
                        }
                        // 7 0:entities::AnimationManager
                        temp = scope0.findScopeProperty($names[1], true, false);
                        stack3 = temp.$BgAnimationManager;
                        if (stack3 === undefined || typeof stack3 === 'function') {
                            stack3 = temp.axGetProperty($names[1]);
                        }
                        // 7 0::IsStandingState
                        //Possible type:7 0:entities::AnimationManager
                        if (!(stack3 != undefined && stack3[AX_CLASS_SYMBOL])) {
                            stack3 = stack3['IsStandingState'];
                        } else {
                            temp = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);
                            stack3 = temp.$BgIsStandingState;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[19]);
                            }
                        }
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.setRule(stack1, stack2, stack3);
                        } else {
                            // 7 0::setRule
                            {
                                let t = stack0;
                                const m = t.$BgsetRule || (t = sec.box(stack0), t.$BgsetRule);
                                if( typeof m === "function" ) { 
                                    m.call(t, stack1, stack2, stack3);
                                } else { 
                                   stack0.axCallProperty($names[22], [stack1, stack2, stack3], false);
                                }
                            }
                        }
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack0 = this.$BganimationManager;
                        // 7 0:entities::AnimationManager
                        temp = scope0.findScopeProperty($names[1], true, false);
                        stack1 = temp.$BgAnimationManager;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[1]);
                        }
                        // 7 0::IsFallingState
                        //Possible type:7 0:entities::AnimationManager
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['IsFallingState'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$BgIsFallingState;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[27]);
                            }
                        }
                        // 7 0:entities::AnimationManager
                        temp = scope0.findScopeProperty($names[1], true, false);
                        stack2 = temp.$BgAnimationManager;
                        if (stack2 === undefined || typeof stack2 === 'function') {
                            stack2 = temp.axGetProperty($names[1]);
                        }
                        // 7 0::GroundCollisionAction
                        //Possible type:7 0:entities::AnimationManager
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['GroundCollisionAction'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$BgGroundCollisionAction;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[28]);
                            }
                        }
                        // 7 0:entities::AnimationManager
                        temp = scope0.findScopeProperty($names[1], true, false);
                        stack3 = temp.$BgAnimationManager;
                        if (stack3 === undefined || typeof stack3 === 'function') {
                            stack3 = temp.axGetProperty($names[1]);
                        }
                        // 7 0::IsStandingState
                        //Possible type:7 0:entities::AnimationManager
                        if (!(stack3 != undefined && stack3[AX_CLASS_SYMBOL])) {
                            stack3 = stack3['IsStandingState'];
                        } else {
                            temp = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);
                            stack3 = temp.$BgIsStandingState;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[19]);
                            }
                        }
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.setRule(stack1, stack2, stack3);
                        } else {
                            // 7 0::setRule
                            {
                                let t = stack0;
                                const m = t.$BgsetRule || (t = sec.box(stack0), t.$BgsetRule);
                                if( typeof m === "function" ) { 
                                    m.call(t, stack1, stack2, stack3);
                                } else { 
                                   stack0.axCallProperty($names[22], [stack1, stack2, stack3], false);
                                }
                            }
                        }
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack0 = this.$BganimationManager;
                        // 7 0:entities::AnimationManager
                        temp = scope0.findScopeProperty($names[1], true, false);
                        stack1 = temp.$BgAnimationManager;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[1]);
                        }
                        // 7 0::IsWalkingState
                        //Possible type:7 0:entities::AnimationManager
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['IsWalkingState'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$BgIsWalkingState;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[21]);
                            }
                        }
                        // 7 0:entities::AnimationManager
                        temp = scope0.findScopeProperty($names[1], true, false);
                        stack2 = temp.$BgAnimationManager;
                        if (stack2 === undefined || typeof stack2 === 'function') {
                            stack2 = temp.axGetProperty($names[1]);
                        }
                        // 7 0::NoGroundAction
                        //Possible type:7 0:entities::AnimationManager
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['NoGroundAction'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$BgNoGroundAction;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[29]);
                            }
                        }
                        // 7 0:entities::AnimationManager
                        temp = scope0.findScopeProperty($names[1], true, false);
                        stack3 = temp.$BgAnimationManager;
                        if (stack3 === undefined || typeof stack3 === 'function') {
                            stack3 = temp.axGetProperty($names[1]);
                        }
                        // 7 0::IsFallingState
                        //Possible type:7 0:entities::AnimationManager
                        if (!(stack3 != undefined && stack3[AX_CLASS_SYMBOL])) {
                            stack3 = stack3['IsFallingState'];
                        } else {
                            temp = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);
                            stack3 = temp.$BgIsFallingState;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[27]);
                            }
                        }
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.setRule(stack1, stack2, stack3);
                        } else {
                            // 7 0::setRule
                            {
                                let t = stack0;
                                const m = t.$BgsetRule || (t = sec.box(stack0), t.$BgsetRule);
                                if( typeof m === "function" ) { 
                                    m.call(t, stack1, stack2, stack3);
                                } else { 
                                   stack0.axCallProperty($names[22], [stack1, stack2, stack3], false);
                                }
                            }
                        }
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack0 = this.$BganimationManager;
                        // 7 0:entities::AnimationManager
                        temp = scope0.findScopeProperty($names[1], true, false);
                        stack1 = temp.$BgAnimationManager;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[1]);
                        }
                        // 7 0::IsStandingState
                        //Possible type:7 0:entities::AnimationManager
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['IsStandingState'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$BgIsStandingState;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[19]);
                            }
                        }
                        // 7 0:entities::AnimationManager
                        temp = scope0.findScopeProperty($names[1], true, false);
                        stack2 = temp.$BgAnimationManager;
                        if (stack2 === undefined || typeof stack2 === 'function') {
                            stack2 = temp.axGetProperty($names[1]);
                        }
                        // 7 0::NoGroundAction
                        //Possible type:7 0:entities::AnimationManager
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['NoGroundAction'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$BgNoGroundAction;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[29]);
                            }
                        }
                        // 7 0:entities::AnimationManager
                        temp = scope0.findScopeProperty($names[1], true, false);
                        stack3 = temp.$BgAnimationManager;
                        if (stack3 === undefined || typeof stack3 === 'function') {
                            stack3 = temp.axGetProperty($names[1]);
                        }
                        // 7 0::IsFallingState
                        //Possible type:7 0:entities::AnimationManager
                        if (!(stack3 != undefined && stack3[AX_CLASS_SYMBOL])) {
                            stack3 = stack3['IsFallingState'];
                        } else {
                            temp = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);
                            stack3 = temp.$BgIsFallingState;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[27]);
                            }
                        }
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.setRule(stack1, stack2, stack3);
                        } else {
                            // 7 0::setRule
                            {
                                let t = stack0;
                                const m = t.$BgsetRule || (t = sec.box(stack0), t.$BgsetRule);
                                if( typeof m === "function" ) { 
                                    m.call(t, stack1, stack2, stack3);
                                } else { 
                                   stack0.axCallProperty($names[22], [stack1, stack2, stack3], false);
                                }
                            }
                        }
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack0 = this.$BganimationManager;
                        // 7 0:entities::AnimationManager
                        temp = scope0.findScopeProperty($names[1], true, false);
                        stack1 = temp.$BgAnimationManager;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[1]);
                        }
                        // 7 0::IsStandingState
                        //Possible type:7 0:entities::AnimationManager
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['IsStandingState'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$BgIsStandingState;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[19]);
                            }
                        }
                        // 7 0:entities::AnimationManager
                        temp = scope0.findScopeProperty($names[1], true, false);
                        stack2 = temp.$BgAnimationManager;
                        if (stack2 === undefined || typeof stack2 === 'function') {
                            stack2 = temp.axGetProperty($names[1]);
                        }
                        // 7 0::DownKeyPressedAction
                        //Possible type:7 0:entities::AnimationManager
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['DownKeyPressedAction'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$BgDownKeyPressedAction;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[30]);
                            }
                        }
                        // 7 0:entities::AnimationManager
                        temp = scope0.findScopeProperty($names[1], true, false);
                        stack3 = temp.$BgAnimationManager;
                        if (stack3 === undefined || typeof stack3 === 'function') {
                            stack3 = temp.axGetProperty($names[1]);
                        }
                        // 7 0::IsSplattedState
                        //Possible type:7 0:entities::AnimationManager
                        if (!(stack3 != undefined && stack3[AX_CLASS_SYMBOL])) {
                            stack3 = stack3['IsSplattedState'];
                        } else {
                            temp = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);
                            stack3 = temp.$BgIsSplattedState;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[31]);
                            }
                        }
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.setRule(stack1, stack2, stack3);
                        } else {
                            // 7 0::setRule
                            {
                                let t = stack0;
                                const m = t.$BgsetRule || (t = sec.box(stack0), t.$BgsetRule);
                                if( typeof m === "function" ) { 
                                    m.call(t, stack1, stack2, stack3);
                                } else { 
                                   stack0.axCallProperty($names[22], [stack1, stack2, stack3], false);
                                }
                            }
                        }
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack0 = this.$BganimationManager;
                        // 7 0:entities::AnimationManager
                        temp = scope0.findScopeProperty($names[1], true, false);
                        stack1 = temp.$BgAnimationManager;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[1]);
                        }
                        // 7 0::IsWalkingState
                        //Possible type:7 0:entities::AnimationManager
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['IsWalkingState'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$BgIsWalkingState;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[21]);
                            }
                        }
                        // 7 0:entities::AnimationManager
                        temp = scope0.findScopeProperty($names[1], true, false);
                        stack2 = temp.$BgAnimationManager;
                        if (stack2 === undefined || typeof stack2 === 'function') {
                            stack2 = temp.axGetProperty($names[1]);
                        }
                        // 7 0::DownKeyPressedAction
                        //Possible type:7 0:entities::AnimationManager
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['DownKeyPressedAction'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$BgDownKeyPressedAction;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[30]);
                            }
                        }
                        // 7 0:entities::AnimationManager
                        temp = scope0.findScopeProperty($names[1], true, false);
                        stack3 = temp.$BgAnimationManager;
                        if (stack3 === undefined || typeof stack3 === 'function') {
                            stack3 = temp.axGetProperty($names[1]);
                        }
                        // 7 0::IsSplattedState
                        //Possible type:7 0:entities::AnimationManager
                        if (!(stack3 != undefined && stack3[AX_CLASS_SYMBOL])) {
                            stack3 = stack3['IsSplattedState'];
                        } else {
                            temp = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);
                            stack3 = temp.$BgIsSplattedState;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[31]);
                            }
                        }
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.setRule(stack1, stack2, stack3);
                        } else {
                            // 7 0::setRule
                            {
                                let t = stack0;
                                const m = t.$BgsetRule || (t = sec.box(stack0), t.$BgsetRule);
                                if( typeof m === "function" ) { 
                                    m.call(t, stack1, stack2, stack3);
                                } else { 
                                   stack0.axCallProperty($names[22], [stack1, stack2, stack3], false);
                                }
                            }
                        }
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack0 = this.$BganimationManager;
                        // 7 0:entities::AnimationManager
                        temp = scope0.findScopeProperty($names[1], true, false);
                        stack1 = temp.$BgAnimationManager;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[1]);
                        }
                        // 7 0::IsFallingState
                        //Possible type:7 0:entities::AnimationManager
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['IsFallingState'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$BgIsFallingState;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[27]);
                            }
                        }
                        // 7 0:entities::AnimationManager
                        temp = scope0.findScopeProperty($names[1], true, false);
                        stack2 = temp.$BgAnimationManager;
                        if (stack2 === undefined || typeof stack2 === 'function') {
                            stack2 = temp.axGetProperty($names[1]);
                        }
                        // 7 0::DownKeyPressedAction
                        //Possible type:7 0:entities::AnimationManager
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['DownKeyPressedAction'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$BgDownKeyPressedAction;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[30]);
                            }
                        }
                        // 7 0:entities::AnimationManager
                        temp = scope0.findScopeProperty($names[1], true, false);
                        stack3 = temp.$BgAnimationManager;
                        if (stack3 === undefined || typeof stack3 === 'function') {
                            stack3 = temp.axGetProperty($names[1]);
                        }
                        // 7 0::IsSplattedState
                        //Possible type:7 0:entities::AnimationManager
                        if (!(stack3 != undefined && stack3[AX_CLASS_SYMBOL])) {
                            stack3 = stack3['IsSplattedState'];
                        } else {
                            temp = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);
                            stack3 = temp.$BgIsSplattedState;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[31]);
                            }
                        }
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.setRule(stack1, stack2, stack3);
                        } else {
                            // 7 0::setRule
                            {
                                let t = stack0;
                                const m = t.$BgsetRule || (t = sec.box(stack0), t.$BgsetRule);
                                if( typeof m === "function" ) { 
                                    m.call(t, stack1, stack2, stack3);
                                } else { 
                                   stack0.axCallProperty($names[22], [stack1, stack2, stack3], false);
                                }
                            }
                        }
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack0 = this.$BganimationManager;
                        // 7 0:entities::AnimationManager
                        temp = scope0.findScopeProperty($names[1], true, false);
                        stack1 = temp.$BgAnimationManager;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[1]);
                        }
                        // 7 0::IsSplattedState
                        //Possible type:7 0:entities::AnimationManager
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['IsSplattedState'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$BgIsSplattedState;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[31]);
                            }
                        }
                        // 7 0:entities::AnimationManager
                        temp = scope0.findScopeProperty($names[1], true, false);
                        stack2 = temp.$BgAnimationManager;
                        if (stack2 === undefined || typeof stack2 === 'function') {
                            stack2 = temp.axGetProperty($names[1]);
                        }
                        // 7 0::DownKeyReleasedAction
                        //Possible type:7 0:entities::AnimationManager
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['DownKeyReleasedAction'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$BgDownKeyReleasedAction;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[32]);
                            }
                        }
                        // 7 0:entities::AnimationManager
                        temp = scope0.findScopeProperty($names[1], true, false);
                        stack3 = temp.$BgAnimationManager;
                        if (stack3 === undefined || typeof stack3 === 'function') {
                            stack3 = temp.axGetProperty($names[1]);
                        }
                        // 7 0::IsStandingState
                        //Possible type:7 0:entities::AnimationManager
                        if (!(stack3 != undefined && stack3[AX_CLASS_SYMBOL])) {
                            stack3 = stack3['IsStandingState'];
                        } else {
                            temp = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);
                            stack3 = temp.$BgIsStandingState;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[19]);
                            }
                        }
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.setRule(stack1, stack2, stack3);
                        } else {
                            // 7 0::setRule
                            {
                                let t = stack0;
                                const m = t.$BgsetRule || (t = sec.box(stack0), t.$BgsetRule);
                                if( typeof m === "function" ) { 
                                    m.call(t, stack1, stack2, stack3);
                                } else { 
                                   stack0.axCallProperty($names[22], [stack1, stack2, stack3], false);
                                }
                            }
                        }
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack0 = this.$BganimationManager;
                        // 7 0:entities::AnimationManager
                        temp = scope0.findScopeProperty($names[1], true, false);
                        stack1 = temp.$BgAnimationManager;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[1]);
                        }
                        // 7 0::IsStandingState
                        //Possible type:7 0:entities::AnimationManager
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['IsStandingState'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$BgIsStandingState;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[19]);
                            }
                        }
                        // 7 0:entities::AnimationManager
                        temp = scope0.findScopeProperty($names[1], true, false);
                        stack2 = temp.$BgAnimationManager;
                        if (stack2 === undefined || typeof stack2 === 'function') {
                            stack2 = temp.axGetProperty($names[1]);
                        }
                        // 7 0::GameOverAction
                        //Possible type:7 0:entities::AnimationManager
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['GameOverAction'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$BgGameOverAction;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[33]);
                            }
                        }
                        // 7 0:entities::AnimationManager
                        temp = scope0.findScopeProperty($names[1], true, false);
                        stack3 = temp.$BgAnimationManager;
                        if (stack3 === undefined || typeof stack3 === 'function') {
                            stack3 = temp.axGetProperty($names[1]);
                        }
                        // 7 0::IsGameOverState
                        //Possible type:7 0:entities::AnimationManager
                        if (!(stack3 != undefined && stack3[AX_CLASS_SYMBOL])) {
                            stack3 = stack3['IsGameOverState'];
                        } else {
                            temp = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);
                            stack3 = temp.$BgIsGameOverState;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[34]);
                            }
                        }
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.setRule(stack1, stack2, stack3);
                        } else {
                            // 7 0::setRule
                            {
                                let t = stack0;
                                const m = t.$BgsetRule || (t = sec.box(stack0), t.$BgsetRule);
                                if( typeof m === "function" ) { 
                                    m.call(t, stack1, stack2, stack3);
                                } else { 
                                   stack0.axCallProperty($names[22], [stack1, stack2, stack3], false);
                                }
                            }
                        }
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack0 = this.$BganimationManager;
                        // 7 0:entities::AnimationManager
                        temp = scope0.findScopeProperty($names[1], true, false);
                        stack1 = temp.$BgAnimationManager;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[1]);
                        }
                        // 7 0::IsWalkingState
                        //Possible type:7 0:entities::AnimationManager
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['IsWalkingState'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$BgIsWalkingState;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[21]);
                            }
                        }
                        // 7 0:entities::AnimationManager
                        temp = scope0.findScopeProperty($names[1], true, false);
                        stack2 = temp.$BgAnimationManager;
                        if (stack2 === undefined || typeof stack2 === 'function') {
                            stack2 = temp.axGetProperty($names[1]);
                        }
                        // 7 0::GameOverAction
                        //Possible type:7 0:entities::AnimationManager
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['GameOverAction'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$BgGameOverAction;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[33]);
                            }
                        }
                        // 7 0:entities::AnimationManager
                        temp = scope0.findScopeProperty($names[1], true, false);
                        stack3 = temp.$BgAnimationManager;
                        if (stack3 === undefined || typeof stack3 === 'function') {
                            stack3 = temp.axGetProperty($names[1]);
                        }
                        // 7 0::IsGameOverState
                        //Possible type:7 0:entities::AnimationManager
                        if (!(stack3 != undefined && stack3[AX_CLASS_SYMBOL])) {
                            stack3 = stack3['IsGameOverState'];
                        } else {
                            temp = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);
                            stack3 = temp.$BgIsGameOverState;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[34]);
                            }
                        }
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.setRule(stack1, stack2, stack3);
                        } else {
                            // 7 0::setRule
                            {
                                let t = stack0;
                                const m = t.$BgsetRule || (t = sec.box(stack0), t.$BgsetRule);
                                if( typeof m === "function" ) { 
                                    m.call(t, stack1, stack2, stack3);
                                } else { 
                                   stack0.axCallProperty($names[22], [stack1, stack2, stack3], false);
                                }
                            }
                        }
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack0 = this.$BganimationManager;
                        // 7 0:entities::AnimationManager
                        temp = scope0.findScopeProperty($names[1], true, false);
                        stack1 = temp.$BgAnimationManager;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[1]);
                        }
                        // 7 0::IsJumpingState
                        //Possible type:7 0:entities::AnimationManager
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['IsJumpingState'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$BgIsJumpingState;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[25]);
                            }
                        }
                        // 7 0:entities::AnimationManager
                        temp = scope0.findScopeProperty($names[1], true, false);
                        stack2 = temp.$BgAnimationManager;
                        if (stack2 === undefined || typeof stack2 === 'function') {
                            stack2 = temp.axGetProperty($names[1]);
                        }
                        // 7 0::GameOverAction
                        //Possible type:7 0:entities::AnimationManager
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['GameOverAction'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$BgGameOverAction;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[33]);
                            }
                        }
                        // 7 0:entities::AnimationManager
                        temp = scope0.findScopeProperty($names[1], true, false);
                        stack3 = temp.$BgAnimationManager;
                        if (stack3 === undefined || typeof stack3 === 'function') {
                            stack3 = temp.axGetProperty($names[1]);
                        }
                        // 7 0::IsGameOverState
                        //Possible type:7 0:entities::AnimationManager
                        if (!(stack3 != undefined && stack3[AX_CLASS_SYMBOL])) {
                            stack3 = stack3['IsGameOverState'];
                        } else {
                            temp = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);
                            stack3 = temp.$BgIsGameOverState;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[34]);
                            }
                        }
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.setRule(stack1, stack2, stack3);
                        } else {
                            // 7 0::setRule
                            {
                                let t = stack0;
                                const m = t.$BgsetRule || (t = sec.box(stack0), t.$BgsetRule);
                                if( typeof m === "function" ) { 
                                    m.call(t, stack1, stack2, stack3);
                                } else { 
                                   stack0.axCallProperty($names[22], [stack1, stack2, stack3], false);
                                }
                            }
                        }
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack0 = this.$BganimationManager;
                        // 7 0:entities::AnimationManager
                        temp = scope0.findScopeProperty($names[1], true, false);
                        stack1 = temp.$BgAnimationManager;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[1]);
                        }
                        // 7 0::IsFallingState
                        //Possible type:7 0:entities::AnimationManager
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['IsFallingState'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$BgIsFallingState;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[27]);
                            }
                        }
                        // 7 0:entities::AnimationManager
                        temp = scope0.findScopeProperty($names[1], true, false);
                        stack2 = temp.$BgAnimationManager;
                        if (stack2 === undefined || typeof stack2 === 'function') {
                            stack2 = temp.axGetProperty($names[1]);
                        }
                        // 7 0::GameOverAction
                        //Possible type:7 0:entities::AnimationManager
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['GameOverAction'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$BgGameOverAction;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[33]);
                            }
                        }
                        // 7 0:entities::AnimationManager
                        temp = scope0.findScopeProperty($names[1], true, false);
                        stack3 = temp.$BgAnimationManager;
                        if (stack3 === undefined || typeof stack3 === 'function') {
                            stack3 = temp.axGetProperty($names[1]);
                        }
                        // 7 0::IsGameOverState
                        //Possible type:7 0:entities::AnimationManager
                        if (!(stack3 != undefined && stack3[AX_CLASS_SYMBOL])) {
                            stack3 = stack3['IsGameOverState'];
                        } else {
                            temp = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);
                            stack3 = temp.$BgIsGameOverState;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[34]);
                            }
                        }
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.setRule(stack1, stack2, stack3);
                        } else {
                            // 7 0::setRule
                            {
                                let t = stack0;
                                const m = t.$BgsetRule || (t = sec.box(stack0), t.$BgsetRule);
                                if( typeof m === "function" ) { 
                                    m.call(t, stack1, stack2, stack3);
                                } else { 
                                   stack0.axCallProperty($names[22], [stack1, stack2, stack3], false);
                                }
                            }
                        }
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack0 = this.$BganimationManager;
                        // 7 0:entities::AnimationManager
                        temp = scope0.findScopeProperty($names[1], true, false);
                        stack1 = temp.$BgAnimationManager;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[1]);
                        }
                        // 7 0::IsSplattedState
                        //Possible type:7 0:entities::AnimationManager
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['IsSplattedState'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$BgIsSplattedState;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[31]);
                            }
                        }
                        // 7 0:entities::AnimationManager
                        temp = scope0.findScopeProperty($names[1], true, false);
                        stack2 = temp.$BgAnimationManager;
                        if (stack2 === undefined || typeof stack2 === 'function') {
                            stack2 = temp.axGetProperty($names[1]);
                        }
                        // 7 0::GameOverAction
                        //Possible type:7 0:entities::AnimationManager
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['GameOverAction'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$BgGameOverAction;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[33]);
                            }
                        }
                        // 7 0:entities::AnimationManager
                        temp = scope0.findScopeProperty($names[1], true, false);
                        stack3 = temp.$BgAnimationManager;
                        if (stack3 === undefined || typeof stack3 === 'function') {
                            stack3 = temp.axGetProperty($names[1]);
                        }
                        // 7 0::IsGameOverState
                        //Possible type:7 0:entities::AnimationManager
                        if (!(stack3 != undefined && stack3[AX_CLASS_SYMBOL])) {
                            stack3 = stack3['IsGameOverState'];
                        } else {
                            temp = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);
                            stack3 = temp.$BgIsGameOverState;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[34]);
                            }
                        }
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.setRule(stack1, stack2, stack3);
                        } else {
                            // 7 0::setRule
                            {
                                let t = stack0;
                                const m = t.$BgsetRule || (t = sec.box(stack0), t.$BgsetRule);
                                if( typeof m === "function" ) { 
                                    m.call(t, stack1, stack2, stack3);
                                } else { 
                                   stack0.axCallProperty($names[22], [stack1, stack2, stack3], false);
                                }
                            }
                        }
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack0 = this.$BganimationManager;
                        // 7 0:entities::AnimationManager
                        temp = scope0.findScopeProperty($names[1], true, false);
                        stack1 = temp.$BgAnimationManager;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[1]);
                        }
                        // 7 0::IsGameOverState
                        //Possible type:7 0:entities::AnimationManager
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['IsGameOverState'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$BgIsGameOverState;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[34]);
                            }
                        }
                        // 7 0:entities::AnimationManager
                        temp = scope0.findScopeProperty($names[1], true, false);
                        stack2 = temp.$BgAnimationManager;
                        if (stack2 === undefined || typeof stack2 === 'function') {
                            stack2 = temp.axGetProperty($names[1]);
                        }
                        // 7 0::CheckpointRestoredAction
                        //Possible type:7 0:entities::AnimationManager
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['CheckpointRestoredAction'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$BgCheckpointRestoredAction;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[35]);
                            }
                        }
                        // 7 0:entities::AnimationManager
                        temp = scope0.findScopeProperty($names[1], true, false);
                        stack3 = temp.$BgAnimationManager;
                        if (stack3 === undefined || typeof stack3 === 'function') {
                            stack3 = temp.axGetProperty($names[1]);
                        }
                        // 7 0::IsStandingState
                        //Possible type:7 0:entities::AnimationManager
                        if (!(stack3 != undefined && stack3[AX_CLASS_SYMBOL])) {
                            stack3 = stack3['IsStandingState'];
                        } else {
                            temp = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);
                            stack3 = temp.$BgIsStandingState;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[19]);
                            }
                        }
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.setRule(stack1, stack2, stack3);
                        } else {
                            // 7 0::setRule
                            {
                                let t = stack0;
                                const m = t.$BgsetRule || (t = sec.box(stack0), t.$BgsetRule);
                                if( typeof m === "function" ) { 
                                    m.call(t, stack1, stack2, stack3);
                                } else { 
                                   stack0.axCallProperty($names[22], [stack1, stack2, stack3], false);
                                }
                            }
                        }
                        // 7 0::currentState
                        stack0 = scope0.findScopeProperty($names[36], false, false);
                        // 7 0:entities::AnimationManager
                        temp = scope0.findScopeProperty($names[1], true, false);
                        stack1 = temp.$BgAnimationManager;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[1]);
                        }
                        // 7 0::IsStandingState
                        //Possible type:7 0:entities::AnimationManager
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['IsStandingState'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$BgIsStandingState;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[19]);
                            }
                        }
                        // 7 0::currentState
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.currentState = stack1;
                        } else {
                            context.setproperty($names[36], stack1, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        /* We sure that this safe call, represented in TRAIT as Method  */ 
                        this.$BgstandingAnimation();
                        // 7 0::collisionCircle
                        stack0 = scope0.findScopeProperty($names[37], false, false);
                        // 7 0:entities::CollisionCircle
                        stack1 = scope0.findScopeProperty($names[38], true, false);
//                        stack2 = 8;// JIT: redundant assigment, value unused
                        //IR: DUP changed to PUSH*, reason: prevent optimisation
//                        stack3 = 8;// JIT: redundant assigment, value unused
//                        stack4 = 9;// JIT: redundant assigment, value unused
                        //JIT: Support fast construct:CollisionCircle/Object
                        stack1 = context.constructFast(stack1, [8, 8, 9], $names[38]);
                        // 7 0::collisionCircle
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.collisionCircle = stack1;
                        } else {
                            context.setproperty($names[37], stack1, stack0);
                        }
                        return;
                    }
                }
            }
//# sourceURL=http://jit/entities/SmallHero/constructor.js
})