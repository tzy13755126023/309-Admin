<template> 
	<froala :config="config"></froala>
</template>
<script>
export default { 
	name:'editor',
	data() { 
		return { 
			editor: null, 
			config: { 
				zIndex: 2501, 
				height: "500", 
				toolbarSticky: false,
				 autofocus: true, 
				 toolbarButtons: [ 
				 "fullscreen", "bold", "italic", "underline", "strikeThrough", "subscript", "superscript", "|", "fontFamily", "fontSize", "color", "inlineClass", "inlineStyle", "paragraphStyle", "lineHeight", "|", "paragraphFormat", "align", "formatOL", "formatUL", "outdent", "indent", "quote",  "-", "insertLink", "insertImage", "insertVideo", "embedly", "insertFile", "insertTable", "|", "emoticons", "fontAwesome", "specialCharacters", "insertHR", "selectAll", "clearFormatting", "|", "print", "getPDF", "spellChecker", "help", "html", "|", "undo", "redo" ],  
				 placeholder: '请填写内容', 
				 language: "zh_cn", 
				 imageDefaultWidth: 500,  
				 imageUploadURL: "/api/upload", 
				 // videoUploadURL: "xxxxxxx", 
				 // fileUploadURL: "xxxxxxx", 
				 imageManagerLoadURL:"/api/upload",  
				 // requestHeaders: { Authorization: localStorage.admintoken }, 
				 events: {  
				 	"froalaEditor.initialized": (e, editor) => { this.editor = editor; },  
				 	"froalaEditor.contentChanged": (e, editor) => { 
				 		this.$emit("on-change", editor.html.get(true)); 
				 		}, 
				 	} 
				} 
			}; 
		}, 
	methods: { 
		setHtml(html) { 
			if (this.editor) {
		 	  this.editor.html.set(html);
		    }
	   } 
	},
}
</script>
<style>
	
</style>