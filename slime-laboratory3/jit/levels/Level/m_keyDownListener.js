(function anonymous(context
) {
/*
	Index: 188
	Path:  levels/Level::m_keyDownListener
	Type:  Protected
	Kind:  Method
	Super: Object
	Return: 7 0::void
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_m_keyDownListener(local1 /* KeyboardEvent */) {
        // Possible use a real "this"
        // local2 is assigned before read, skip init
        let local2 = undefined
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
                        stack0 = this;
                        scope0 = context.savedScope.extend(this);
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::FREEZE_FLAG
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Boolean  */ 
                        stack0 = this.$BgFREEZE_FLAG;
                        stack0 = !!stack0;
                        stack1 = stack0;
                        if (!stack1) { p = 19; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::RESTORE_CHECKPOINT_FLAG
                        //Possible type:7 0::Boolean
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Boolean  */ 
                        stack0 = this.$BgRESTORE_CHECKPOINT_FLAG;
                        stack1 = false;
                        stack0 = stack0 == false;
                    case 19:
                        stack1 = stack0;
                        if (stack1) { p = 31; continue; };
                        // 7 0::initialDelay
                        temp = scope0.findScopeProperty($names[0], true, false);
                        stack0 = temp.$BginitialDelay;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[0]);
                        }
                        stack1 = 0;
                        stack0 = stack0 > 0;
                    case 31:
                        if (!stack0) { p = 36; continue; };
                        return;
                    case 36:
                        { p = 85; continue; };
                    case 40:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        /* We sure that this safe call, represented in TRAIT as Method  */ 
                        this.$BgjumpDown();
                        //JIT: Emit inline return
                        return;
                    case 50:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        /* We sure that this safe call, represented in TRAIT as Method  */ 
                        this.$BgdownKeyDown();
                        //JIT: Emit inline return
                        return;
                    case 60:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        /* We sure that this safe call, represented in TRAIT as Method  */ 
                        this.$BgleftDown();
                        //JIT: Emit inline return
                        return;
                    case 70:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        /* We sure that this safe call, represented in TRAIT as Method  */ 
                        this.$BgrightDown();
                        //JIT: Emit inline return
                        return;
                    case 80:
                        //JIT: Emit inline return
                        return;
                    case 85:
//                        // JIT: potential type:7 0:flash.events::KeyboardEvent// JIT: redundant assigment, value unused
                        stack0 = local1;
                        // 7 0::keyCode
                        //Possible type:7 0::initialDelay
                        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])) {
                            stack0 = local1['keyCode'];
                        } else {
                            temp = local1[AX_CLASS_SYMBOL] ? local1 : sec.box(local1);
                            stack0 = temp.$BgkeyCode;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[1]);
                            }
                        }
                        local2 = stack0;
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[2], true, false);
                        stack0 = temp.$BgUtils;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[2]);
                        }
                        // 7 0::KEY_UP
                        //Possible type:7 0::Utils
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['KEY_UP'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgKEY_UP;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[3]);
                            }
                        }
                        stack1 = local2;
                        if (local2 !== stack0) { p = 107; continue; };
                        stack0 = 0;
                        { p = 274; continue; };
                    case 107:
                        stack0 = 87;
                        stack1 = local2;
                        if (local2 !== 87) { p = 120; continue; };
                        stack0 = 1;
                        { p = 274; continue; };
                    case 120:
                        stack0 = 119;
                        stack1 = local2;
                        if (local2 !== 119) { p = 133; continue; };
                        stack0 = 2;
                        { p = 274; continue; };
                    case 133:
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[2], true, false);
                        stack0 = temp.$BgUtils;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[2]);
                        }
                        // 7 0::KEY_DOWN
                        //Possible type:7 0::Utils
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['KEY_DOWN'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgKEY_DOWN;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[4]);
                            }
                        }
                        stack1 = local2;
                        if (local2 !== stack0) { p = 150; continue; };
                        stack0 = 3;
                        { p = 274; continue; };
                    case 150:
                        stack0 = 83;
                        stack1 = local2;
                        if (local2 !== 83) { p = 163; continue; };
                        stack0 = 4;
                        { p = 274; continue; };
                    case 163:
                        stack0 = 115;
                        stack1 = local2;
                        if (local2 !== 115) { p = 176; continue; };
                        stack0 = 5;
                        { p = 274; continue; };
                    case 176:
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[2], true, false);
                        stack0 = temp.$BgUtils;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[2]);
                        }
                        // 7 0::KEY_LEFT
                        //Possible type:7 0::Utils
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['KEY_LEFT'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgKEY_LEFT;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[5]);
                            }
                        }
                        stack1 = local2;
                        if (local2 !== stack0) { p = 193; continue; };
                        stack0 = 6;
                        { p = 274; continue; };
                    case 193:
                        stack0 = 65;
                        stack1 = local2;
                        if (local2 !== 65) { p = 206; continue; };
                        stack0 = 7;
                        { p = 274; continue; };
                    case 206:
                        stack0 = 97;
                        stack1 = local2;
                        if (local2 !== 97) { p = 219; continue; };
                        stack0 = 8;
                        { p = 274; continue; };
                    case 219:
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[2], true, false);
                        stack0 = temp.$BgUtils;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[2]);
                        }
                        // 7 0::KEY_RIGHT
                        //Possible type:7 0::Utils
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['KEY_RIGHT'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgKEY_RIGHT;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[6]);
                            }
                        }
                        stack1 = local2;
                        if (local2 !== stack0) { p = 236; continue; };
                        stack0 = 9;
                        { p = 274; continue; };
                    case 236:
                        stack0 = 100;
                        stack1 = local2;
                        if (local2 !== 100) { p = 249; continue; };
                        stack0 = 10;
                        { p = 274; continue; };
                    case 249:
                        stack0 = 68;
                        stack1 = local2;
                        if (local2 !== 68) { p = 262; continue; };
                        stack0 = 11;
                        { p = 274; continue; };
                    case 262:
                        { p = 272; continue; };
                        // unreachable
                        // unreachable
                    case 272:
                        stack0 = 12;
                    case 274:
                        //IR: KILL removed, reason: prevent optimisation
                        if (stack0 >= 0 && stack0 < 13) { p = [40, 40, 40, 50, 50, 50, 60, 60, 60, 70, 70, 70, 80][stack0]; continue; } else { p = 80; continue; };
                    case 320:
                        return;
                    }
                }
            }
//# sourceURL=http://jit/levels/Level/m_keyDownListener.js
})