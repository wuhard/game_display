(function anonymous(context
) {
/*
	Index: 1788
	Path:  levels/collisions/FrostMachineCollision::constructor
	Type:  Public
	Kind:  null
	Super: levels/collisions/LevelCollision
	Return: *
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;

             /* e */
             const flash_geom__Rectangle_def = context.getTopLevel(10); // flash.geom:Rectangle

    return function compiled_constructor(local1 /* Level */, local2 /* Number */, local3 /* Number */, local4 /* int */) {
        // Possible use a real "this"
        /* Force Number coerce */
        local2 = (+local2);
        /* Force Number coerce */
        local3 = (+local3);
        /* Force int coerce */
        local4 = (local4|0);

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
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = true;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:FrostMachineCollision::IS_INSIDE_SCREEN
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Boolean  */ 
                        this.$BgIS_INSIDE_SCREEN = true;
                        // JIT: potential type:7 0::int
                        stack0 = local4;
                        stack1 = 0;
                        if (0 != local4) { p = 24; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = true;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:FrostMachineCollision::IS_FROST
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Boolean  */ 
                        this.$BgIS_FROST = true;
                        { p = 29; continue; };
                    case 24:
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = false;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:FrostMachineCollision::IS_FROST
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Boolean  */ 
                        this.$BgIS_FROST = false;
                    case 29:
                        stack0 = this;
//                        // JIT: potential type:7 0:levels::Level// JIT: redundant assigment, value unused
                        stack1 = local1;
//                        // JIT: potential type:7 0::Number// JIT: redundant assigment, value unused
                        stack2 = local2;
//                        // JIT: potential type:7 0::Number// JIT: redundant assigment, value unused
                        stack3 = local3;
//                        stack4 = 32;// JIT: redundant assigment, value unused
//                        stack5 = 64;// JIT: redundant assigment, value unused
//                        stack6 = 0;// JIT: redundant assigment, value unused
                        context.savedScope.superConstructor.call(this, local1, local2, local3, 32, 64, 0);
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:FrostMachineCollision::IS_FROST
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Boolean  */ 
                        stack0 = this.$BgIS_FROST;
                        if (!stack0) { p = 66; continue; };
                        // 7 0::levelCollisionSprite
                        stack0 = scope0.findScopeProperty($names[0], false, false);
                        // 7 0::FrostMachineSprite
                        stack1 = scope0.findScopeProperty($names[1], true, false);
                        stack1 = context.constructprop($names[1], stack1, []);
                        // 7 0::levelCollisionSprite
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.levelCollisionSprite = stack1;
                        } else {
                            context.setproperty($names[0], stack1, stack0);
                        }
                        { p = 79; continue; };
                    case 66:
                        // 7 0::levelCollisionSprite
                        stack0 = scope0.findScopeProperty($names[0], false, false);
                        // 7 0::DefrostMachineSprite
                        stack1 = scope0.findScopeProperty($names[2], true, false);
                        stack1 = context.constructprop($names[2], stack1, []);
                        // 7 0::levelCollisionSprite
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.levelCollisionSprite = stack1;
                        } else {
                            context.setproperty($names[0], stack1, stack0);
                        }
                    case 79:
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack0 = this.$BglevelCollisionSprite;
                        // 7 0::int
                        temp = scope0.findScopeProperty($names[3], true, false);
                        stack1 = temp.$Bgint;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[3]);
                        }
                        stack2 = context.savedScope.global.object;
//                        // JIT: potential type:7 0::Number// JIT: redundant assigment, value unused
                        stack3 = local2;
                        stack1 = context.call(stack1, stack2, [local2], scope0);
                        // 7 0::x
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.x = stack1;
                        } else {
                            context.setproperty($names[4], stack1, stack0);
                        }
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack0 = this.$BglevelCollisionSprite;
                        // 7 0::int
                        temp = scope0.findScopeProperty($names[3], true, false);
                        stack1 = temp.$Bgint;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[3]);
                        }
                        stack2 = context.savedScope.global.object;
//                        // JIT: potential type:7 0::Number// JIT: redundant assigment, value unused
                        stack3 = local3;
                        stack1 = context.call(stack1, stack2, [local3], scope0);
                        // 7 0::y
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.y = stack1;
                        } else {
                            context.setproperty($names[5], stack1, stack0);
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
                                stack0 = temp.axGetProperty($names[7]);
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
                                   stack0.axCallProperty($names[8], [stack1], false);
                                }
                            }
                        }
                        // 7 0::aabb
                        stack0 = scope0.findScopeProperty($names[9], false, false);
                        // 7 0:flash.geom::Rectangle
                        /* GenerateLexImports */
//                        stack1 = flash_geom__Rectangle_def;// JIT: redundant assigment, value unused
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack2 = this.$BgxPos;
//                        stack3 = 32;// JIT: redundant assigment, value unused
                        stack2 -= 32;
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack3 = this.$BgyPos;
                        stack4 = 32;
//                        stack5 = 64;// JIT: redundant assigment, value unused
                        stack4 += 64;
                        stack5 = 64;
//                        stack6 = 80;// JIT: redundant assigment, value unused
                        stack5 += 80;
                        //JIT: Support fast construct:Rectangle/Object
                        stack1 = context.constructFast(flash_geom__Rectangle_def, [stack2, stack3, stack4, stack5], $names[10]);
                        // 7 0::aabb
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.aabb = stack1;
                        } else {
                            context.setproperty($names[9], stack1, stack0);
                        }
                        return;
                    }
                }
            }
//# sourceURL=http://jit/levels/collisions/FrostMachineCollision/constructor.js
})