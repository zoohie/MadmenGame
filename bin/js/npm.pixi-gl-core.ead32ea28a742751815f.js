(window.webpackJsonp=window.webpackJsonp||[]).push([["npm.pixi-gl-core"],{"../pixi-gl-core/src/GLBuffer.js":function(t,e){var r=new ArrayBuffer(0),i=function(t,e,i,n){this.gl=t,this.buffer=t.createBuffer(),this.type=e||t.ARRAY_BUFFER,this.drawType=n||t.STATIC_DRAW,this.data=r,i&&this.upload(i),this._updateID=0};i.prototype.upload=function(t,e,r){r||this.bind();var i=this.gl;t=t||this.data,e=e||0,this.data.byteLength>=t.byteLength?i.bufferSubData(this.type,e,t):i.bufferData(this.type,t,this.drawType),this.data=t},i.prototype.bind=function(){this.gl.bindBuffer(this.type,this.buffer)},i.createVertexBuffer=function(t,e,r){return new i(t,t.ARRAY_BUFFER,e,r)},i.createIndexBuffer=function(t,e,r){return new i(t,t.ELEMENT_ARRAY_BUFFER,e,r)},i.create=function(t,e,r,n){return new i(t,e,r,n)},i.prototype.destroy=function(){this.gl.deleteBuffer(this.buffer)},t.exports=i},"../pixi-gl-core/src/GLFramebuffer.js":function(t,e,r){var i=r("../pixi-gl-core/src/GLTexture.js"),n=function(t,e,r){this.gl=t,this.framebuffer=t.createFramebuffer(),this.stencil=null,this.texture=null,this.width=e||100,this.height=r||100};n.prototype.enableTexture=function(t){var e=this.gl;this.texture=t||new i(e),this.texture.bind(),this.bind(),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,this.texture.texture,0)},n.prototype.enableStencil=function(){if(!this.stencil){var t=this.gl;this.stencil=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,this.stencil),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,this.stencil),t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,this.width,this.height)}},n.prototype.clear=function(t,e,r,i){this.bind();var n=this.gl;n.clearColor(t,e,r,i),n.clear(n.COLOR_BUFFER_BIT|n.DEPTH_BUFFER_BIT)},n.prototype.bind=function(){var t=this.gl;t.bindFramebuffer(t.FRAMEBUFFER,this.framebuffer)},n.prototype.unbind=function(){var t=this.gl;t.bindFramebuffer(t.FRAMEBUFFER,null)},n.prototype.resize=function(t,e){var r=this.gl;this.width=t,this.height=e,this.texture&&this.texture.uploadData(null,t,e),this.stencil&&(r.bindRenderbuffer(r.RENDERBUFFER,this.stencil),r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_STENCIL,t,e))},n.prototype.destroy=function(){var t=this.gl;this.texture&&this.texture.destroy(),t.deleteFramebuffer(this.framebuffer),this.gl=null,this.stencil=null,this.texture=null},n.createRGBA=function(t,e,r,a){var o=i.fromData(t,null,e,r);o.enableNearestScaling(),o.enableWrapClamp();var s=new n(t,e,r);return s.enableTexture(o),s.unbind(),s},n.createFloat32=function(t,e,r,a){var o=new i.fromData(t,a,e,r);o.enableNearestScaling(),o.enableWrapClamp();var s=new n(t,e,r);return s.enableTexture(o),s.unbind(),s},t.exports=n},"../pixi-gl-core/src/GLShader.js":function(t,e,r){var i=r("../pixi-gl-core/src/shader/compileProgram.js"),n=r("../pixi-gl-core/src/shader/extractAttributes.js"),a=r("../pixi-gl-core/src/shader/extractUniforms.js"),o=r("../pixi-gl-core/src/shader/setPrecision.js"),s=r("../pixi-gl-core/src/shader/generateUniformAccessObject.js"),c=function(t,e,r,c,u){this.gl=t,c&&(e=o(e,c),r=o(r,c)),this.program=i(t,e,r,u),this.attributes=n(t,this.program),this.uniformData=a(t,this.program),this.uniforms=s(t,this.uniformData)};c.prototype.bind=function(){return this.gl.useProgram(this.program),this},c.prototype.destroy=function(){this.attributes=null,this.uniformData=null,this.uniforms=null,this.gl.deleteProgram(this.program)},t.exports=c},"../pixi-gl-core/src/GLTexture.js":function(t,e){var r=function(t,e,r,i,n){this.gl=t,this.texture=t.createTexture(),this.mipmap=!1,this.premultiplyAlpha=!1,this.width=e||-1,this.height=r||-1,this.format=i||t.RGBA,this.type=n||t.UNSIGNED_BYTE};r.prototype.upload=function(t){this.bind();var e=this.gl;e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,this.premultiplyAlpha);var r=t.videoWidth||t.width,i=t.videoHeight||t.height;i!==this.height||r!==this.width?e.texImage2D(e.TEXTURE_2D,0,this.format,this.format,this.type,t):e.texSubImage2D(e.TEXTURE_2D,0,0,0,this.format,this.type,t),this.width=r,this.height=i};var i=!1;r.prototype.uploadData=function(t,e,r){this.bind();var n=this.gl;if(t instanceof Float32Array){if(!i){if(!n.getExtension("OES_texture_float"))throw new Error("floating point textures not available");i=!0}this.type=n.FLOAT}else this.type=this.type||n.UNSIGNED_BYTE;n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,this.premultiplyAlpha),e!==this.width||r!==this.height?n.texImage2D(n.TEXTURE_2D,0,this.format,e,r,0,this.format,this.type,t||null):n.texSubImage2D(n.TEXTURE_2D,0,0,0,e,r,this.format,this.type,t||null),this.width=e,this.height=r},r.prototype.bind=function(t){var e=this.gl;void 0!==t&&e.activeTexture(e.TEXTURE0+t),e.bindTexture(e.TEXTURE_2D,this.texture)},r.prototype.unbind=function(){var t=this.gl;t.bindTexture(t.TEXTURE_2D,null)},r.prototype.minFilter=function(t){var e=this.gl;this.bind(),this.mipmap?e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,t?e.LINEAR_MIPMAP_LINEAR:e.NEAREST_MIPMAP_NEAREST):e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,t?e.LINEAR:e.NEAREST)},r.prototype.magFilter=function(t){var e=this.gl;this.bind(),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,t?e.LINEAR:e.NEAREST)},r.prototype.enableMipmap=function(){var t=this.gl;this.bind(),this.mipmap=!0,t.generateMipmap(t.TEXTURE_2D)},r.prototype.enableLinearScaling=function(){this.minFilter(!0),this.magFilter(!0)},r.prototype.enableNearestScaling=function(){this.minFilter(!1),this.magFilter(!1)},r.prototype.enableWrapClamp=function(){var t=this.gl;this.bind(),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)},r.prototype.enableWrapRepeat=function(){var t=this.gl;this.bind(),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.REPEAT),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.REPEAT)},r.prototype.enableWrapMirrorRepeat=function(){var t=this.gl;this.bind(),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.MIRRORED_REPEAT),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.MIRRORED_REPEAT)},r.prototype.destroy=function(){this.gl.deleteTexture(this.texture)},r.fromSource=function(t,e,i){var n=new r(t);return n.premultiplyAlpha=i||!1,n.upload(e),n},r.fromData=function(t,e,i,n){var a=new r(t);return a.uploadData(e,i,n),a},t.exports=r},"../pixi-gl-core/src/VertexArrayObject.js":function(t,e,r){var i=r("../pixi-gl-core/src/setVertexAttribArrays.js");function n(t,e){if(this.nativeVaoExtension=null,n.FORCE_NATIVE||(this.nativeVaoExtension=t.getExtension("OES_vertex_array_object")||t.getExtension("MOZ_OES_vertex_array_object")||t.getExtension("WEBKIT_OES_vertex_array_object")),this.nativeState=e,this.nativeVaoExtension){this.nativeVao=this.nativeVaoExtension.createVertexArrayOES();var r=t.getParameter(t.MAX_VERTEX_ATTRIBS);this.nativeState={tempAttribState:new Array(r),attribState:new Array(r)}}this.gl=t,this.attributes=[],this.indexBuffer=null,this.dirty=!1}n.prototype.constructor=n,t.exports=n,n.FORCE_NATIVE=!1,n.prototype.bind=function(){if(this.nativeVao){if(this.nativeVaoExtension.bindVertexArrayOES(this.nativeVao),this.dirty)return this.dirty=!1,this.activate(),this;this.indexBuffer&&this.indexBuffer.bind()}else this.activate();return this},n.prototype.unbind=function(){return this.nativeVao&&this.nativeVaoExtension.bindVertexArrayOES(null),this},n.prototype.activate=function(){for(var t=this.gl,e=null,r=0;r<this.attributes.length;r++){var n=this.attributes[r];e!==n.buffer&&(n.buffer.bind(),e=n.buffer),t.vertexAttribPointer(n.attribute.location,n.attribute.size,n.type||t.FLOAT,n.normalized||!1,n.stride||0,n.start||0)}return i(t,this.attributes,this.nativeState),this.indexBuffer&&this.indexBuffer.bind(),this},n.prototype.addAttribute=function(t,e,r,i,n,a){return this.attributes.push({buffer:t,attribute:e,location:e.location,type:r||this.gl.FLOAT,normalized:i||!1,stride:n||0,start:a||0}),this.dirty=!0,this},n.prototype.addIndex=function(t){return this.indexBuffer=t,this.dirty=!0,this},n.prototype.clear=function(){return this.nativeVao&&this.nativeVaoExtension.bindVertexArrayOES(this.nativeVao),this.attributes.length=0,this.indexBuffer=null,this},n.prototype.draw=function(t,e,r){var i=this.gl;return this.indexBuffer?i.drawElements(t,e||this.indexBuffer.data.length,i.UNSIGNED_SHORT,2*(r||0)):i.drawArrays(t,r,e||this.getSize()),this},n.prototype.destroy=function(){this.gl=null,this.indexBuffer=null,this.attributes=null,this.nativeState=null,this.nativeVao&&this.nativeVaoExtension.deleteVertexArrayOES(this.nativeVao),this.nativeVaoExtension=null,this.nativeVao=null},n.prototype.getSize=function(){var t=this.attributes[0];return t.buffer.data.length/(t.stride/4||t.attribute.size)}},"../pixi-gl-core/src/createContext.js":function(t,e){t.exports=function(t,e){var r=t.getContext("webgl",e)||t.getContext("experimental-webgl",e);if(!r)throw new Error("This browser does not support webGL. Try using the canvas renderer");return r}},"../pixi-gl-core/src/index.js":function(t,e,r){var i={createContext:r("../pixi-gl-core/src/createContext.js"),setVertexAttribArrays:r("../pixi-gl-core/src/setVertexAttribArrays.js"),GLBuffer:r("../pixi-gl-core/src/GLBuffer.js"),GLFramebuffer:r("../pixi-gl-core/src/GLFramebuffer.js"),GLShader:r("../pixi-gl-core/src/GLShader.js"),GLTexture:r("../pixi-gl-core/src/GLTexture.js"),VertexArrayObject:r("../pixi-gl-core/src/VertexArrayObject.js"),shader:r("../pixi-gl-core/src/shader/index.js")};t.exports&&(t.exports=i),"undefined"!==typeof window&&(window.PIXI=window.PIXI||{},window.PIXI.glCore=i)},"../pixi-gl-core/src/setVertexAttribArrays.js":function(t,e){t.exports=function(t,e,r){var i;if(r){var n=r.tempAttribState,a=r.attribState;for(i=0;i<n.length;i++)n[i]=!1;for(i=0;i<e.length;i++)n[e[i].attribute.location]=!0;for(i=0;i<a.length;i++)a[i]!==n[i]&&(a[i]=n[i],r.attribState[i]?t.enableVertexAttribArray(i):t.disableVertexAttribArray(i))}else for(i=0;i<e.length;i++){var o=e[i];t.enableVertexAttribArray(o.attribute.location)}}},"../pixi-gl-core/src/shader/compileProgram.js":function(t,e){var r=function(t,e,r){var i=t.createShader(e);return t.shaderSource(i,r),t.compileShader(i),t.getShaderParameter(i,t.COMPILE_STATUS)?i:(console.log(t.getShaderInfoLog(i)),null)};t.exports=function(t,e,i,n){var a=r(t,t.VERTEX_SHADER,e),o=r(t,t.FRAGMENT_SHADER,i),s=t.createProgram();if(t.attachShader(s,a),t.attachShader(s,o),n)for(var c in n)t.bindAttribLocation(s,n[c],c);return t.linkProgram(s),t.getProgramParameter(s,t.LINK_STATUS)||(console.error("Pixi.js Error: Could not initialize shader."),console.error("gl.VALIDATE_STATUS",t.getProgramParameter(s,t.VALIDATE_STATUS)),console.error("gl.getError()",t.getError()),""!==t.getProgramInfoLog(s)&&console.warn("Pixi.js Warning: gl.getProgramInfoLog()",t.getProgramInfoLog(s)),t.deleteProgram(s),s=null),t.deleteShader(a),t.deleteShader(o),s}},"../pixi-gl-core/src/shader/defaultValue.js":function(t,e){var r=function(t){for(var e=new Array(t),r=0;r<e.length;r++)e[r]=!1;return e};t.exports=function(t,e){switch(t){case"float":return 0;case"vec2":return new Float32Array(2*e);case"vec3":return new Float32Array(3*e);case"vec4":return new Float32Array(4*e);case"int":case"sampler2D":return 0;case"ivec2":return new Int32Array(2*e);case"ivec3":return new Int32Array(3*e);case"ivec4":return new Int32Array(4*e);case"bool":return!1;case"bvec2":return r(2*e);case"bvec3":return r(3*e);case"bvec4":return r(4*e);case"mat2":return new Float32Array([1,0,0,1]);case"mat3":return new Float32Array([1,0,0,0,1,0,0,0,1]);case"mat4":return new Float32Array([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1])}}},"../pixi-gl-core/src/shader/extractAttributes.js":function(t,e,r){var i=r("../pixi-gl-core/src/shader/mapType.js"),n=r("../pixi-gl-core/src/shader/mapSize.js"),a=function(t,e,r,i){gl.vertexAttribPointer(this.location,this.size,t||gl.FLOAT,e||!1,r||0,i||0)};t.exports=function(t,e){for(var r={},o=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES),s=0;s<o;s++){var c=t.getActiveAttrib(e,s),u=i(t,c.type);r[c.name]={type:u,size:n(u),location:t.getAttribLocation(e,c.name),pointer:a}}return r}},"../pixi-gl-core/src/shader/extractUniforms.js":function(t,e,r){var i=r("../pixi-gl-core/src/shader/mapType.js"),n=r("../pixi-gl-core/src/shader/defaultValue.js");t.exports=function(t,e){for(var r={},a=t.getProgramParameter(e,t.ACTIVE_UNIFORMS),o=0;o<a;o++){var s=t.getActiveUniform(e,o),c=s.name.replace(/\[.*?\]/,""),u=i(t,s.type);r[c]={type:u,size:s.size,location:t.getUniformLocation(e,c),value:n(u,s.size)}}return r}},"../pixi-gl-core/src/shader/generateUniformAccessObject.js":function(t,e){var r=function(t){return function(){return this.data[t].value}},i={float:function(t,e,r){t.uniform1f(e,r)},vec2:function(t,e,r){t.uniform2f(e,r[0],r[1])},vec3:function(t,e,r){t.uniform3f(e,r[0],r[1],r[2])},vec4:function(t,e,r){t.uniform4f(e,r[0],r[1],r[2],r[3])},int:function(t,e,r){t.uniform1i(e,r)},ivec2:function(t,e,r){t.uniform2i(e,r[0],r[1])},ivec3:function(t,e,r){t.uniform3i(e,r[0],r[1],r[2])},ivec4:function(t,e,r){t.uniform4i(e,r[0],r[1],r[2],r[3])},bool:function(t,e,r){t.uniform1i(e,r)},bvec2:function(t,e,r){t.uniform2i(e,r[0],r[1])},bvec3:function(t,e,r){t.uniform3i(e,r[0],r[1],r[2])},bvec4:function(t,e,r){t.uniform4i(e,r[0],r[1],r[2],r[3])},mat2:function(t,e,r){t.uniformMatrix2fv(e,!1,r)},mat3:function(t,e,r){t.uniformMatrix3fv(e,!1,r)},mat4:function(t,e,r){t.uniformMatrix4fv(e,!1,r)},sampler2D:function(t,e,r){t.uniform1i(e,r)}},n={float:function(t,e,r){t.uniform1fv(e,r)},vec2:function(t,e,r){t.uniform2fv(e,r)},vec3:function(t,e,r){t.uniform3fv(e,r)},vec4:function(t,e,r){t.uniform4fv(e,r)},int:function(t,e,r){t.uniform1iv(e,r)},ivec2:function(t,e,r){t.uniform2iv(e,r)},ivec3:function(t,e,r){t.uniform3iv(e,r)},ivec4:function(t,e,r){t.uniform4iv(e,r)},bool:function(t,e,r){t.uniform1iv(e,r)},bvec2:function(t,e,r){t.uniform2iv(e,r)},bvec3:function(t,e,r){t.uniform3iv(e,r)},bvec4:function(t,e,r){t.uniform4iv(e,r)},sampler2D:function(t,e,r){t.uniform1iv(e,r)}};function a(t,e){return function(r){this.data[t].value=r;var a=this.data[t].location;1===e.size?i[e.type](this.gl,a,r):n[e.type](this.gl,a,r)}}function o(t,e){for(var r=e,i=0;i<t.length-1;i++){var n=r[t[i]]||{data:{}};r[t[i]]=n,r=n}return r}t.exports=function(t,e){var i={data:{}};i.gl=t;for(var n=Object.keys(e),s=0;s<n.length;s++){var c=n[s],u=c.split("."),f=u[u.length-1],l=o(u,i),h=e[c];l.data[f]=h,l.gl=t,Object.defineProperty(l,f,{get:r(f),set:a(f,h)})}return i}},"../pixi-gl-core/src/shader/index.js":function(t,e,r){t.exports={compileProgram:r("../pixi-gl-core/src/shader/compileProgram.js"),defaultValue:r("../pixi-gl-core/src/shader/defaultValue.js"),extractAttributes:r("../pixi-gl-core/src/shader/extractAttributes.js"),extractUniforms:r("../pixi-gl-core/src/shader/extractUniforms.js"),generateUniformAccessObject:r("../pixi-gl-core/src/shader/generateUniformAccessObject.js"),setPrecision:r("../pixi-gl-core/src/shader/setPrecision.js"),mapSize:r("../pixi-gl-core/src/shader/mapSize.js"),mapType:r("../pixi-gl-core/src/shader/mapType.js")}},"../pixi-gl-core/src/shader/mapSize.js":function(t,e){var r={float:1,vec2:2,vec3:3,vec4:4,int:1,ivec2:2,ivec3:3,ivec4:4,bool:1,bvec2:2,bvec3:3,bvec4:4,mat2:4,mat3:9,mat4:16,sampler2D:1};t.exports=function(t){return r[t]}},"../pixi-gl-core/src/shader/mapType.js":function(t,e){var r=null,i={FLOAT:"float",FLOAT_VEC2:"vec2",FLOAT_VEC3:"vec3",FLOAT_VEC4:"vec4",INT:"int",INT_VEC2:"ivec2",INT_VEC3:"ivec3",INT_VEC4:"ivec4",BOOL:"bool",BOOL_VEC2:"bvec2",BOOL_VEC3:"bvec3",BOOL_VEC4:"bvec4",FLOAT_MAT2:"mat2",FLOAT_MAT3:"mat3",FLOAT_MAT4:"mat4",SAMPLER_2D:"sampler2D"};t.exports=function(t,e){if(!r){var n=Object.keys(i);r={};for(var a=0;a<n.length;++a){var o=n[a];r[t[o]]=i[o]}}return r[e]}},"../pixi-gl-core/src/shader/setPrecision.js":function(t,e){t.exports=function(t,e){return"precision"!==t.substring(0,9)?"precision "+e+" float;\n"+t:t}}}]);
//# sourceMappingURL=npm.pixi-gl-core.ead32ea28a742751815f.js.map