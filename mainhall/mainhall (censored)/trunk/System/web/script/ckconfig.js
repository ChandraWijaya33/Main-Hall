/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


CKEDITOR.editorConfig = function( config )
{
config.toolbar = 'MyToolbar';

config.toolbar_MyToolbar =
[
['Source','NewPage','Preview'],
['Bold','Italic','Underline','Strike','-','Subscript','Superscript'],
['NumberedList','BulletedList','-','Outdent','Indent','Blockquote'],
['Link','Unlink','Anchor'],  ['JustifyLeft','JustifyCenter','JustifyRight','JustifyBlock'],
['TextColor','BGColor'],
['Table','HorizontalRule','Smiley','SpecialChar'],
['Maximize','-','About']
];
};