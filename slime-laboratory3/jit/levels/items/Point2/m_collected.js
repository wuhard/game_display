(function anonymous(context
) {
/*
	Index: 1159
	Path:  levels/items/Point2::m_collected
	Type:  Public
	Kind:  Method
	Super: levels/items/Item
	Return: 7 0::void
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_m_collected(local1 /* Level */) {
        // Possible use a real "this"

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
        // 7 0::SoundSystem
        temp = scope0.findScopeProperty($names[0], true, false);
        stack0 = temp.$BgSoundSystem;
        if (stack0 === undefined || typeof stack0 === 'function') {
            stack0 = temp.axGetProperty($names[0]);
        }
//        stack1 = "point";// JIT: redundant assigment, value unused
        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
            stack0.PlaySound("point");
        } else {
            // 7 0::PlaySound
            {
                let t = stack0;
                const m = t.$BgPlaySound || (t = sec.box(stack0), t.$BgPlaySound);
                if( typeof m === "function" ) { 
                    m.call(t, "point");
                } else { 
                   stack0.axCallProperty($names[1], ["point"], false);
                }
            }
        }
        // 7 0::collect
        stack0 = scope0.findScopeProperty($names[2], false, false);
//        stack1 = true;// JIT: redundant assigment, value unused
        // 7 0::collect
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.collect = true;
        } else {
            context.setproperty($names[2], true, stack0);
        }
        // 7 0::destroy
        stack0 = scope0.findScopeProperty($names[3], false, false);
//        stack1 = true;// JIT: redundant assigment, value unused
        // 7 0::destroy
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.destroy = true;
        } else {
            context.setproperty($names[3], true, stack0);
        }
        // 7 0::Utils
        temp = scope0.findScopeProperty($names[4], true, false);
        stack0 = temp.$BgUtils;
        if (stack0 === undefined || typeof stack0 === 'function') {
            stack0 = temp.axGetProperty($names[4]);
        }
        // 7 0::Utils
        temp = scope0.findScopeProperty($names[4], true, false);
        stack1 = temp.$BgUtils;
        if (stack1 === undefined || typeof stack1 === 'function') {
            stack1 = temp.axGetProperty($names[4]);
        }
        // 7 0::PlayerItems
        //Possible type:7 0::Utils
        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
            stack1 = stack1['PlayerItems'];
        } else {
            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
            stack1 = temp.$BgPlayerItems;
            if (stack1 === undefined || typeof stack1 === 'function') {
                stack1 = temp.axGetProperty($names[5]);
            }
        }
        stack2 = 1;
        //IR: DUP changed to PUSH*, reason: prevent optimisation
        stack3 = 1;
        stack2 <<= 1;
        stack1 |= stack2;
        // 7 0::PlayerItems
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.PlayerItems = stack1;
        } else {
            context.setproperty($names[5], stack1, stack0);
        }
        // 7 0::Utils
        temp = scope0.findScopeProperty($names[4], true, false);
        stack0 = temp.$BgUtils;
        if (stack0 === undefined || typeof stack0 === 'function') {
            stack0 = temp.axGetProperty($names[4]);
        }
        // 7 0::world
        //Possible type:7 0::Utils
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
            stack0 = stack0['world'];
        } else {
            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
            stack0 = temp.$Bgworld;
            if (stack0 === undefined || typeof stack0 === 'function') {
                stack0 = temp.axGetProperty($names[6]);
            }
        }
        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
        stack1 = this.$BgitemSprite;
        // 7 0::Utils
        temp = scope0.findScopeProperty($names[4], true, false);
        stack2 = temp.$BgUtils;
        if (stack2 === undefined || typeof stack2 === 'function') {
            stack2 = temp.axGetProperty($names[4]);
        }
        // 7 0::world
        //Possible type:7 0::Utils
        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
            stack2 = stack2['world'];
        } else {
            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
            stack2 = temp.$Bgworld;
            if (stack2 === undefined || typeof stack2 === 'function') {
                stack2 = temp.axGetProperty($names[6]);
            }
        }
        // 7 0::numChildren
        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
            stack2 = stack2['numChildren'];
        } else {
            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
            stack2 = temp.$BgnumChildren;
            if (stack2 === undefined || typeof stack2 === 'function') {
                stack2 = temp.axGetProperty($names[7]);
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
                   stack0.axCallProperty($names[8], [stack1, stack2], false);
                }
            }
        }
//        // JIT: potential type:7 0:levels::Level// JIT: redundant assigment, value unused
        stack0 = local1;
        // 7 0::particlesManager
        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])) {
            stack0 = local1['particlesManager'];
        } else {
            temp = local1[AX_CLASS_SYMBOL] ? local1 : sec.box(local1);
            stack0 = temp.$BgparticlesManager;
            if (stack0 === undefined || typeof stack0 === 'function') {
                stack0 = temp.axGetProperty($names[9]);
            }
        }
        // 7 0::PointGetParticleSprite
        stack1 = scope0.findScopeProperty($names[10], true, false);
        stack1 = context.constructprop($names[10], stack1, []);
        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
        stack2 = this.$BgxPos;
        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
        stack3 = this.$BgyPos;
//        stack4 = 0;// JIT: redundant assigment, value unused
        //IR: DUP changed to PUSH*, reason: prevent optimisation
//        stack5 = 0;// JIT: redundant assigment, value unused
        //IR: DUP changed to PUSH*, reason: prevent optimisation
//        stack6 = 0;// JIT: redundant assigment, value unused
        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
            stack0.pushParticle(stack1, stack2, stack3, 0, 0, 0);
        } else {
            // 7 0::pushParticle
            {
                let t = stack0;
                const m = t.$BgpushParticle || (t = sec.box(stack0), t.$BgpushParticle);
                if( typeof m === "function" ) { 
                    m.call(t, stack1, stack2, stack3, 0, 0, 0);
                } else { 
                   stack0.axCallProperty($names[11], [stack1, stack2, stack3, 0, 0, 0], false);
                }
            }
        }
        return;
    }
//# sourceURL=http://jit/levels/items/Point2/m_collected.js
})