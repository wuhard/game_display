(function anonymous(context
) {
/*
	Index: 1680
	Path:  levels/collisions/LevelCompleteCollision::m_update
	Type:  Public
	Kind:  Method
	Super: levels/collisions/LevelCollision
	Return: 7 0::void
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_m_update() {
        // Possible use a real "this"
        // local1 is assigned before read, skip init
        let local1 = undefined
        // local2 is assigned before read, skip init
        let local2 = undefined
        let stack0 = undefined;
        let stack1 = undefined;
        let stack2 = undefined;
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
                        // 7 0::lightUp
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Boolean  */ 
                        stack0 = this.$BglightUp;
                        if (!stack0) { p = 62; continue; };
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
                                stack0 = temp.axGetProperty($names[0]);
                            }
                        }
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack1 = this.$BglevelCollisionSprite;
                        // 9 {3, 0, 3, 0:levels.collisions, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.events, 0:flash.geom, 0:levels, 0:entities, 1:levels.collisions:LevelCompleteCollision, 5:levels.collisions:LevelCompleteCollision, 5:levels.collisions:LevelCollision}::dots
                        //Possible type:7 0::levelCollisionSprite
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['dots'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$Bgdots;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[0]);
                            }
                        }
                        // 9 {3, 0, 3, 0:levels.collisions, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.events, 0:flash.geom, 0:levels, 0:entities, 1:levels.collisions:LevelCompleteCollision, 5:levels.collisions:LevelCompleteCollision, 5:levels.collisions:LevelCollision}::alpha
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['alpha'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$Bgalpha;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[1]);
                            }
                        }
//                        stack2 = 0.1;// JIT: redundant assigment, value unused
                        stack1 += 0.1;
                        // 9 {3, 0, 3, 0:levels.collisions, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.events, 0:flash.geom, 0:levels, 0:entities, 1:levels.collisions:LevelCompleteCollision, 5:levels.collisions:LevelCompleteCollision, 5:levels.collisions:LevelCollision}::alpha
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.alpha = stack1;
                        } else {
                            context.setproperty($names[1], stack1, stack0);
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
                                stack0 = temp.axGetProperty($names[0]);
                            }
                        }
                        // 9 {3, 0, 3, 0:levels.collisions, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.events, 0:flash.geom, 0:levels, 0:entities, 1:levels.collisions:LevelCompleteCollision, 5:levels.collisions:LevelCompleteCollision, 5:levels.collisions:LevelCollision}::alpha
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['alpha'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgalpha;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[1]);
                            }
                        }
                        stack1 = 1;
                        if (!(1 <= stack0)) { p = 62; continue; };
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
                                stack0 = temp.axGetProperty($names[0]);
                            }
                        }
//                        stack1 = 1;// JIT: redundant assigment, value unused
                        // 9 {3, 0, 3, 0:levels.collisions, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.events, 0:flash.geom, 0:levels, 0:entities, 1:levels.collisions:LevelCompleteCollision, 5:levels.collisions:LevelCompleteCollision, 5:levels.collisions:LevelCollision}::alpha
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.alpha = 1;
                        } else {
                            context.setproperty($names[1], 1, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = false;// JIT: redundant assigment, value unused
                        // 7 0::lightUp
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Boolean  */ 
                        this.$BglightUp = false;
                    case 62:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::levelEndDelay
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::int  */ 
                        stack0 = this.$BglevelEndDelay;
                        stack1 = 0;
                        //JIT: Emit inline return
                        if (!(0 <= stack0)) { return; }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        stack1 = this;
                        local1 = stack1;
                        // 7 0::levelEndDelay
                        //Possible type:7 0::int
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::int  */ 
                        stack0 = this.$BglevelEndDelay;
                        stack0 = (stack0 | 0) + 1;
                        local2 = stack0;
//                        stack0 = local1;// JIT: redundant assigment, value unused
//                        stack1 = local2;// JIT: redundant assigment, value unused
                        // 7 0::levelEndDelay
                        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])){
                            local1.levelEndDelay = local2;
                        } else {
                            context.setproperty($names[2], local2, local1);
                        }
                        //IR: KILL removed, reason: prevent optimisation
                        //IR: KILL removed, reason: prevent optimisation
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::levelEndDelay
                        //Possible type:7 0::int
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::int  */ 
                        stack0 = this.$BglevelEndDelay;
                        stack1 = 30;
                        //JIT: Emit inline return
                        if (!(30 <= stack0)) { return; }
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack0 = this.$Bglevel;
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.completed();
                        } else {
                            // 7 0::completed
                            {
                                let t = stack0;
                                const m = t.$Bgcompleted || (t = sec.box(stack0), t.$Bgcompleted);
                                if( typeof m === "function" ) { 
                                    m.call(t);
                                } else { 
                                   stack0.axCallProperty($names[3], [], false);
                                }
                            }
                        }
                    case 106:
                        return;
                    }
                }
            }
//# sourceURL=http://jit/levels/collisions/LevelCompleteCollision/m_update.js
})