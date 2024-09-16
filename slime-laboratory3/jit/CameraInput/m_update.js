(function anonymous(context
) {
/*
	Index: 2058
	Path:  CameraInput::m_update
	Type:  Public
	Kind:  Method
	Super: flash/display/MovieClip
	Return: 7 0::void
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_m_update(local1 /* Event */) {
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
        // 7 0::cx
        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.text::TextField  */ 
        stack0 = this.$Bgcx;
        stack1 = "";
//        stack2 = this;// JIT: redundant assigment, value unused
        // 7 0::amount1
        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
        stack2 = this.$Bgamount1;
        stack1 += stack2;
        // 7 0::text
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.text = stack1;
        } else {
            context.setproperty($names[0], stack1, stack0);
        }
//        stack0 = this;// JIT: redundant assigment, value unused
        // 7 0::cy
        //Possible type:7 0:flash.text::TextField
        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.text::TextField  */ 
        stack0 = this.$Bgcy;
        stack1 = "";
//        stack2 = this;// JIT: redundant assigment, value unused
        // 7 0::amount2
        //Possible type:7 0::Number
        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
        stack2 = this.$Bgamount2;
        stack1 += stack2;
        // 7 0::text
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.text = stack1;
        } else {
            context.setproperty($names[0], stack1, stack0);
        }
//        stack0 = this;// JIT: redundant assigment, value unused
        // 7 0::cz
        //Possible type:7 0:flash.text::TextField
        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.text::TextField  */ 
        stack0 = this.$Bgcz;
        stack1 = "";
//        stack2 = this;// JIT: redundant assigment, value unused
        // 7 0::amount3
        //Possible type:7 0::Number
        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
        stack2 = this.$Bgamount3;
        stack1 += stack2;
        // 7 0::text
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.text = stack1;
        } else {
            context.setproperty($names[0], stack1, stack0);
        }
//        stack0 = this;// JIT: redundant assigment, value unused
        // 7 0::lx
        //Possible type:7 0:flash.text::TextField
        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.text::TextField  */ 
        stack0 = this.$Bglx;
        stack1 = "";
//        stack2 = this;// JIT: redundant assigment, value unused
        // 7 0::amount4
        //Possible type:7 0::Number
        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
        stack2 = this.$Bgamount4;
        stack1 += stack2;
        // 7 0::text
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.text = stack1;
        } else {
            context.setproperty($names[0], stack1, stack0);
        }
//        stack0 = this;// JIT: redundant assigment, value unused
        // 7 0::ly
        //Possible type:7 0:flash.text::TextField
        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.text::TextField  */ 
        stack0 = this.$Bgly;
        stack1 = "";
//        stack2 = this;// JIT: redundant assigment, value unused
        // 7 0::amount5
        //Possible type:7 0::Number
        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
        stack2 = this.$Bgamount5;
        stack1 += stack2;
        // 7 0::text
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.text = stack1;
        } else {
            context.setproperty($names[0], stack1, stack0);
        }
//        stack0 = this;// JIT: redundant assigment, value unused
        // 7 0::lz
        //Possible type:7 0:flash.text::TextField
        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.text::TextField  */ 
        stack0 = this.$Bglz;
        stack1 = "";
//        stack2 = this;// JIT: redundant assigment, value unused
        // 7 0::amount6
        //Possible type:7 0::Number
        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
        stack2 = this.$Bgamount6;
        stack1 += stack2;
        // 7 0::text
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.text = stack1;
        } else {
            context.setproperty($names[0], stack1, stack0);
        }
//        stack0 = this;// JIT: redundant assigment, value unused
//        stack1 = this;// JIT: redundant assigment, value unused
        // 7 0::dragger1
        //Possible type:undefined
        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
        stack1 = this.$Bgdragger1;
        // 9 {3, 0, 3, 2, 0:http://adobe.com/AS3/2006/builtin, 0:adobe.utils, 0:flash.accessibility, 0:flash.desktop, 0:flash.display, 0:flash.errors, 0:flash.events, 0:flash.external, 0:flash.filters, 0:flash.geom, 0:flash.globalization, 0:flash.media, 0:flash.net, 0:flash.net.drm, 0:flash.printing, 0:flash.profiler, 0:flash.sampler, 0:flash.sensors, 0:flash.system, 0:flash.text, 0:flash.text.ime, 0:flash.text.engine, 0:flash.ui, 0:flash.utils, 0:flash.xml, 1:CameraInput, 5:CameraInput, 5:flash.display:MovieClip, 5:flash.display:Sprite, 5:flash.display:DisplayObjectContainer, 5:flash.display:InteractiveObject, 5:flash.display:DisplayObject, 5:flash.events:EventDispatcher}::drag
        //Possible type:7 0:flash.display::MovieClip
        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
            stack1 = stack1['drag'];
        } else {
            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
            stack1 = temp.$Bgdrag;
            if (stack1 === undefined || typeof stack1 === 'function') {
                stack1 = temp.axGetProperty($names[1]);
            }
        }
        // 9 {3, 0, 3, 2, 0:http://adobe.com/AS3/2006/builtin, 0:adobe.utils, 0:flash.accessibility, 0:flash.desktop, 0:flash.display, 0:flash.errors, 0:flash.events, 0:flash.external, 0:flash.filters, 0:flash.geom, 0:flash.globalization, 0:flash.media, 0:flash.net, 0:flash.net.drm, 0:flash.printing, 0:flash.profiler, 0:flash.sampler, 0:flash.sensors, 0:flash.system, 0:flash.text, 0:flash.text.ime, 0:flash.text.engine, 0:flash.ui, 0:flash.utils, 0:flash.xml, 1:CameraInput, 5:CameraInput, 5:flash.display:MovieClip, 5:flash.display:Sprite, 5:flash.display:DisplayObjectContainer, 5:flash.display:InteractiveObject, 5:flash.display:DisplayObject, 5:flash.events:EventDispatcher}::x
        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
            stack1 = stack1['x'];
        } else {
            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
            stack1 = temp.$Bgx;
            if (stack1 === undefined || typeof stack1 === 'function') {
                stack1 = temp.axGetProperty($names[2]);
            }
        }
//        stack2 = 1;// JIT: redundant assigment, value unused
        stack1 /= 1;
        // 7 0::amount1
        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Number  */ 
        this.$Bgamount1 = (+stack1);
//        stack0 = this;// JIT: redundant assigment, value unused
//        stack1 = this;// JIT: redundant assigment, value unused
        // 7 0::dragger2
        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
        stack1 = this.$Bgdragger2;
        // 9 {3, 0, 3, 2, 0:http://adobe.com/AS3/2006/builtin, 0:adobe.utils, 0:flash.accessibility, 0:flash.desktop, 0:flash.display, 0:flash.errors, 0:flash.events, 0:flash.external, 0:flash.filters, 0:flash.geom, 0:flash.globalization, 0:flash.media, 0:flash.net, 0:flash.net.drm, 0:flash.printing, 0:flash.profiler, 0:flash.sampler, 0:flash.sensors, 0:flash.system, 0:flash.text, 0:flash.text.ime, 0:flash.text.engine, 0:flash.ui, 0:flash.utils, 0:flash.xml, 1:CameraInput, 5:CameraInput, 5:flash.display:MovieClip, 5:flash.display:Sprite, 5:flash.display:DisplayObjectContainer, 5:flash.display:InteractiveObject, 5:flash.display:DisplayObject, 5:flash.events:EventDispatcher}::drag
        //Possible type:7 0:flash.display::MovieClip
        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
            stack1 = stack1['drag'];
        } else {
            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
            stack1 = temp.$Bgdrag;
            if (stack1 === undefined || typeof stack1 === 'function') {
                stack1 = temp.axGetProperty($names[1]);
            }
        }
        // 9 {3, 0, 3, 2, 0:http://adobe.com/AS3/2006/builtin, 0:adobe.utils, 0:flash.accessibility, 0:flash.desktop, 0:flash.display, 0:flash.errors, 0:flash.events, 0:flash.external, 0:flash.filters, 0:flash.geom, 0:flash.globalization, 0:flash.media, 0:flash.net, 0:flash.net.drm, 0:flash.printing, 0:flash.profiler, 0:flash.sampler, 0:flash.sensors, 0:flash.system, 0:flash.text, 0:flash.text.ime, 0:flash.text.engine, 0:flash.ui, 0:flash.utils, 0:flash.xml, 1:CameraInput, 5:CameraInput, 5:flash.display:MovieClip, 5:flash.display:Sprite, 5:flash.display:DisplayObjectContainer, 5:flash.display:InteractiveObject, 5:flash.display:DisplayObject, 5:flash.events:EventDispatcher}::x
        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
            stack1 = stack1['x'];
        } else {
            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
            stack1 = temp.$Bgx;
            if (stack1 === undefined || typeof stack1 === 'function') {
                stack1 = temp.axGetProperty($names[2]);
            }
        }
//        stack2 = 1;// JIT: redundant assigment, value unused
        stack1 /= 1;
        // 7 0::amount2
        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Number  */ 
        this.$Bgamount2 = (+stack1);
//        stack0 = this;// JIT: redundant assigment, value unused
//        stack1 = this;// JIT: redundant assigment, value unused
        // 7 0::dragger3
        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
        stack1 = this.$Bgdragger3;
        // 9 {3, 0, 3, 2, 0:http://adobe.com/AS3/2006/builtin, 0:adobe.utils, 0:flash.accessibility, 0:flash.desktop, 0:flash.display, 0:flash.errors, 0:flash.events, 0:flash.external, 0:flash.filters, 0:flash.geom, 0:flash.globalization, 0:flash.media, 0:flash.net, 0:flash.net.drm, 0:flash.printing, 0:flash.profiler, 0:flash.sampler, 0:flash.sensors, 0:flash.system, 0:flash.text, 0:flash.text.ime, 0:flash.text.engine, 0:flash.ui, 0:flash.utils, 0:flash.xml, 1:CameraInput, 5:CameraInput, 5:flash.display:MovieClip, 5:flash.display:Sprite, 5:flash.display:DisplayObjectContainer, 5:flash.display:InteractiveObject, 5:flash.display:DisplayObject, 5:flash.events:EventDispatcher}::drag
        //Possible type:7 0:flash.display::MovieClip
        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
            stack1 = stack1['drag'];
        } else {
            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
            stack1 = temp.$Bgdrag;
            if (stack1 === undefined || typeof stack1 === 'function') {
                stack1 = temp.axGetProperty($names[1]);
            }
        }
        // 9 {3, 0, 3, 2, 0:http://adobe.com/AS3/2006/builtin, 0:adobe.utils, 0:flash.accessibility, 0:flash.desktop, 0:flash.display, 0:flash.errors, 0:flash.events, 0:flash.external, 0:flash.filters, 0:flash.geom, 0:flash.globalization, 0:flash.media, 0:flash.net, 0:flash.net.drm, 0:flash.printing, 0:flash.profiler, 0:flash.sampler, 0:flash.sensors, 0:flash.system, 0:flash.text, 0:flash.text.ime, 0:flash.text.engine, 0:flash.ui, 0:flash.utils, 0:flash.xml, 1:CameraInput, 5:CameraInput, 5:flash.display:MovieClip, 5:flash.display:Sprite, 5:flash.display:DisplayObjectContainer, 5:flash.display:InteractiveObject, 5:flash.display:DisplayObject, 5:flash.events:EventDispatcher}::x
        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
            stack1 = stack1['x'];
        } else {
            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
            stack1 = temp.$Bgx;
            if (stack1 === undefined || typeof stack1 === 'function') {
                stack1 = temp.axGetProperty($names[2]);
            }
        }
//        stack2 = 1;// JIT: redundant assigment, value unused
        stack1 /= 1;
        // 7 0::amount3
        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Number  */ 
        this.$Bgamount3 = (+stack1);
//        stack0 = this;// JIT: redundant assigment, value unused
//        stack1 = this;// JIT: redundant assigment, value unused
        // 7 0::dragger4
        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
        stack1 = this.$Bgdragger4;
        // 9 {3, 0, 3, 2, 0:http://adobe.com/AS3/2006/builtin, 0:adobe.utils, 0:flash.accessibility, 0:flash.desktop, 0:flash.display, 0:flash.errors, 0:flash.events, 0:flash.external, 0:flash.filters, 0:flash.geom, 0:flash.globalization, 0:flash.media, 0:flash.net, 0:flash.net.drm, 0:flash.printing, 0:flash.profiler, 0:flash.sampler, 0:flash.sensors, 0:flash.system, 0:flash.text, 0:flash.text.ime, 0:flash.text.engine, 0:flash.ui, 0:flash.utils, 0:flash.xml, 1:CameraInput, 5:CameraInput, 5:flash.display:MovieClip, 5:flash.display:Sprite, 5:flash.display:DisplayObjectContainer, 5:flash.display:InteractiveObject, 5:flash.display:DisplayObject, 5:flash.events:EventDispatcher}::drag
        //Possible type:7 0:flash.display::MovieClip
        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
            stack1 = stack1['drag'];
        } else {
            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
            stack1 = temp.$Bgdrag;
            if (stack1 === undefined || typeof stack1 === 'function') {
                stack1 = temp.axGetProperty($names[1]);
            }
        }
        // 9 {3, 0, 3, 2, 0:http://adobe.com/AS3/2006/builtin, 0:adobe.utils, 0:flash.accessibility, 0:flash.desktop, 0:flash.display, 0:flash.errors, 0:flash.events, 0:flash.external, 0:flash.filters, 0:flash.geom, 0:flash.globalization, 0:flash.media, 0:flash.net, 0:flash.net.drm, 0:flash.printing, 0:flash.profiler, 0:flash.sampler, 0:flash.sensors, 0:flash.system, 0:flash.text, 0:flash.text.ime, 0:flash.text.engine, 0:flash.ui, 0:flash.utils, 0:flash.xml, 1:CameraInput, 5:CameraInput, 5:flash.display:MovieClip, 5:flash.display:Sprite, 5:flash.display:DisplayObjectContainer, 5:flash.display:InteractiveObject, 5:flash.display:DisplayObject, 5:flash.events:EventDispatcher}::x
        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
            stack1 = stack1['x'];
        } else {
            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
            stack1 = temp.$Bgx;
            if (stack1 === undefined || typeof stack1 === 'function') {
                stack1 = temp.axGetProperty($names[2]);
            }
        }
//        stack2 = 1;// JIT: redundant assigment, value unused
        stack1 /= 1;
        // 7 0::amount4
        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Number  */ 
        this.$Bgamount4 = (+stack1);
//        stack0 = this;// JIT: redundant assigment, value unused
//        stack1 = this;// JIT: redundant assigment, value unused
        // 7 0::dragger5
        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
        stack1 = this.$Bgdragger5;
        // 9 {3, 0, 3, 2, 0:http://adobe.com/AS3/2006/builtin, 0:adobe.utils, 0:flash.accessibility, 0:flash.desktop, 0:flash.display, 0:flash.errors, 0:flash.events, 0:flash.external, 0:flash.filters, 0:flash.geom, 0:flash.globalization, 0:flash.media, 0:flash.net, 0:flash.net.drm, 0:flash.printing, 0:flash.profiler, 0:flash.sampler, 0:flash.sensors, 0:flash.system, 0:flash.text, 0:flash.text.ime, 0:flash.text.engine, 0:flash.ui, 0:flash.utils, 0:flash.xml, 1:CameraInput, 5:CameraInput, 5:flash.display:MovieClip, 5:flash.display:Sprite, 5:flash.display:DisplayObjectContainer, 5:flash.display:InteractiveObject, 5:flash.display:DisplayObject, 5:flash.events:EventDispatcher}::drag
        //Possible type:7 0:flash.display::MovieClip
        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
            stack1 = stack1['drag'];
        } else {
            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
            stack1 = temp.$Bgdrag;
            if (stack1 === undefined || typeof stack1 === 'function') {
                stack1 = temp.axGetProperty($names[1]);
            }
        }
        // 9 {3, 0, 3, 2, 0:http://adobe.com/AS3/2006/builtin, 0:adobe.utils, 0:flash.accessibility, 0:flash.desktop, 0:flash.display, 0:flash.errors, 0:flash.events, 0:flash.external, 0:flash.filters, 0:flash.geom, 0:flash.globalization, 0:flash.media, 0:flash.net, 0:flash.net.drm, 0:flash.printing, 0:flash.profiler, 0:flash.sampler, 0:flash.sensors, 0:flash.system, 0:flash.text, 0:flash.text.ime, 0:flash.text.engine, 0:flash.ui, 0:flash.utils, 0:flash.xml, 1:CameraInput, 5:CameraInput, 5:flash.display:MovieClip, 5:flash.display:Sprite, 5:flash.display:DisplayObjectContainer, 5:flash.display:InteractiveObject, 5:flash.display:DisplayObject, 5:flash.events:EventDispatcher}::x
        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
            stack1 = stack1['x'];
        } else {
            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
            stack1 = temp.$Bgx;
            if (stack1 === undefined || typeof stack1 === 'function') {
                stack1 = temp.axGetProperty($names[2]);
            }
        }
//        stack2 = 1;// JIT: redundant assigment, value unused
        stack1 /= 1;
        // 7 0::amount5
        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Number  */ 
        this.$Bgamount5 = (+stack1);
//        stack0 = this;// JIT: redundant assigment, value unused
//        stack1 = this;// JIT: redundant assigment, value unused
        // 7 0::dragger6
        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
        stack1 = this.$Bgdragger6;
        // 9 {3, 0, 3, 2, 0:http://adobe.com/AS3/2006/builtin, 0:adobe.utils, 0:flash.accessibility, 0:flash.desktop, 0:flash.display, 0:flash.errors, 0:flash.events, 0:flash.external, 0:flash.filters, 0:flash.geom, 0:flash.globalization, 0:flash.media, 0:flash.net, 0:flash.net.drm, 0:flash.printing, 0:flash.profiler, 0:flash.sampler, 0:flash.sensors, 0:flash.system, 0:flash.text, 0:flash.text.ime, 0:flash.text.engine, 0:flash.ui, 0:flash.utils, 0:flash.xml, 1:CameraInput, 5:CameraInput, 5:flash.display:MovieClip, 5:flash.display:Sprite, 5:flash.display:DisplayObjectContainer, 5:flash.display:InteractiveObject, 5:flash.display:DisplayObject, 5:flash.events:EventDispatcher}::drag
        //Possible type:7 0:flash.display::MovieClip
        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
            stack1 = stack1['drag'];
        } else {
            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
            stack1 = temp.$Bgdrag;
            if (stack1 === undefined || typeof stack1 === 'function') {
                stack1 = temp.axGetProperty($names[1]);
            }
        }
        // 9 {3, 0, 3, 2, 0:http://adobe.com/AS3/2006/builtin, 0:adobe.utils, 0:flash.accessibility, 0:flash.desktop, 0:flash.display, 0:flash.errors, 0:flash.events, 0:flash.external, 0:flash.filters, 0:flash.geom, 0:flash.globalization, 0:flash.media, 0:flash.net, 0:flash.net.drm, 0:flash.printing, 0:flash.profiler, 0:flash.sampler, 0:flash.sensors, 0:flash.system, 0:flash.text, 0:flash.text.ime, 0:flash.text.engine, 0:flash.ui, 0:flash.utils, 0:flash.xml, 1:CameraInput, 5:CameraInput, 5:flash.display:MovieClip, 5:flash.display:Sprite, 5:flash.display:DisplayObjectContainer, 5:flash.display:InteractiveObject, 5:flash.display:DisplayObject, 5:flash.events:EventDispatcher}::x
        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
            stack1 = stack1['x'];
        } else {
            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
            stack1 = temp.$Bgx;
            if (stack1 === undefined || typeof stack1 === 'function') {
                stack1 = temp.axGetProperty($names[2]);
            }
        }
//        stack2 = 1;// JIT: redundant assigment, value unused
        stack1 /= 1;
        // 7 0::amount6
        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Number  */ 
        this.$Bgamount6 = (+stack1);
        return;
    }
//# sourceURL=http://jit/CameraInput/m_update.js
})