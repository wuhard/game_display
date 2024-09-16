(function anonymous(context
) {
/*
	Index: 1790
	Path:  levels/collisions/FrostMachineCollision::m_checkCollision
	Type:  Public
	Kind:  Method
	Super: levels/collisions/LevelCollision
	Return: 7 0::void
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;

             /* e */
             const flash_geom__Rectangle_def = context.getTopLevel(2); // flash.geom:Rectangle

    return function compiled_m_checkCollision(local1 /* Hero */) {
        // Possible use a real "this"
        // local2 is assigned before read, skip init
        let local2 = undefined
        // local3 is assigned before read, skip init
        let local3 = undefined
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
//                        // JIT: potential type:7 0:entities::Hero// JIT: redundant assigment, value unused
                        stack0 = local1;
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack0 = local1.getMidPosition();
                        } else {
                            // 7 0::getMidPosition
                            {
                                let t = local1;
                                const m = t.$BggetMidPosition || (t = sec.box(local1), t.$BggetMidPosition);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BggetMidPosition ();
                                } else { 
                                    stack0 = local1.axCallProperty($names[0], [], false);
                                }
                            }
                        }
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[1], true, false);
                            _e || console.warn('[m_checkCollision] Coerce Type not found:', "b2Vec2")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        local2 = stack0;
                        // 7 0:flash.geom::Rectangle
                        /* GenerateLexImports */
//                        stack0 = flash_geom__Rectangle_def;// JIT: redundant assigment, value unused
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack1 = this.$BgxPos;
//                        stack2 = 10;// JIT: redundant assigment, value unused
                        stack1 += 10;
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack2 = this.$BgyPos;
//                        stack3 = 64;// JIT: redundant assigment, value unused
                        stack2 += 64;
//                        stack3 = 12;// JIT: redundant assigment, value unused
//                        stack4 = 88;// JIT: redundant assigment, value unused
                        //JIT: Support fast construct:Rectangle/Object
                        stack0 = context.constructFast(flash_geom__Rectangle_def, [stack1, stack2, 12, 88], $names[2]);
                        //IR: Drop coerce, reason: redundant
                        local3 = stack0;
//                        stack0 = local3;// JIT: redundant assigment, value unused
//                        stack1 = local2;// JIT: redundant assigment, value unused
                        // 7 0::x
                        //Possible type:7 0::xPos
                        if (!(local2 != undefined && local2[AX_CLASS_SYMBOL])) {
                            stack1 = local2['x'];
                        } else {
                            temp = local2[AX_CLASS_SYMBOL] ? local2 : sec.box(local2);
                            stack1 = temp.$Bgx;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[3]);
                            }
                        }
//                        stack2 = local2;// JIT: redundant assigment, value unused
                        // 7 0::y
                        //Possible type:7 0::yPos
                        if (!(local2 != undefined && local2[AX_CLASS_SYMBOL])) {
                            stack2 = local2['y'];
                        } else {
                            temp = local2[AX_CLASS_SYMBOL] ? local2 : sec.box(local2);
                            stack2 = temp.$Bgy;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[4]);
                            }
                        }
                        if (!(_a = typeof local3, ((_a !== 'object' && _a !== 'function' ) || local3 == null || local3[AX_CLASS_SYMBOL]))) {
                           stack0 = local3.contains(stack1, stack2);
                        } else {
                            // 7 0::contains
                            {
                                let t = local3;
                                const m = t.$Bgcontains || (t = sec.box(local3), t.$Bgcontains);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$Bgcontains (stack1, stack2);
                                } else { 
                                    stack0 = local3.axCallProperty($names[5], [stack1, stack2], false);
                                }
                            }
                        }
                        //JIT: Emit inline return
                        if (!stack0) { return; }
//                        // JIT: potential type:7 0:entities::Hero// JIT: redundant assigment, value unused
                        stack0 = local1;
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:FrostMachineCollision::IS_FROST
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Boolean  */ 
                        stack1 = this.$BgIS_FROST;
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                            local1.setFrost(stack1);
                        } else {
                            // 7 0::setFrost
                            {
                                let t = local1;
                                const m = t.$BgsetFrost || (t = sec.box(local1), t.$BgsetFrost);
                                if( typeof m === "function" ) { 
                                    m.call(t, stack1);
                                } else { 
                                   local1.axCallProperty($names[6], [stack1], false);
                                }
                            }
                        }
                    case 60:
                        return;
                    }
                }
            }
//# sourceURL=http://jit/levels/collisions/FrostMachineCollision/m_checkCollision.js
})