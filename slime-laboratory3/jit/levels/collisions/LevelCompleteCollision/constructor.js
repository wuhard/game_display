(function anonymous(context
) {
/*
	Index: 1679
	Path:  levels/collisions/LevelCompleteCollision::constructor
	Type:  Public
	Kind:  null
	Super: levels/collisions/LevelCollision
	Return: *
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;

     /* e */
     const flash_geom__Rectangle_def = context.getTopLevel(9); // flash.geom:Rectangle

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

        
        stack0 = this;
        scope0 = context.savedScope.extend(this);
        stack0 = this;
//        // JIT: potential type:7 0:levels::Level// JIT: redundant assigment, value unused
        stack1 = local1;
//        // JIT: potential type:7 0::Number// JIT: redundant assigment, value unused
        stack2 = local2;
//        // JIT: potential type:7 0::Number// JIT: redundant assigment, value unused
        stack3 = local3;
//        // JIT: potential type:7 0::Number// JIT: redundant assigment, value unused
        stack4 = local4;
//        // JIT: potential type:7 0::Number// JIT: redundant assigment, value unused
        stack5 = local5;
//        // JIT: potential type:7 0::Number// JIT: redundant assigment, value unused
        stack6 = local6;
        context.savedScope.superConstructor.call(this, local1, local2, local3, local4, local5, local6);
//        stack0 = this;// JIT: redundant assigment, value unused
//        stack1 = false;// JIT: redundant assigment, value unused
        // 7 0::alreadyCollided
        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Boolean  */ 
        this.$BgalreadyCollided = false;
        // 7 0::levelCollisionSprite
        stack0 = scope0.findScopeProperty($names[0], false, false);
        // 7 0::LevelCompleteSpotSprite
        stack1 = scope0.findScopeProperty($names[1], true, false);
        stack1 = context.constructprop($names[1], stack1, []);
        // 7 0::levelCollisionSprite
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.levelCollisionSprite = stack1;
        } else {
            context.setproperty($names[0], stack1, stack0);
        }
        // 7 0::Utils
        temp = scope0.findScopeProperty($names[2], true, false);
        stack0 = temp.$BgUtils;
        if (stack0 === undefined || typeof stack0 === 'function') {
            stack0 = temp.axGetProperty($names[2]);
        }
        // 7 0::world
        //Possible type:7 0::Utils
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
            stack0 = stack0['world'];
        } else {
            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
            stack0 = temp.$Bgworld;
            if (stack0 === undefined || typeof stack0 === 'function') {
                stack0 = temp.axGetProperty($names[3]);
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
                   stack0.axCallProperty($names[4], [stack1], false);
                }
            }
        }
        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
        stack0 = this.$BglevelCollisionSprite;
        // 9 {3, 0, 3, 0:levels.collisions, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.events, 0:flash.geom, 0:levels, 0:entities, 1:levels.collisions:LevelCompleteCollision, 5:levels.collisions:LevelCompleteCollision, 5:levels.collisions:LevelCollision}::dots
        //Possible type:7 0::levelCollisionSprite
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
            stack0 = stack0['dots'];
        } else {
            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
            stack0 = temp.$Bgdots;
            if (stack0 === undefined || typeof stack0 === 'function') {
                stack0 = temp.axGetProperty($names[5]);
            }
        }
//        stack1 = 0;// JIT: redundant assigment, value unused
        // 9 {3, 0, 3, 0:levels.collisions, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.events, 0:flash.geom, 0:levels, 0:entities, 1:levels.collisions:LevelCompleteCollision, 5:levels.collisions:LevelCompleteCollision, 5:levels.collisions:LevelCollision}::alpha
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.alpha = 0;
        } else {
            context.setproperty($names[6], 0, stack0);
        }
        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
        stack0 = this.$BglevelCollisionSprite;
        // 9 {3, 0, 3, 0:levels.collisions, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.events, 0:flash.geom, 0:levels, 0:entities, 1:levels.collisions:LevelCompleteCollision, 5:levels.collisions:LevelCompleteCollision, 5:levels.collisions:LevelCollision}::dots
        //Possible type:7 0::levelCollisionSprite
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
            stack0 = stack0['dots'];
        } else {
            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
            stack0 = temp.$Bgdots;
            if (stack0 === undefined || typeof stack0 === 'function') {
                stack0 = temp.axGetProperty($names[5]);
            }
        }
//        stack1 = false;// JIT: redundant assigment, value unused
        // 9 {3, 0, 3, 0:levels.collisions, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.events, 0:flash.geom, 0:levels, 0:entities, 1:levels.collisions:LevelCompleteCollision, 5:levels.collisions:LevelCompleteCollision, 5:levels.collisions:LevelCollision}::visible
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.visible = false;
        } else {
            context.setproperty($names[7], false, stack0);
        }
        // 7 0::aabb
        stack0 = scope0.findScopeProperty($names[8], false, false);
        // 7 0:flash.geom::Rectangle
        /* GenerateLexImports */
//        stack1 = flash_geom__Rectangle_def;// JIT: redundant assigment, value unused
        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
        stack2 = this.$BgxPos;
        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
        stack3 = this.$BgyPos;
//        stack4 = 32;// JIT: redundant assigment, value unused
        stack3 -= 32;
//        stack4 = 48;// JIT: redundant assigment, value unused
        //IR: DUP changed to PUSH*, reason: prevent optimisation
//        stack5 = 48;// JIT: redundant assigment, value unused
        //JIT: Support fast construct:Rectangle/Object
        stack1 = context.constructFast(flash_geom__Rectangle_def, [stack2, stack3, 48, 48], $names[9]);
        // 7 0::aabb
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.aabb = stack1;
        } else {
            context.setproperty($names[8], stack1, stack0);
        }
        return;
    }
//# sourceURL=http://jit/levels/collisions/LevelCompleteCollision/constructor.js
})