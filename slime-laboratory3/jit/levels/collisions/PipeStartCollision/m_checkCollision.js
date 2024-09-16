(function anonymous(context
) {
/*
	Index: 1732
	Path:  levels/collisions/PipeStartCollision::m_checkCollision
	Type:  Public
	Kind:  Method
	Super: levels/collisions/LevelCollision
	Return: 7 0::void
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_m_checkCollision(local1 /* Hero */) {
        // Possible use a real "this"

        let stack0 = undefined;
        let stack1 = undefined;
        let scope0 = undefined;
        let temp = undefined;
        let sec = context.sec;
        let $names = context.names;

        
        let p = 0;
        while (true) {
            switch (p) {
                    case 0:
                        //IR: PUSHSCOPE removed, reason: unused
                        // unreachable
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:PipeStartCollision::_aabb
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.geom::Rectangle  */ 
                        stack0 = this.$Bg_aabb;
//                        // JIT: potential type:7 0:entities::Hero// JIT: redundant assigment, value unused
                        stack1 = local1;
                        // 7 0::aabb
                        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])) {
                            stack1 = local1['aabb'];
                        } else {
                            temp = local1[AX_CLASS_SYMBOL] ? local1 : sec.box(local1);
                            stack1 = temp.$Bgaabb;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[0]);
                            }
                        }
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                           stack0 = stack0.intersects(stack1);
                        } else {
                            // 7 0::intersects
                            {
                                let t = stack0;
                                const m = t.$Bgintersects || (t = sec.box(stack0), t.$Bgintersects);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$Bgintersects (stack1);
                                } else { 
                                    stack0 = stack0.axCallProperty($names[1], [stack1], false);
                                }
                            }
                        }
                        //JIT: Emit inline return
                        if (!stack0) { return; }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:PipeStartCollision::TYPE
                        //Possible type:7 0:flash.geom::Rectangle
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::int  */ 
                        stack0 = this.$BgTYPE;
                        stack1 = 0;
                        if (0 != stack0) { p = 38; continue; };
//                        // JIT: potential type:7 0:entities::Hero// JIT: redundant assigment, value unused
                        stack0 = local1;
//                        stack1 = true;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                            local1.setPipe(true);
                        } else {
                            // 7 0::setPipe
                            {
                                let t = local1;
                                const m = t.$BgsetPipe || (t = sec.box(local1), t.$BgsetPipe);
                                if( typeof m === "function" ) { 
                                    m.call(t, true);
                                } else { 
                                   local1.axCallProperty($names[2], [true], false);
                                }
                            }
                        }
                        //JIT: Emit inline return
                        return;
                    case 38:
//                        // JIT: potential type:7 0:entities::Hero// JIT: redundant assigment, value unused
                        stack0 = local1;
//                        stack1 = false;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                            local1.setPipe(false);
                        } else {
                            // 7 0::setPipe
                            {
                                let t = local1;
                                const m = t.$BgsetPipe || (t = sec.box(local1), t.$BgsetPipe);
                                if( typeof m === "function" ) { 
                                    m.call(t, false);
                                } else { 
                                   local1.axCallProperty($names[2], [false], false);
                                }
                            }
                        }
                    case 44:
                        return;
                    }
                }
            }
//# sourceURL=http://jit/levels/collisions/PipeStartCollision/m_checkCollision.js
})