(function anonymous(context
) {
/*
	Index: 1659
	Path:  levels/collisions/SlimeContainer::constructor
	Type:  Public
	Kind:  null
	Super: levels/collisions/LevelCollision
	Return: *
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_constructor(local1 /* Level */, local2 /* Number */, local3 /* Number */, local4 /* Number */, local5 /* Number */, local6 /* Number */) {
        // Possible use a real "this"
        /* Force Number coerce */
        local2 = (+local2);
        /* Force Number coerce */
        local3 = (+local3);
        /* Force Number coerce */
        local4 = (+local4);
        /* Force Number coerce */
        local5 = (+local5);
        /* Force Number coerce */
        local6 = (+local6);
        // local7 is assigned before read, skip init
        let local7 = undefined
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
                        stack0 = this;
//                        // JIT: potential type:7 0:levels::Level// JIT: redundant assigment, value unused
                        stack1 = local1;
//                        // JIT: potential type:7 0::Number// JIT: redundant assigment, value unused
                        stack2 = local2;
//                        // JIT: potential type:7 0::Number// JIT: redundant assigment, value unused
                        stack3 = local3;
//                        // JIT: potential type:7 0::Number// JIT: redundant assigment, value unused
                        stack4 = local4;
//                        // JIT: potential type:7 0::Number// JIT: redundant assigment, value unused
                        stack5 = local5;
//                        // JIT: potential type:7 0::Number// JIT: redundant assigment, value unused
                        stack6 = local6;
                        context.savedScope.superConstructor.call(this, local1, local2, local3, local4, local5, local6);
//                        stack0 = this;// JIT: redundant assigment, value unused
                        /* We sure that this safe call, represented in TRAIT as Method  */ 
                        this.$BgdropRequest();
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = null;// JIT: redundant assigment, value unused
                        // 7 0::slimeCollision
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0:levels.collisions::SlimeCollision  */ 
                        this.$BgslimeCollision = null;
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[0], true, false);
                        stack0 = temp.$BgUtils;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[0]);
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
                                    stack0 = stack0.axCallProperty($names[1], [], false);
                                }
                            }
                        }
                        stack1 = 1;
                        if (1 != stack0) { p = 54; continue; };
                        // 7 0::levelCollisionSprite
                        stack0 = scope0.findScopeProperty($names[2], false, false);
                        // 7 0::SlimeContainerSprite
                        stack1 = scope0.findScopeProperty($names[3], true, false);
                        stack1 = context.constructprop($names[3], stack1, []);
                        // 7 0::levelCollisionSprite
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.levelCollisionSprite = stack1;
                        } else {
                            context.setproperty($names[2], stack1, stack0);
                        }
                        { p = 187; continue; };
                    case 54:
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[0], true, false);
                        stack0 = temp.$BgUtils;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[0]);
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
                                    stack0 = stack0.axCallProperty($names[1], [], false);
                                }
                            }
                        }
                        stack1 = 2;
                        if (2 != stack0) { p = 84; continue; };
                        // 7 0::levelCollisionSprite
                        stack0 = scope0.findScopeProperty($names[2], false, false);
                        // 7 0::SlimeContainerSpriteYellow
                        stack1 = scope0.findScopeProperty($names[4], true, false);
                        stack1 = context.constructprop($names[4], stack1, []);
                        // 7 0::levelCollisionSprite
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.levelCollisionSprite = stack1;
                        } else {
                            context.setproperty($names[2], stack1, stack0);
                        }
                        { p = 187; continue; };
                    case 84:
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[0], true, false);
                        stack0 = temp.$BgUtils;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[0]);
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
                                    stack0 = stack0.axCallProperty($names[1], [], false);
                                }
                            }
                        }
                        stack1 = 3;
                        if (3 != stack0) { p = 114; continue; };
                        // 7 0::levelCollisionSprite
                        stack0 = scope0.findScopeProperty($names[2], false, false);
                        // 7 0::SlimeContainerSpritePink
                        stack1 = scope0.findScopeProperty($names[5], true, false);
                        stack1 = context.constructprop($names[5], stack1, []);
                        // 7 0::levelCollisionSprite
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.levelCollisionSprite = stack1;
                        } else {
                            context.setproperty($names[2], stack1, stack0);
                        }
                        { p = 187; continue; };
                    case 114:
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[0], true, false);
                        stack0 = temp.$BgUtils;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[0]);
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
                                    stack0 = stack0.axCallProperty($names[1], [], false);
                                }
                            }
                        }
                        stack1 = 4;
                        if (4 != stack0) { p = 144; continue; };
                        // 7 0::levelCollisionSprite
                        stack0 = scope0.findScopeProperty($names[2], false, false);
                        // 7 0::SlimeContainerSpriteBlue
                        stack1 = scope0.findScopeProperty($names[6], true, false);
                        stack1 = context.constructprop($names[6], stack1, []);
                        // 7 0::levelCollisionSprite
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.levelCollisionSprite = stack1;
                        } else {
                            context.setproperty($names[2], stack1, stack0);
                        }
                        { p = 187; continue; };
                    case 144:
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[0], true, false);
                        stack0 = temp.$BgUtils;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[0]);
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
                                    stack0 = stack0.axCallProperty($names[1], [], false);
                                }
                            }
                        }
                        stack1 = 5;
                        if (5 != stack0) { p = 174; continue; };
                        // 7 0::levelCollisionSprite
                        stack0 = scope0.findScopeProperty($names[2], false, false);
                        // 7 0::SlimeContainerSpriteWhite
                        stack1 = scope0.findScopeProperty($names[7], true, false);
                        stack1 = context.constructprop($names[7], stack1, []);
                        // 7 0::levelCollisionSprite
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.levelCollisionSprite = stack1;
                        } else {
                            context.setproperty($names[2], stack1, stack0);
                        }
                        { p = 187; continue; };
                    case 174:
                        // 7 0::levelCollisionSprite
                        stack0 = scope0.findScopeProperty($names[2], false, false);
                        // 7 0::SlimeContainerSpriteBrown
                        stack1 = scope0.findScopeProperty($names[8], true, false);
                        stack1 = context.constructprop($names[8], stack1, []);
                        // 7 0::levelCollisionSprite
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.levelCollisionSprite = stack1;
                        } else {
                            context.setproperty($names[2], stack1, stack0);
                        }
                    case 187:
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack0 = this.$BglevelCollisionSprite;
                        // 7 0::int
                        temp = scope0.findScopeProperty($names[9], true, false);
                        stack1 = temp.$Bgint;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[9]);
                        }
                        stack2 = context.savedScope.global.object;
//                        // JIT: potential type:7 0::Number// JIT: redundant assigment, value unused
                        stack3 = local2;
                        stack1 = context.call(stack1, stack2, [local2], scope0);
                        // 7 0::x
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.x = stack1;
                        } else {
                            context.setproperty($names[10], stack1, stack0);
                        }
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack0 = this.$BglevelCollisionSprite;
                        // 7 0::int
                        temp = scope0.findScopeProperty($names[9], true, false);
                        stack1 = temp.$Bgint;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[9]);
                        }
                        stack2 = context.savedScope.global.object;
//                        // JIT: potential type:7 0::Number// JIT: redundant assigment, value unused
                        stack3 = local3;
                        stack1 = context.call(stack1, stack2, [local3], scope0);
                        // 7 0::y
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.y = stack1;
                        } else {
                            context.setproperty($names[11], stack1, stack0);
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
                                stack0 = temp.axGetProperty($names[12]);
                            }
                        }
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack1 = this.$BglevelCollisionSprite;
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
                                   stack0.axCallProperty($names[13], [stack1], false);
                                }
                            }
                        }
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack0 = this.$BgxPos;
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack1 = this.$BgxPos;
                        stack0 *= stack1;
//                        stack1 = 7;// JIT: redundant assigment, value unused
                        stack0 %= 7;
                        stack0 |= 0;
                        local7 = stack0;
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack0 = this.$BglevelCollisionSprite;
                        // 9 {3, 0, 3, 0:levels.collisions, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.events, 0:flash.geom, 0:levels, 0:entities, 1:levels.collisions:SlimeContainer, 5:levels.collisions:SlimeContainer, 5:levels.collisions:LevelCollision}::slimeAnim
                        //Possible type:7 0::levelCollisionSprite
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['slimeAnim'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgslimeAnim;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[14]);
                            }
                        }
                        stack1 = local7;
//                        stack2 = 6;// JIT: redundant assigment, value unused
                        stack1 *= 6;
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.gotoAndPlay(stack1);
                        } else {
                            // 9 {3, 0, 3, 0:levels.collisions, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.events, 0:flash.geom, 0:levels, 0:entities, 1:levels.collisions:SlimeContainer, 5:levels.collisions:SlimeContainer, 5:levels.collisions:LevelCollision}::gotoAndPlay
                            {
                                let t = stack0;
                                const m = t.$BggotoAndPlay || (t = sec.box(stack0), t.$BggotoAndPlay);
                                if( typeof m === "function" ) { 
                                    m.call(t, stack1);
                                } else { 
                                   stack0.axCallProperty($names[15], [stack1], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = 0;// JIT: redundant assigment, value unused
                        // 7 0::fizzleCounter
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::int  */ 
                        this.$BgfizzleCounter = 0;
                        return;
                    }
                }
            }
//# sourceURL=http://jit/levels/collisions/SlimeContainer/constructor.js
})