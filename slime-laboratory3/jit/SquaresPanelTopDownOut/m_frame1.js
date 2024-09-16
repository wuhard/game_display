(function anonymous(context
) {
/*
	Index: 2723
	Path:  SquaresPanelTopDownOut::m_frame1
	Type:  PackageInternal
	Kind:  Method
	Super: flash/display/MovieClip
	Return: *
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;

             /* e */
             const flash_utils__Timer_def = context.getTopLevel(6); // flash.utils:Timer

    return function compiled_m_frame1() {
        // Possible use a real "this"
        // local1 is assigned before read, skip init
        let local1 = undefined
        // local2 is assigned before read, skip init
        let local2 = undefined
        let stack0 = undefined;
        let stack1 = undefined;
        let stack2 = undefined;
        let stack3 = undefined;
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
                        // 7 0::Array
                        stack1 = scope0.findScopeProperty($names[0], true, false);
                        //JIT: Support fast construct:Array/Object
                        stack1 = context.constructFast(stack1, [], $names[0]);
                        // 7 0::childArray
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Array  */ 
                        this.$BgchildArray = stack1;
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = 0;// JIT: redundant assigment, value unused
                        // 7 0::i
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::int  */ 
                        this.$Bgi = 0;
                        { p = 88; continue; };
                    case 21:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::childArray
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack0 = this.$BgchildArray;
                        // 7 0::getChildAt
                        /* We sure that this scope owner, represented in TRAIT as Method  */ 
//                        stack1 = this;// JIT: redundant assigment, value unused
//                        stack2 = this;// JIT: redundant assigment, value unused
                        // 7 0::i
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::int  */ 
                        stack2 = this.$Bgi;
                        /* We sure that this safe call, represented in TRAIT as Method  */ 
                        stack1 = this.$BggetChildAt(stack2);
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.push(stack1);
                        } else {
                            // 7 0:http://adobe.com/AS3/2006/builtin::push
                            {
                                let t = stack0;
                                const m = t.$Bgpush || (t = sec.box(stack0), t.$Bgpush);
                                if( typeof m === "function" ) { 
                                    m.call(t, stack1);
                                } else { 
                                   stack0.axCallProperty($names[1], [stack1], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::childArray
                        //Possible type:7 0::Array
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack0 = this.$BgchildArray;
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::i
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::int  */ 
                        stack1 = this.$Bgi;
                        // 27 {3, 0, 3, 2, 0:http://adobe.com/AS3/2006/builtin, 0:adobe.utils, 0:flash.accessibility, 0:flash.desktop, 0:flash.display, 0:flash.errors, 0:flash.events, 0:flash.external, 0:flash.filters, 0:flash.geom, 0:flash.globalization, 0:flash.media, 0:flash.net, 0:flash.net.drm, 0:flash.printing, 0:flash.profiler, 0:flash.sampler, 0:flash.sensors, 0:flash.system, 0:flash.text, 0:flash.text.ime, 0:flash.text.engine, 0:flash.ui, 0:flash.utils, 0:flash.xml, 1:SquaresPanelTopDownOut, 5:SquaresPanelTopDownOut, 5:flash.display:MovieClip, 5:flash.display:Sprite, 5:flash.display:DisplayObjectContainer, 5:flash.display:InteractiveObject, 5:flash.display:DisplayObject, 5:flash.events:EventDispatcher}::*
                        {
                            let simple = stack1;
                            const b_obj = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);

                            if (typeof simple === "number") {
                                stack0 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack0 = b_obj['$Bg' + simple];
                                if (stack0 === undefined || typeof stack0 === 'function') {
                                    const rm = context.runtimename($names[2], stack1);
                                    stack0 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.stop();
                        } else {
                            // 9 {3, 0, 3, 2, 0:http://adobe.com/AS3/2006/builtin, 0:adobe.utils, 0:flash.accessibility, 0:flash.desktop, 0:flash.display, 0:flash.errors, 0:flash.events, 0:flash.external, 0:flash.filters, 0:flash.geom, 0:flash.globalization, 0:flash.media, 0:flash.net, 0:flash.net.drm, 0:flash.printing, 0:flash.profiler, 0:flash.sampler, 0:flash.sensors, 0:flash.system, 0:flash.text, 0:flash.text.ime, 0:flash.text.engine, 0:flash.ui, 0:flash.utils, 0:flash.xml, 1:SquaresPanelTopDownOut, 5:SquaresPanelTopDownOut, 5:flash.display:MovieClip, 5:flash.display:Sprite, 5:flash.display:DisplayObjectContainer, 5:flash.display:InteractiveObject, 5:flash.display:DisplayObject, 5:flash.events:EventDispatcher}::stop
                            {
                                let t = stack0;
                                const m = t.$Bgstop || (t = sec.box(stack0), t.$Bgstop);
                                if( typeof m === "function" ) { 
                                    m.call(t);
                                } else { 
                                   stack0.axCallProperty($names[3], [], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::childArray
                        //Possible type:7 0::Array
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack0 = this.$BgchildArray;
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::i
                        //Possible type:7 0::int
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::int  */ 
                        stack1 = this.$Bgi;
                        // 27 {3, 0, 3, 2, 0:http://adobe.com/AS3/2006/builtin, 0:adobe.utils, 0:flash.accessibility, 0:flash.desktop, 0:flash.display, 0:flash.errors, 0:flash.events, 0:flash.external, 0:flash.filters, 0:flash.geom, 0:flash.globalization, 0:flash.media, 0:flash.net, 0:flash.net.drm, 0:flash.printing, 0:flash.profiler, 0:flash.sampler, 0:flash.sensors, 0:flash.system, 0:flash.text, 0:flash.text.ime, 0:flash.text.engine, 0:flash.ui, 0:flash.utils, 0:flash.xml, 1:SquaresPanelTopDownOut, 5:SquaresPanelTopDownOut, 5:flash.display:MovieClip, 5:flash.display:Sprite, 5:flash.display:DisplayObjectContainer, 5:flash.display:InteractiveObject, 5:flash.display:DisplayObject, 5:flash.events:EventDispatcher}::*
                        {
                            let simple = stack1;
                            const b_obj = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);

                            if (typeof simple === "number") {
                                stack0 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack0 = b_obj['$Bg' + simple];
                                if (stack0 === undefined || typeof stack0 === 'function') {
                                    const rm = context.runtimename($names[2], stack1);
                                    stack0 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
//                        stack1 = false;// JIT: redundant assigment, value unused
                        // 9 {3, 0, 3, 2, 0:http://adobe.com/AS3/2006/builtin, 0:adobe.utils, 0:flash.accessibility, 0:flash.desktop, 0:flash.display, 0:flash.errors, 0:flash.events, 0:flash.external, 0:flash.filters, 0:flash.geom, 0:flash.globalization, 0:flash.media, 0:flash.net, 0:flash.net.drm, 0:flash.printing, 0:flash.profiler, 0:flash.sampler, 0:flash.sensors, 0:flash.system, 0:flash.text, 0:flash.text.ime, 0:flash.text.engine, 0:flash.ui, 0:flash.utils, 0:flash.xml, 1:SquaresPanelTopDownOut, 5:SquaresPanelTopDownOut, 5:flash.display:MovieClip, 5:flash.display:Sprite, 5:flash.display:DisplayObjectContainer, 5:flash.display:InteractiveObject, 5:flash.display:DisplayObject, 5:flash.events:EventDispatcher}::visible
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.visible = false;
                        } else {
                            context.setproperty($names[4], false, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        stack1 = this;
                        local1 = stack1;
                        // 7 0::i
                        //Possible type:7 0::Array
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::int  */ 
                        stack0 = this.$Bgi;
                        stack0 = (stack0 | 0) + 1;
                        local2 = stack0;
//                        stack0 = local1;// JIT: redundant assigment, value unused
//                        stack1 = local2;// JIT: redundant assigment, value unused
                        // 7 0::i
                        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])){
                            local1.i = local2;
                        } else {
                            context.setproperty($names[5], local2, local1);
                        }
                        //IR: KILL removed, reason: prevent optimisation
                        //IR: KILL removed, reason: prevent optimisation
                    case 88:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::i
                        //Possible type:7 0::int
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::int  */ 
                        stack0 = this.$Bgi;
                        /* GETLEX We sure that this safe get, represented in TRAIT as Getter  */ 
                        stack1 = this.$BgnumChildren;
                        if (stack1 > stack0) { p = 21; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0:flash.utils::Timer
                        /* GenerateLexImports */
//                        stack1 = flash_utils__Timer_def;// JIT: redundant assigment, value unused
//                        stack2 = 40;// JIT: redundant assigment, value unused
//                        stack3 = 12;// JIT: redundant assigment, value unused
                        stack1 = context.constructprop($names[6], flash_utils__Timer_def, [40, 12]);
                        // 7 0::timer
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0:flash.utils::Timer  */ 
                        this.$Bgtimer = stack1;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::timer
                        //Possible type:7 0::int
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.utils::Timer  */ 
                        stack0 = this.$Bgtimer;
                        // 7 0:flash.events::TimerEvent
                        temp = scope0.findScopeProperty($names[7], true, false);
                        stack1 = temp.$BgTimerEvent;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[7]);
                        }
                        // 7 0::TIMER
                        //Possible type:7 0:flash.events::TimerEvent
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['TIMER'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$BgTIMER;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[8]);
                            }
                        }
//                        stack2 = this;// JIT: redundant assigment, value unused
                        // 7 0::timerHandler
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Method, type: undefined  */ 
                        stack2 = this.axGetProperty($names[9]);
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.addEventListener(stack1, stack2);
                        } else {
                            // 7 0::addEventListener
                            {
                                let t = stack0;
                                const m = t.$BgaddEventListener || (t = sec.box(stack0), t.$BgaddEventListener);
                                if( typeof m === "function" ) { 
                                    m.call(t, stack1, stack2);
                                } else { 
                                   stack0.axCallProperty($names[10], [stack1, stack2], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::timer
                        //Possible type:7 0:flash.utils::Timer
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.utils::Timer  */ 
                        stack0 = this.$Bgtimer;
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.start();
                        } else {
                            // 7 0::start
                            {
                                let t = stack0;
                                const m = t.$Bgstart || (t = sec.box(stack0), t.$Bgstart);
                                if( typeof m === "function" ) { 
                                    m.call(t);
                                } else { 
                                   stack0.axCallProperty($names[11], [], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = 0;// JIT: redundant assigment, value unused
                        // 7 0::offset
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::int  */ 
                        this.$Bgoffset = 0;
                        return;
                    }
                }
            }
//# sourceURL=http://jit/SquaresPanelTopDownOut/m_frame1.js
})