(function anonymous(context
) {
/*
	Index: 166
	Path:  levels/Level::m_unsplitHero
	Type:  Public
	Kind:  Method
	Super: Object
	Return: 7 0::void
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_m_unsplitHero(local1 /* Number */, local2 /* Number */) {
        // Possible use a real "this"
        /* Force Number coerce */
        local1 = (+local1);
        /* Force Number coerce */
        local2 = (+local2);

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
//        stack0 = this;// JIT: redundant assigment, value unused
//        stack1 = false;// JIT: redundant assigment, value unused
        // 7 0::SPLITTED_FLAG
        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Boolean  */ 
        this.$BgSPLITTED_FLAG = false;
//        stack0 = this;// JIT: redundant assigment, value unused
        // 7 0::hero
        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:entities::Hero  */ 
        stack0 = this.$Bghero;
        // 7 0:entities::AnimationManager
        temp = scope0.findScopeProperty($names[0], true, false);
        stack1 = temp.$BgAnimationManager;
        if (stack1 === undefined || typeof stack1 === 'function') {
            stack1 = temp.axGetProperty($names[0]);
        }
        // 7 0::IsStandingState
        //Possible type:7 0:entities::AnimationManager
        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
            stack1 = stack1['IsStandingState'];
        } else {
            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
            stack1 = temp.$BgIsStandingState;
            if (stack1 === undefined || typeof stack1 === 'function') {
                stack1 = temp.axGetProperty($names[1]);
            }
        }
        // 7 0::currentState
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.currentState = stack1;
        } else {
            context.setproperty($names[2], stack1, stack0);
        }
//        stack0 = this;// JIT: redundant assigment, value unused
        // 7 0::smallHero1
        //Possible type:7 0:entities::Hero
        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:entities::SmallHero  */ 
        stack0 = this.$BgsmallHero1;
        // 7 0:Box2D.Common.Math::b2Vec2
        stack1 = scope0.findScopeProperty($names[3], true, false);
//        stack2 = -1000;// JIT: redundant assigment, value unused
//        stack3 = -1000;// JIT: redundant assigment, value unused
        //JIT: Support fast construct:b2Vec2/Object
        stack1 = context.constructFast(stack1, [-1000, -1000], $names[3]);
        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
            stack0.rebuildSlimeAt(stack1);
        } else {
            // 7 0::rebuildSlimeAt
            {
                let t = stack0;
                const m = t.$BgrebuildSlimeAt || (t = sec.box(stack0), t.$BgrebuildSlimeAt);
                if( typeof m === "function" ) { 
                    m.call(t, stack1);
                } else { 
                   stack0.axCallProperty($names[4], [stack1], false);
                }
            }
        }
//        stack0 = this;// JIT: redundant assigment, value unused
        // 7 0::smallHero2
        //Possible type:7 0:entities::SmallHero
        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:entities::SmallHero  */ 
        stack0 = this.$BgsmallHero2;
        // 7 0:Box2D.Common.Math::b2Vec2
        stack1 = scope0.findScopeProperty($names[3], true, false);
//        stack2 = -2000;// JIT: redundant assigment, value unused
//        stack3 = -1000;// JIT: redundant assigment, value unused
        //JIT: Support fast construct:b2Vec2/Object
        stack1 = context.constructFast(stack1, [-2000, -1000], $names[3]);
        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
            stack0.rebuildSlimeAt(stack1);
        } else {
            // 7 0::rebuildSlimeAt
            {
                let t = stack0;
                const m = t.$BgrebuildSlimeAt || (t = sec.box(stack0), t.$BgrebuildSlimeAt);
                if( typeof m === "function" ) { 
                    m.call(t, stack1);
                } else { 
                   stack0.axCallProperty($names[4], [stack1], false);
                }
            }
        }
//        stack0 = this;// JIT: redundant assigment, value unused
        // 7 0::smallHero1
        //Possible type:7 0:entities::SmallHero
        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:entities::SmallHero  */ 
        stack0 = this.$BgsmallHero1;
        // 7 0::entitySprite
        //Possible type:7 0:entities::SmallHero
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
            stack0 = stack0['entitySprite'];
        } else {
            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
            stack0 = temp.$BgentitySprite;
            if (stack0 === undefined || typeof stack0 === 'function') {
                stack0 = temp.axGetProperty($names[5]);
            }
        }
        // 7 0::graphics
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
            stack0 = stack0['graphics'];
        } else {
            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
            stack0 = temp.$Bggraphics;
            if (stack0 === undefined || typeof stack0 === 'function') {
                stack0 = temp.axGetProperty($names[6]);
            }
        }
        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
            stack0.clear();
        } else {
            // 7 0::clear
            {
                let t = stack0;
                const m = t.$Bgclear || (t = sec.box(stack0), t.$Bgclear);
                if( typeof m === "function" ) { 
                    m.call(t);
                } else { 
                   stack0.axCallProperty($names[7], [], false);
                }
            }
        }
//        stack0 = this;// JIT: redundant assigment, value unused
        // 7 0::smallHero2
        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:entities::SmallHero  */ 
        stack0 = this.$BgsmallHero2;
        // 7 0::entitySprite
        //Possible type:7 0:entities::SmallHero
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
            stack0 = stack0['entitySprite'];
        } else {
            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
            stack0 = temp.$BgentitySprite;
            if (stack0 === undefined || typeof stack0 === 'function') {
                stack0 = temp.axGetProperty($names[5]);
            }
        }
        // 7 0::graphics
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
            stack0 = stack0['graphics'];
        } else {
            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
            stack0 = temp.$Bggraphics;
            if (stack0 === undefined || typeof stack0 === 'function') {
                stack0 = temp.axGetProperty($names[6]);
            }
        }
        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
            stack0.clear();
        } else {
            // 7 0::clear
            {
                let t = stack0;
                const m = t.$Bgclear || (t = sec.box(stack0), t.$Bgclear);
                if( typeof m === "function" ) { 
                    m.call(t);
                } else { 
                   stack0.axCallProperty($names[7], [], false);
                }
            }
        }
//        stack0 = this;// JIT: redundant assigment, value unused
        // 7 0::hero
        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:entities::Hero  */ 
        stack0 = this.$Bghero;
        // 7 0:Box2D.Common.Math::b2Vec2
        stack1 = scope0.findScopeProperty($names[3], true, false);
//        // JIT: potential type:7 0::Number// JIT: redundant assigment, value unused
        stack2 = local1;
//        // JIT: potential type:7 0::Number// JIT: redundant assigment, value unused
        stack3 = local2;
        //JIT: Support fast construct:b2Vec2/Object
        stack1 = context.constructFast(stack1, [local1, local2], $names[3]);
        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
            stack0.rebuildSlimeAt(stack1);
        } else {
            // 7 0::rebuildSlimeAt
            {
                let t = stack0;
                const m = t.$BgrebuildSlimeAt || (t = sec.box(stack0), t.$BgrebuildSlimeAt);
                if( typeof m === "function" ) { 
                    m.call(t, stack1);
                } else { 
                   stack0.axCallProperty($names[4], [stack1], false);
                }
            }
        }
        return;
    }
//# sourceURL=http://jit/levels/Level/m_unsplitHero.js
})