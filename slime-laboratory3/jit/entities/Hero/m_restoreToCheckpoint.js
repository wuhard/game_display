(function anonymous(context
) {
/*
	Index: 1142
	Path:  entities/Hero::m_restoreToCheckpoint
	Type:  Public
	Kind:  Method
	Super: entities/Entity
	Return: 7 0::void
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_m_restoreToCheckpoint() {
        // Possible use a real "this"

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
                        // 7 0:com.poki::PokiFlashSDK
                        temp = scope0.findScopeProperty($names[0], true, false);
                        stack0 = temp.$BgPokiFlashSDK;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[0]);
                        }
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                           stack0 = stack0.instance();
                        } else {
                            // 7 0::instance
                            {
                                let t = stack0;
                                const m = t.$Bginstance || (t = sec.box(stack0), t.$Bginstance);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$Bginstance ();
                                } else { 
                                    stack0 = stack0.axCallProperty($names[1], [], false);
                                }
                            }
                        }
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.gameplayStart();
                        } else {
                            // 7 0::gameplayStart
                            {
                                let t = stack0;
                                const m = t.$BggameplayStart || (t = sec.box(stack0), t.$BggameplayStart);
                                if( typeof m === "function" ) { 
                                    m.call(t);
                                } else { 
                                   stack0.axCallProperty($names[2], [], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = 1;// JIT: redundant assigment, value unused
                        // 7 0::magnitude
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Number  */ 
                        this.$Bgmagnitude = 1;
                        // 7 0::xVel
                        stack0 = scope0.findScopeProperty($names[3], false, false);
//                        stack1 = 0;// JIT: redundant assigment, value unused
                        // 7 0::xVel
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.xVel = 0;
                        } else {
                            context.setproperty($names[3], 0, stack0);
                        }
                        // 7 0::yVel
                        stack0 = scope0.findScopeProperty($names[4], false, false);
//                        stack1 = 0;// JIT: redundant assigment, value unused
                        // 7 0::yVel
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.yVel = 0;
                        } else {
                            context.setproperty($names[4], 0, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0:Box2D.Common.Math::b2Vec2
                        stack1 = scope0.findScopeProperty($names[5], true, false);
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack2 = this.$Bglevel;
                        // 7 0::collisionsManager
                        //Possible type:7 0::level
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['collisionsManager'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$BgcollisionsManager;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[6]);
                            }
                        }
                        // 7 0::currentCheckpoint
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['currentCheckpoint'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$BgcurrentCheckpoint;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[7]);
                            }
                        }
                        // 7 0::xPos
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['xPos'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$BgxPos;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[8]);
                            }
                        }
//                        stack3 = 24;// JIT: redundant assigment, value unused
                        stack2 += 24;
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack3 = this.$Bglevel;
                        // 7 0::collisionsManager
                        //Possible type:7 0::level
                        if (!(stack3 != undefined && stack3[AX_CLASS_SYMBOL])) {
                            stack3 = stack3['collisionsManager'];
                        } else {
                            temp = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);
                            stack3 = temp.$BgcollisionsManager;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[6]);
                            }
                        }
                        // 7 0::currentCheckpoint
                        if (!(stack3 != undefined && stack3[AX_CLASS_SYMBOL])) {
                            stack3 = stack3['currentCheckpoint'];
                        } else {
                            temp = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);
                            stack3 = temp.$BgcurrentCheckpoint;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[7]);
                            }
                        }
                        // 7 0::yPos
                        if (!(stack3 != undefined && stack3[AX_CLASS_SYMBOL])) {
                            stack3 = stack3['yPos'];
                        } else {
                            temp = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);
                            stack3 = temp.$BgyPos;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[9]);
                            }
                        }
//                        stack4 = 16;// JIT: redundant assigment, value unused
                        stack3 -= 16;
                        //JIT: Support fast construct:b2Vec2/Object
                        stack1 = context.constructFast(stack1, [stack2, stack3], $names[5]);
                        /* We sure that this safe call, represented in TRAIT as Method  */ 
                        this.$BgrebuildSlimeAt(stack1);
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack0 = this.$BganimationManager;
                        // 7 0:entities::AnimationManager
                        temp = scope0.findScopeProperty($names[10], true, false);
                        stack1 = temp.$BgAnimationManager;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[10]);
                        }
                        // 7 0::CheckpointRestoredAction
                        //Possible type:7 0:entities::AnimationManager
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['CheckpointRestoredAction'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$BgCheckpointRestoredAction;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[11]);
                            }
                        }
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.performAction(stack1);
                        } else {
                            // 7 0::performAction
                            {
                                let t = stack0;
                                const m = t.$BgperformAction || (t = sec.box(stack0), t.$BgperformAction);
                                if( typeof m === "function" ) { 
                                    m.call(t, stack1);
                                } else { 
                                   stack0.axCallProperty($names[12], [stack1], false);
                                }
                            }
                        }
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack0 = this.$Bglevel;
                        // 7 0::collisionsManager
                        //Possible type:7 0::level
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['collisionsManager'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgcollisionsManager;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[6]);
                            }
                        }
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.restoreCollisions();
                        } else {
                            // 7 0::restoreCollisions
                            {
                                let t = stack0;
                                const m = t.$BgrestoreCollisions || (t = sec.box(stack0), t.$BgrestoreCollisions);
                                if( typeof m === "function" ) { 
                                    m.call(t);
                                } else { 
                                   stack0.axCallProperty($names[13], [], false);
                                }
                            }
                        }
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[14], true, false);
                        stack0 = temp.$BgUtils;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[14]);
                        }
                        // 7 0::SKIN_1
                        //Possible type:7 0::Utils
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['SKIN_1'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgSKIN_1;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[15]);
                            }
                        }
                        stack1 = 0;
                        if (0 == stack0) { p = 117; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::glasses
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::SunglassesSprite  */ 
                        stack0 = this.$Bgglasses;
//                        stack1 = true;// JIT: redundant assigment, value unused
                        // 7 0::visible
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.visible = true;
                        } else {
                            context.setproperty($names[16], true, stack0);
                        }
                    case 117:
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack0 = this.$Bglevel;
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.showInterstitial();
                        } else {
                            // 7 0::showInterstitial
                            {
                                let t = stack0;
                                const m = t.$BgshowInterstitial || (t = sec.box(stack0), t.$BgshowInterstitial);
                                if( typeof m === "function" ) { 
                                    m.call(t);
                                } else { 
                                   stack0.axCallProperty($names[17], [], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = false;// JIT: redundant assigment, value unused
                        // 7 0::dead
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Boolean  */ 
                        this.$Bgdead = false;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::eye1
                        //Possible type:7 0::level
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack0 = this.$Bgeye1;
//                        stack1 = true;// JIT: redundant assigment, value unused
                        // 7 0::visible
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.visible = true;
                        } else {
                            context.setproperty($names[16], true, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::eye2
                        //Possible type:7 0:flash.display::MovieClip
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack0 = this.$Bgeye2;
//                        stack1 = true;// JIT: redundant assigment, value unused
                        // 7 0::visible
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.visible = true;
                        } else {
                            context.setproperty($names[16], true, stack0);
                        }
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[14], true, false);
                        stack0 = temp.$BgUtils;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[14]);
                        }
//                        stack1 = 1;// JIT: redundant assigment, value unused
                        // 7 0::PlayerLifes
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.PlayerLifes = 1;
                        } else {
                            context.setproperty($names[18], 1, stack0);
                        }
                        return;
                    }
                }
            }
//# sourceURL=http://jit/entities/Hero/m_restoreToCheckpoint.js
})