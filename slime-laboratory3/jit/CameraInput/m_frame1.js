(function anonymous(context
) {
/*
	Index: 2059
	Path:  CameraInput::m_frame1
	Type:  PackageInternal
	Kind:  Method
	Super: flash/display/MovieClip
	Return: *
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_m_frame1() {
        // Possible use a real "this"

        let stack0 = undefined;
        let stack1 = undefined;
        let stack2 = undefined;
        let scope0 = undefined;
        let temp = undefined;
        let sec = context.sec;
        let $names = context.names;

        
        stack0 = this;
        scope0 = context.savedScope.extend(this);
        // 7 0::addEventListener
        /* We sure that this scope owner, represented in TRAIT as Method  */ 
//        stack0 = this;// JIT: redundant assigment, value unused
        // 7 0:flash.events::Event
        temp = scope0.findScopeProperty($names[0], true, false);
        stack1 = temp.$BgEvent;
        if (stack1 === undefined || typeof stack1 === 'function') {
            stack1 = temp.axGetProperty($names[0]);
        }
        // 7 0::ENTER_FRAME
        //Possible type:7 0:flash.events::Event
        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
            stack1 = stack1['ENTER_FRAME'];
        } else {
            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
            stack1 = temp.$BgENTER_FRAME;
            if (stack1 === undefined || typeof stack1 === 'function') {
                stack1 = temp.axGetProperty($names[1]);
            }
        }
//        stack2 = this;// JIT: redundant assigment, value unused
        // 7 0::update
        /* We sure that this safe get, represented in TRAIT as Method, type: undefined  */ 
        stack2 = this.axGetProperty($names[2]);
        /* We sure that this safe call, represented in TRAIT as Method  */ 
        this.$BgaddEventListener(stack1, stack2);
//        stack0 = this;// JIT: redundant assigment, value unused
//        stack1 = 1;// JIT: redundant assigment, value unused
        // 7 0::amount1
        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Number  */ 
        this.$Bgamount1 = 1;
//        stack0 = this;// JIT: redundant assigment, value unused
//        stack1 = 1;// JIT: redundant assigment, value unused
        // 7 0::amount2
        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Number  */ 
        this.$Bgamount2 = 1;
//        stack0 = this;// JIT: redundant assigment, value unused
//        stack1 = 1;// JIT: redundant assigment, value unused
        // 7 0::amount3
        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Number  */ 
        this.$Bgamount3 = 1;
//        stack0 = this;// JIT: redundant assigment, value unused
//        stack1 = 1;// JIT: redundant assigment, value unused
        // 7 0::amount4
        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Number  */ 
        this.$Bgamount4 = 1;
//        stack0 = this;// JIT: redundant assigment, value unused
//        stack1 = 1;// JIT: redundant assigment, value unused
        // 7 0::amount5
        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Number  */ 
        this.$Bgamount5 = 1;
//        stack0 = this;// JIT: redundant assigment, value unused
//        stack1 = 1;// JIT: redundant assigment, value unused
        // 7 0::amount6
        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Number  */ 
        this.$Bgamount6 = 1;
//        stack0 = this;// JIT: redundant assigment, value unused
        // 7 0::dragger1
        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
        stack0 = this.$Bgdragger1;
        // 9 {3, 0, 3, 2, 0:http://adobe.com/AS3/2006/builtin, 0:adobe.utils, 0:flash.accessibility, 0:flash.desktop, 0:flash.display, 0:flash.errors, 0:flash.events, 0:flash.external, 0:flash.filters, 0:flash.geom, 0:flash.globalization, 0:flash.media, 0:flash.net, 0:flash.net.drm, 0:flash.printing, 0:flash.profiler, 0:flash.sampler, 0:flash.sensors, 0:flash.system, 0:flash.text, 0:flash.text.ime, 0:flash.text.engine, 0:flash.ui, 0:flash.utils, 0:flash.xml, 1:CameraInput, 5:CameraInput, 5:flash.display:MovieClip, 5:flash.display:Sprite, 5:flash.display:DisplayObjectContainer, 5:flash.display:InteractiveObject, 5:flash.display:DisplayObject, 5:flash.events:EventDispatcher}::drag
        //Possible type:7 0:flash.display::MovieClip
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
            stack0 = stack0['drag'];
        } else {
            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
            stack0 = temp.$Bgdrag;
            if (stack0 === undefined || typeof stack0 === 'function') {
                stack0 = temp.axGetProperty($names[3]);
            }
        }
//        stack1 = 0;// JIT: redundant assigment, value unused
        // 9 {3, 0, 3, 2, 0:http://adobe.com/AS3/2006/builtin, 0:adobe.utils, 0:flash.accessibility, 0:flash.desktop, 0:flash.display, 0:flash.errors, 0:flash.events, 0:flash.external, 0:flash.filters, 0:flash.geom, 0:flash.globalization, 0:flash.media, 0:flash.net, 0:flash.net.drm, 0:flash.printing, 0:flash.profiler, 0:flash.sampler, 0:flash.sensors, 0:flash.system, 0:flash.text, 0:flash.text.ime, 0:flash.text.engine, 0:flash.ui, 0:flash.utils, 0:flash.xml, 1:CameraInput, 5:CameraInput, 5:flash.display:MovieClip, 5:flash.display:Sprite, 5:flash.display:DisplayObjectContainer, 5:flash.display:InteractiveObject, 5:flash.display:DisplayObject, 5:flash.events:EventDispatcher}::x
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.x = 0;
        } else {
            context.setproperty($names[4], 0, stack0);
        }
//        stack0 = this;// JIT: redundant assigment, value unused
        // 7 0::dragger2
        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
        stack0 = this.$Bgdragger2;
        // 9 {3, 0, 3, 2, 0:http://adobe.com/AS3/2006/builtin, 0:adobe.utils, 0:flash.accessibility, 0:flash.desktop, 0:flash.display, 0:flash.errors, 0:flash.events, 0:flash.external, 0:flash.filters, 0:flash.geom, 0:flash.globalization, 0:flash.media, 0:flash.net, 0:flash.net.drm, 0:flash.printing, 0:flash.profiler, 0:flash.sampler, 0:flash.sensors, 0:flash.system, 0:flash.text, 0:flash.text.ime, 0:flash.text.engine, 0:flash.ui, 0:flash.utils, 0:flash.xml, 1:CameraInput, 5:CameraInput, 5:flash.display:MovieClip, 5:flash.display:Sprite, 5:flash.display:DisplayObjectContainer, 5:flash.display:InteractiveObject, 5:flash.display:DisplayObject, 5:flash.events:EventDispatcher}::drag
        //Possible type:7 0:flash.display::MovieClip
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
            stack0 = stack0['drag'];
        } else {
            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
            stack0 = temp.$Bgdrag;
            if (stack0 === undefined || typeof stack0 === 'function') {
                stack0 = temp.axGetProperty($names[3]);
            }
        }
//        stack1 = 0;// JIT: redundant assigment, value unused
        // 9 {3, 0, 3, 2, 0:http://adobe.com/AS3/2006/builtin, 0:adobe.utils, 0:flash.accessibility, 0:flash.desktop, 0:flash.display, 0:flash.errors, 0:flash.events, 0:flash.external, 0:flash.filters, 0:flash.geom, 0:flash.globalization, 0:flash.media, 0:flash.net, 0:flash.net.drm, 0:flash.printing, 0:flash.profiler, 0:flash.sampler, 0:flash.sensors, 0:flash.system, 0:flash.text, 0:flash.text.ime, 0:flash.text.engine, 0:flash.ui, 0:flash.utils, 0:flash.xml, 1:CameraInput, 5:CameraInput, 5:flash.display:MovieClip, 5:flash.display:Sprite, 5:flash.display:DisplayObjectContainer, 5:flash.display:InteractiveObject, 5:flash.display:DisplayObject, 5:flash.events:EventDispatcher}::x
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.x = 0;
        } else {
            context.setproperty($names[4], 0, stack0);
        }
//        stack0 = this;// JIT: redundant assigment, value unused
        // 7 0::dragger3
        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
        stack0 = this.$Bgdragger3;
        // 9 {3, 0, 3, 2, 0:http://adobe.com/AS3/2006/builtin, 0:adobe.utils, 0:flash.accessibility, 0:flash.desktop, 0:flash.display, 0:flash.errors, 0:flash.events, 0:flash.external, 0:flash.filters, 0:flash.geom, 0:flash.globalization, 0:flash.media, 0:flash.net, 0:flash.net.drm, 0:flash.printing, 0:flash.profiler, 0:flash.sampler, 0:flash.sensors, 0:flash.system, 0:flash.text, 0:flash.text.ime, 0:flash.text.engine, 0:flash.ui, 0:flash.utils, 0:flash.xml, 1:CameraInput, 5:CameraInput, 5:flash.display:MovieClip, 5:flash.display:Sprite, 5:flash.display:DisplayObjectContainer, 5:flash.display:InteractiveObject, 5:flash.display:DisplayObject, 5:flash.events:EventDispatcher}::drag
        //Possible type:7 0:flash.display::MovieClip
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
            stack0 = stack0['drag'];
        } else {
            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
            stack0 = temp.$Bgdrag;
            if (stack0 === undefined || typeof stack0 === 'function') {
                stack0 = temp.axGetProperty($names[3]);
            }
        }
//        stack1 = 0;// JIT: redundant assigment, value unused
        // 9 {3, 0, 3, 2, 0:http://adobe.com/AS3/2006/builtin, 0:adobe.utils, 0:flash.accessibility, 0:flash.desktop, 0:flash.display, 0:flash.errors, 0:flash.events, 0:flash.external, 0:flash.filters, 0:flash.geom, 0:flash.globalization, 0:flash.media, 0:flash.net, 0:flash.net.drm, 0:flash.printing, 0:flash.profiler, 0:flash.sampler, 0:flash.sensors, 0:flash.system, 0:flash.text, 0:flash.text.ime, 0:flash.text.engine, 0:flash.ui, 0:flash.utils, 0:flash.xml, 1:CameraInput, 5:CameraInput, 5:flash.display:MovieClip, 5:flash.display:Sprite, 5:flash.display:DisplayObjectContainer, 5:flash.display:InteractiveObject, 5:flash.display:DisplayObject, 5:flash.events:EventDispatcher}::x
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.x = 0;
        } else {
            context.setproperty($names[4], 0, stack0);
        }
        return;
    }
//# sourceURL=http://jit/CameraInput/m_frame1.js
})