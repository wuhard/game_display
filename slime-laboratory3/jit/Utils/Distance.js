(function anonymous(context
) {
/*
	Index: 46
	Path:  Utils.Distance
	Type:  Public
	Kind:  Method
	Super: -
	Return: 7 0::Number
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;

     /* e */
     const __Math = context.getTopLevel(4)['$BgMath']; // :Math

    return function compiled_Distance(local1 /* Entity */, local2 /* Entity */) {
        // Possible use a real "this"
        // local3 is assigned before read, skip init
        let local3 = undefined
        // local4 is assigned before read, skip init
        let local4 = undefined
        // local5 is assigned before read, skip init
        let local5 = undefined
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
//        // JIT: potential type:7 0:entities::Entity// JIT: redundant assigment, value unused
        stack0 = local1;
        // 7 0::xPos
        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])) {
            stack0 = local1['xPos'];
        } else {
            temp = local1[AX_CLASS_SYMBOL] ? local1 : sec.box(local1);
            stack0 = temp.$BgxPos;
            if (stack0 === undefined || typeof stack0 === 'function') {
                stack0 = temp.axGetProperty($names[0]);
            }
        }
//        // JIT: potential type:7 0:entities::Entity// JIT: redundant assigment, value unused
        stack1 = local1;
        // 7 0::collisionCircle
        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])) {
            stack1 = local1['collisionCircle'];
        } else {
            temp = local1[AX_CLASS_SYMBOL] ? local1 : sec.box(local1);
            stack1 = temp.$BgcollisionCircle;
            if (stack1 === undefined || typeof stack1 === 'function') {
                stack1 = temp.axGetProperty($names[1]);
            }
        }
        // 7 0::xPos
        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
            stack1 = stack1['xPos'];
        } else {
            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
            stack1 = temp.$BgxPos;
            if (stack1 === undefined || typeof stack1 === 'function') {
                stack1 = temp.axGetProperty($names[0]);
            }
        }
        stack0 += stack1;
//        // JIT: potential type:7 0:entities::Entity// JIT: redundant assigment, value unused
        stack1 = local2;
        // 7 0::xPos
        if (!(local2 != undefined && local2[AX_CLASS_SYMBOL])) {
            stack1 = local2['xPos'];
        } else {
            temp = local2[AX_CLASS_SYMBOL] ? local2 : sec.box(local2);
            stack1 = temp.$BgxPos;
            if (stack1 === undefined || typeof stack1 === 'function') {
                stack1 = temp.axGetProperty($names[0]);
            }
        }
//        // JIT: potential type:7 0:entities::Entity// JIT: redundant assigment, value unused
        stack2 = local2;
        // 7 0::collisionCircle
        if (!(local2 != undefined && local2[AX_CLASS_SYMBOL])) {
            stack2 = local2['collisionCircle'];
        } else {
            temp = local2[AX_CLASS_SYMBOL] ? local2 : sec.box(local2);
            stack2 = temp.$BgcollisionCircle;
            if (stack2 === undefined || typeof stack2 === 'function') {
                stack2 = temp.axGetProperty($names[1]);
            }
        }
        // 7 0::xPos
        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
            stack2 = stack2['xPos'];
        } else {
            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
            stack2 = temp.$BgxPos;
            if (stack2 === undefined || typeof stack2 === 'function') {
                stack2 = temp.axGetProperty($names[0]);
            }
        }
        stack1 += stack2;
        stack0 -= stack1;
        stack0 = +stack0;
        local3 = stack0;
//        // JIT: potential type:7 0:entities::Entity// JIT: redundant assigment, value unused
        stack0 = local1;
        // 7 0::yPos
        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])) {
            stack0 = local1['yPos'];
        } else {
            temp = local1[AX_CLASS_SYMBOL] ? local1 : sec.box(local1);
            stack0 = temp.$BgyPos;
            if (stack0 === undefined || typeof stack0 === 'function') {
                stack0 = temp.axGetProperty($names[2]);
            }
        }
//        // JIT: potential type:7 0:entities::Entity// JIT: redundant assigment, value unused
        stack1 = local1;
        // 7 0::collisionCircle
        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])) {
            stack1 = local1['collisionCircle'];
        } else {
            temp = local1[AX_CLASS_SYMBOL] ? local1 : sec.box(local1);
            stack1 = temp.$BgcollisionCircle;
            if (stack1 === undefined || typeof stack1 === 'function') {
                stack1 = temp.axGetProperty($names[1]);
            }
        }
        // 7 0::yPos
        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
            stack1 = stack1['yPos'];
        } else {
            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
            stack1 = temp.$BgyPos;
            if (stack1 === undefined || typeof stack1 === 'function') {
                stack1 = temp.axGetProperty($names[2]);
            }
        }
        stack0 += stack1;
//        // JIT: potential type:7 0:entities::Entity// JIT: redundant assigment, value unused
        stack1 = local2;
        // 7 0::yPos
        if (!(local2 != undefined && local2[AX_CLASS_SYMBOL])) {
            stack1 = local2['yPos'];
        } else {
            temp = local2[AX_CLASS_SYMBOL] ? local2 : sec.box(local2);
            stack1 = temp.$BgyPos;
            if (stack1 === undefined || typeof stack1 === 'function') {
                stack1 = temp.axGetProperty($names[2]);
            }
        }
//        // JIT: potential type:7 0:entities::Entity// JIT: redundant assigment, value unused
        stack2 = local2;
        // 7 0::yVel
        if (!(local2 != undefined && local2[AX_CLASS_SYMBOL])) {
            stack2 = local2['yVel'];
        } else {
            temp = local2[AX_CLASS_SYMBOL] ? local2 : sec.box(local2);
            stack2 = temp.$BgyVel;
            if (stack2 === undefined || typeof stack2 === 'function') {
                stack2 = temp.axGetProperty($names[3]);
            }
        }
        stack1 += stack2;
//        // JIT: potential type:7 0:entities::Entity// JIT: redundant assigment, value unused
        stack2 = local2;
        // 7 0::collisionCircle
        if (!(local2 != undefined && local2[AX_CLASS_SYMBOL])) {
            stack2 = local2['collisionCircle'];
        } else {
            temp = local2[AX_CLASS_SYMBOL] ? local2 : sec.box(local2);
            stack2 = temp.$BgcollisionCircle;
            if (stack2 === undefined || typeof stack2 === 'function') {
                stack2 = temp.axGetProperty($names[1]);
            }
        }
        // 7 0::yPos
        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
            stack2 = stack2['yPos'];
        } else {
            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
            stack2 = temp.$BgyPos;
            if (stack2 === undefined || typeof stack2 === 'function') {
                stack2 = temp.axGetProperty($names[2]);
            }
        }
        stack1 += stack2;
        stack0 -= stack1;
        stack0 = +stack0;
        local4 = stack0;
        // 7 0::Math
        /* GenerateLexImports GETLEX */
//        stack0 = __Math;// JIT: redundant assigment, value unused
        stack1 = local3;
//        stack2 = local3;// JIT: redundant assigment, value unused
        stack1 *= local3;
        stack2 = local4;
//        stack3 = local4;// JIT: redundant assigment, value unused
        stack2 *= local4;
        stack1 += stack2;
        if (!(_a = typeof __Math, ((_a !== 'object' && _a !== 'function' ) || __Math == null || __Math[AX_CLASS_SYMBOL]))) {
           stack0 = __Math.sqrt(stack1);
        } else {
            // 7 0::sqrt
            {
                let t = __Math;
                const m = t.$Bgsqrt || (t = sec.box(__Math), t.$Bgsqrt);
                if( typeof m === "function" ) { 
                    stack0 = t.$Bgsqrt (stack1);
                } else { 
                    stack0 = __Math.axCallProperty($names[5], [stack1], false);
                }
            }
        }
        stack0 = +stack0;
        stack1 = stack0;
        local5 = stack1;
        return (+stack0);
    }
//# sourceURL=http://jit/Utils/Distance.js
})