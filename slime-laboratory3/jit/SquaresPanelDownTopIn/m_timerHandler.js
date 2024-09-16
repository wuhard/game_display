(function anonymous(context
) {
/*
	Index: 2707
	Path:  SquaresPanelDownTopIn::m_timerHandler
	Type:  Public
	Kind:  Method
	Super: flash/display/MovieClip
	Return: 7 0::void
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_m_timerHandler(local1 /* TimerEvent */) {
        // Possible use a real "this"

        let stack0 = undefined;
        let stack1 = undefined;
        let stack2 = undefined;
        let scope0 = undefined;
        let temp = undefined;
        let sec = context.sec;
        let $names = context.names;

        
        //IR: PUSHSCOPE removed, reason: unused
        // unreachable
//        stack0 = this;// JIT: redundant assigment, value unused
        // 7 0::childArray
        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
        stack0 = this.$BgchildArray;
//        stack1 = this;// JIT: redundant assigment, value unused
        // 7 0::offset
        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::int  */ 
        stack1 = this.$Bgoffset;
        // 27 {3, 0, 3, 2, 0:http://adobe.com/AS3/2006/builtin, 0:adobe.utils, 0:flash.accessibility, 0:flash.desktop, 0:flash.display, 0:flash.errors, 0:flash.events, 0:flash.external, 0:flash.filters, 0:flash.geom, 0:flash.globalization, 0:flash.media, 0:flash.net, 0:flash.net.drm, 0:flash.printing, 0:flash.profiler, 0:flash.sampler, 0:flash.sensors, 0:flash.system, 0:flash.text, 0:flash.text.ime, 0:flash.text.engine, 0:flash.ui, 0:flash.utils, 0:flash.xml, 1:SquaresPanelDownTopIn, 5:SquaresPanelDownTopIn, 5:flash.display:MovieClip, 5:flash.display:Sprite, 5:flash.display:DisplayObjectContainer, 5:flash.display:InteractiveObject, 5:flash.display:DisplayObject, 5:flash.events:EventDispatcher}::*
        {
            let simple = stack1;
            const b_obj = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);

            if (typeof simple === "number") {
                stack0 = b_obj.axGetNumericProperty(simple);
            } else {
                stack0 = b_obj['$Bg' + simple];
                if (stack0 === undefined || typeof stack0 === 'function') {
                    const rm = context.runtimename($names[0], stack1);
                    stack0 = b_obj.axGetProperty(rm);
                }
            }
        }
        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
            stack0.play();
        } else {
            // 9 {3, 0, 3, 2, 0:http://adobe.com/AS3/2006/builtin, 0:adobe.utils, 0:flash.accessibility, 0:flash.desktop, 0:flash.display, 0:flash.errors, 0:flash.events, 0:flash.external, 0:flash.filters, 0:flash.geom, 0:flash.globalization, 0:flash.media, 0:flash.net, 0:flash.net.drm, 0:flash.printing, 0:flash.profiler, 0:flash.sampler, 0:flash.sensors, 0:flash.system, 0:flash.text, 0:flash.text.ime, 0:flash.text.engine, 0:flash.ui, 0:flash.utils, 0:flash.xml, 1:SquaresPanelDownTopIn, 5:SquaresPanelDownTopIn, 5:flash.display:MovieClip, 5:flash.display:Sprite, 5:flash.display:DisplayObjectContainer, 5:flash.display:InteractiveObject, 5:flash.display:DisplayObject, 5:flash.events:EventDispatcher}::play
            {
                let t = stack0;
                const m = t.$Bgplay || (t = sec.box(stack0), t.$Bgplay);
                if( typeof m === "function" ) { 
                    m.call(t);
                } else { 
                   stack0.axCallProperty($names[1], [], false);
                }
            }
        }
//        stack0 = this;// JIT: redundant assigment, value unused
//        stack1 = this;// JIT: redundant assigment, value unused
        // 7 0::offset
        //Possible type:7 0::int
        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::int  */ 
        stack1 = this.$Bgoffset;
//        stack2 = 1;// JIT: redundant assigment, value unused
        stack1 += 1;
        // 7 0::offset
        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::int  */ 
        this.$Bgoffset = (stack1|0);
        return;
    }
//# sourceURL=http://jit/SquaresPanelDownTopIn/m_timerHandler.js
})