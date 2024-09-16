(function anonymous(context
) {
/*
	Index: 1167
	Path:  levels/items/Point3::constructor
	Type:  Public
	Kind:  null
	Super: levels/items/Item
	Return: *
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;

     /* e */
     const flash_geom__Rectangle_def = context.getTopLevel(7); // flash.geom:Rectangle

    return function compiled_constructor(local1 /* Number */, local2 /* Number */) {
        // Possible use a real "this"
        /* Force Number coerce */
        local1 = (+local1);
        /* Force Number coerce */
        local2 = (+local2);

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

        
        stack0 = this;
        scope0 = context.savedScope.extend(this);
        stack0 = this;
//        // JIT: potential type:7 0::Number// JIT: redundant assigment, value unused
        stack1 = local1;
//        // JIT: potential type:7 0::Number// JIT: redundant assigment, value unused
        stack2 = local2;
        context.savedScope.superConstructor.call(this, local1, local2);
        // 7 0::itemSprite
        stack0 = scope0.findScopeProperty($names[0], false, false);
        // 7 0::YellowFloppySprite
        stack1 = scope0.findScopeProperty($names[1], true, false);
        stack1 = context.constructprop($names[1], stack1, []);
        // 7 0::itemSprite
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.itemSprite = stack1;
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
        stack1 = this.$BgitemSprite;
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
        stack0 = this.$BgitemSprite;
//        stack1 = 1;// JIT: redundant assigment, value unused
        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
            stack0.gotoAndPlay(1);
        } else {
            // 7 0::gotoAndPlay
            {
                let t = stack0;
                const m = t.$BggotoAndPlay || (t = sec.box(stack0), t.$BggotoAndPlay);
                if( typeof m === "function" ) { 
                    m.call(t, 1);
                } else { 
                   stack0.axCallProperty($names[5], [1], false);
                }
            }
        }
        // 7 0::aabb
        stack0 = scope0.findScopeProperty($names[6], false, false);
        // 7 0:flash.geom::Rectangle
        /* GenerateLexImports */
//        stack1 = flash_geom__Rectangle_def;// JIT: redundant assigment, value unused
        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
        stack2 = this.$BgxPos;
//        stack3 = 10;// JIT: redundant assigment, value unused
        stack2 -= 10;
        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
        stack3 = this.$BgyPos;
//        stack4 = 10;// JIT: redundant assigment, value unused
        stack3 -= 10;
//        stack4 = 20;// JIT: redundant assigment, value unused
        //IR: DUP changed to PUSH*, reason: prevent optimisation
//        stack5 = 20;// JIT: redundant assigment, value unused
        //JIT: Support fast construct:Rectangle/Object
        stack1 = context.constructFast(flash_geom__Rectangle_def, [stack2, stack3, 20, 20], $names[7]);
        // 7 0::aabb
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.aabb = stack1;
        } else {
            context.setproperty($names[6], stack1, stack0);
        }
        return;
    }
//# sourceURL=http://jit/levels/items/Point3/constructor.js
})