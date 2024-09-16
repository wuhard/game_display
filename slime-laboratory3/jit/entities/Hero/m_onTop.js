(function anonymous(context
) {
/*
	Index: 1132
	Path:  entities/Hero::m_onTop
	Type:  Public
	Kind:  Method
	Super: entities/Entity
	Return: 7 0::void
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_m_onTop() {
        // Possible use a real "this"

        let stack0 = undefined;
        let stack1 = undefined;
        let stack2 = undefined;
        let stack3 = undefined;
        let scope0 = undefined;
        let temp = undefined;
        let sec = context.sec;
        let $names = context.names;

        
        stack0 = this;
        scope0 = context.savedScope.extend(this);
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
                stack0 = temp.axGetProperty($names[1]);
            }
        }
        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
        stack1 = this.$BgentitySprite;
        // 7 0::Utils
        temp = scope0.findScopeProperty($names[0], true, false);
        stack2 = temp.$BgUtils;
        if (stack2 === undefined || typeof stack2 === 'function') {
            stack2 = temp.axGetProperty($names[0]);
        }
        // 7 0::world
        //Possible type:7 0::Utils
        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
            stack2 = stack2['world'];
        } else {
            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
            stack2 = temp.$Bgworld;
            if (stack2 === undefined || typeof stack2 === 'function') {
                stack2 = temp.axGetProperty($names[1]);
            }
        }
        // 7 0::numChildren
        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
            stack2 = stack2['numChildren'];
        } else {
            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
            stack2 = temp.$BgnumChildren;
            if (stack2 === undefined || typeof stack2 === 'function') {
                stack2 = temp.axGetProperty($names[2]);
            }
        }
        stack2--;
        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
            stack0.setChildIndex(stack1, stack2);
        } else {
            // 7 0::setChildIndex
            {
                let t = stack0;
                const m = t.$BgsetChildIndex || (t = sec.box(stack0), t.$BgsetChildIndex);
                if( typeof m === "function" ) { 
                    m.call(t, stack1, stack2);
                } else { 
                   stack0.axCallProperty($names[3], [stack1, stack2], false);
                }
            }
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
                stack0 = temp.axGetProperty($names[1]);
            }
        }
//        stack1 = this;// JIT: redundant assigment, value unused
        // 7 0::eye1
        //Possible type:7 0::entitySprite
        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
        stack1 = this.$Bgeye1;
        // 7 0::Utils
        temp = scope0.findScopeProperty($names[0], true, false);
        stack2 = temp.$BgUtils;
        if (stack2 === undefined || typeof stack2 === 'function') {
            stack2 = temp.axGetProperty($names[0]);
        }
        // 7 0::world
        //Possible type:7 0::Utils
        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
            stack2 = stack2['world'];
        } else {
            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
            stack2 = temp.$Bgworld;
            if (stack2 === undefined || typeof stack2 === 'function') {
                stack2 = temp.axGetProperty($names[1]);
            }
        }
        // 7 0::numChildren
        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
            stack2 = stack2['numChildren'];
        } else {
            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
            stack2 = temp.$BgnumChildren;
            if (stack2 === undefined || typeof stack2 === 'function') {
                stack2 = temp.axGetProperty($names[2]);
            }
        }
        stack2--;
        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
            stack0.setChildIndex(stack1, stack2);
        } else {
            // 7 0::setChildIndex
            {
                let t = stack0;
                const m = t.$BgsetChildIndex || (t = sec.box(stack0), t.$BgsetChildIndex);
                if( typeof m === "function" ) { 
                    m.call(t, stack1, stack2);
                } else { 
                   stack0.axCallProperty($names[3], [stack1, stack2], false);
                }
            }
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
                stack0 = temp.axGetProperty($names[1]);
            }
        }
//        stack1 = this;// JIT: redundant assigment, value unused
        // 7 0::eye2
        //Possible type:7 0:flash.display::MovieClip
        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
        stack1 = this.$Bgeye2;
        // 7 0::Utils
        temp = scope0.findScopeProperty($names[0], true, false);
        stack2 = temp.$BgUtils;
        if (stack2 === undefined || typeof stack2 === 'function') {
            stack2 = temp.axGetProperty($names[0]);
        }
        // 7 0::world
        //Possible type:7 0::Utils
        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
            stack2 = stack2['world'];
        } else {
            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
            stack2 = temp.$Bgworld;
            if (stack2 === undefined || typeof stack2 === 'function') {
                stack2 = temp.axGetProperty($names[1]);
            }
        }
        // 7 0::numChildren
        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
            stack2 = stack2['numChildren'];
        } else {
            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
            stack2 = temp.$BgnumChildren;
            if (stack2 === undefined || typeof stack2 === 'function') {
                stack2 = temp.axGetProperty($names[2]);
            }
        }
        stack2--;
        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
            stack0.setChildIndex(stack1, stack2);
        } else {
            // 7 0::setChildIndex
            {
                let t = stack0;
                const m = t.$BgsetChildIndex || (t = sec.box(stack0), t.$BgsetChildIndex);
                if( typeof m === "function" ) { 
                    m.call(t, stack1, stack2);
                } else { 
                   stack0.axCallProperty($names[3], [stack1, stack2], false);
                }
            }
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
                stack0 = temp.axGetProperty($names[1]);
            }
        }
//        stack1 = this;// JIT: redundant assigment, value unused
        // 7 0::glasses
        //Possible type:7 0:flash.display::MovieClip
        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::SunglassesSprite  */ 
        stack1 = this.$Bgglasses;
        // 7 0::Utils
        temp = scope0.findScopeProperty($names[0], true, false);
        stack2 = temp.$BgUtils;
        if (stack2 === undefined || typeof stack2 === 'function') {
            stack2 = temp.axGetProperty($names[0]);
        }
        // 7 0::world
        //Possible type:7 0::Utils
        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
            stack2 = stack2['world'];
        } else {
            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
            stack2 = temp.$Bgworld;
            if (stack2 === undefined || typeof stack2 === 'function') {
                stack2 = temp.axGetProperty($names[1]);
            }
        }
        // 7 0::numChildren
        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
            stack2 = stack2['numChildren'];
        } else {
            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
            stack2 = temp.$BgnumChildren;
            if (stack2 === undefined || typeof stack2 === 'function') {
                stack2 = temp.axGetProperty($names[2]);
            }
        }
        stack2--;
        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
            stack0.setChildIndex(stack1, stack2);
        } else {
            // 7 0::setChildIndex
            {
                let t = stack0;
                const m = t.$BgsetChildIndex || (t = sec.box(stack0), t.$BgsetChildIndex);
                if( typeof m === "function" ) { 
                    m.call(t, stack1, stack2);
                } else { 
                   stack0.axCallProperty($names[3], [stack1, stack2], false);
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
                stack0 = temp.axGetProperty($names[4]);
            }
        }
        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
            stack0.setCollisionsOnTop();
        } else {
            // 7 0::setCollisionsOnTop
            {
                let t = stack0;
                const m = t.$BgsetCollisionsOnTop || (t = sec.box(stack0), t.$BgsetCollisionsOnTop);
                if( typeof m === "function" ) { 
                    m.call(t);
                } else { 
                   stack0.axCallProperty($names[5], [], false);
                }
            }
        }
        return;
    }
//# sourceURL=http://jit/entities/Hero/m_onTop.js
})