(function anonymous(context
) {
/*
	Index: 926
	Path:  CubicBezier.drawCurve
	Type:  Public
	Kind:  Method
	Super: -
	Return: 7 0::void
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_drawCurve(local1 /* Graphics */, local2 /* Point */, local3 /* Point */, local4 /* Point */, local5 /* Point */) {
        // Possible use a real "this"
        // local6 is assigned before read, skip init
        let local6 = undefined
        // local7 is assigned before read, skip init
        let local7 = undefined
        // local8 is assigned before read, skip init
        let local8 = undefined
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
//                        stack0 = undefined;// JIT: redundant assigment, value unused
                        
                        local8 = undefined;
                        // 7 0:fl.motion::BezierSegment
                        stack0 = scope0.findScopeProperty($names[0], true, false);
//                        // JIT: potential type:7 0:flash.geom::Point// JIT: redundant assigment, value unused
                        stack1 = local2;
//                        // JIT: potential type:7 0:flash.geom::Point// JIT: redundant assigment, value unused
                        stack2 = local3;
//                        // JIT: potential type:7 0:flash.geom::Point// JIT: redundant assigment, value unused
                        stack3 = local4;
//                        // JIT: potential type:7 0:flash.geom::Point// JIT: redundant assigment, value unused
                        stack4 = local5;
                        //JIT: Support fast construct:BezierSegment/Object
                        stack0 = context.constructFast(stack0, [local2, local3, local4, local5], $names[0]);
                        
                        local6 = stack0;
//                        // JIT: potential type:7 0:flash.display::Graphics// JIT: redundant assigment, value unused
                        stack0 = local1;
//                        // JIT: potential type:7 0:flash.geom::Point// JIT: redundant assigment, value unused
                        stack1 = local2;
                        // 7 0::x
                        if (!(local2 != undefined && local2[AX_CLASS_SYMBOL])) {
                            stack1 = local2['x'];
                        } else {
                            temp = local2[AX_CLASS_SYMBOL] ? local2 : sec.box(local2);
                            stack1 = temp.$Bgx;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[1]);
                            }
                        }
//                        // JIT: potential type:7 0:flash.geom::Point// JIT: redundant assigment, value unused
                        stack2 = local2;
                        // 7 0::y
                        if (!(local2 != undefined && local2[AX_CLASS_SYMBOL])) {
                            stack2 = local2['y'];
                        } else {
                            temp = local2[AX_CLASS_SYMBOL] ? local2 : sec.box(local2);
                            stack2 = temp.$Bgy;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[2]);
                            }
                        }
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                            local1.moveTo(stack1, stack2);
                        } else {
                            // 7 0::moveTo
                            {
                                let t = local1;
                                const m = t.$BgmoveTo || (t = sec.box(local1), t.$BgmoveTo);
                                if( typeof m === "function" ) { 
                                    m.call(t, stack1, stack2);
                                } else { 
                                   local1.axCallProperty($names[3], [stack1, stack2], false);
                                }
                            }
                        }
//                        stack0 = 0.01;// JIT: redundant assigment, value unused
                        
                        local7 = 0.01;
                        { p = 79; continue; };
                    case 44:
//                        stack0 = local6;// JIT: redundant assigment, value unused
//                        stack1 = local7;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local6, ((_a !== 'object' && _a !== 'function' ) || local6 == null || local6[AX_CLASS_SYMBOL]))) {
                           stack0 = local6.getValue(local7);
                        } else {
                            // 9 {3, 0, 3, 2, 0:http://adobe.com/AS3/2006/builtin, 1:CubicBezier, 5:CubicBezier}::getValue
                            {
                                let t = local6;
                                const m = t.$BggetValue || (t = sec.box(local6), t.$BggetValue);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BggetValue (local7);
                                } else { 
                                    stack0 = local6.axCallProperty($names[4], [local7], false);
                                }
                            }
                        }
                        
                        local8 = stack0;
//                        // JIT: potential type:7 0:flash.display::Graphics// JIT: redundant assigment, value unused
                        stack0 = local1;
//                        stack1 = local8;// JIT: redundant assigment, value unused
                        // 9 {3, 0, 3, 2, 0:http://adobe.com/AS3/2006/builtin, 1:CubicBezier, 5:CubicBezier}::x
                        if (!(local8 != undefined && local8[AX_CLASS_SYMBOL])) {
                            stack1 = local8['x'];
                        } else {
                            temp = local8[AX_CLASS_SYMBOL] ? local8 : sec.box(local8);
                            stack1 = temp.$Bgx;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[5]);
                            }
                        }
//                        stack2 = local8;// JIT: redundant assigment, value unused
                        // 9 {3, 0, 3, 2, 0:http://adobe.com/AS3/2006/builtin, 1:CubicBezier, 5:CubicBezier}::y
                        if (!(local8 != undefined && local8[AX_CLASS_SYMBOL])) {
                            stack2 = local8['y'];
                        } else {
                            temp = local8[AX_CLASS_SYMBOL] ? local8 : sec.box(local8);
                            stack2 = temp.$Bgy;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[6]);
                            }
                        }
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                            local1.lineTo(stack1, stack2);
                        } else {
                            // 7 0::lineTo
                            {
                                let t = local1;
                                const m = t.$BglineTo || (t = sec.box(local1), t.$BglineTo);
                                if( typeof m === "function" ) { 
                                    m.call(t, stack1, stack2);
                                } else { 
                                   local1.axCallProperty($names[7], [stack1, stack2], false);
                                }
                            }
                        }
                        stack0 = local7;
//                        stack1 = 0.01;// JIT: redundant assigment, value unused
                        stack0 += 0.01;
                        
                        local7 = stack0;
                    case 79:
                        stack0 = local7;
                        stack1 = 1.01;
                        if (1.01 > local7) { p = 44; continue; };
                        return;
                    }
                }
            }
//# sourceURL=http://jit/CubicBezier/drawCurve.js
})