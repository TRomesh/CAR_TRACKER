jQuery(document).ready(function(){

jQuery(".payment_radio").each(
/* ��� �������� �������� ������ ������� �� �������� radio */
function() {
     
     changeRadioStart(jQuery(this));
     
});


});


function changeRadio(el)
/* 
	������� ����� ���� � �������� radio ��� ����� �� ���������
*/
{

	var el = el,
		input = el.find("input").eq(0);
	var nm=input.attr("name");
		
	jQuery(".payment_radio input").each(
	
	function() {
     
		if(jQuery(this).attr("name")==nm)
		{
			jQuery(this).parent().removeClass("radioChecked");
		}
	   
	   
	});					  
	
	
	if(el.attr("class").indexOf("payment_radioDisabled")==-1)
	{	
		el.addClass("radioChecked");
		input.attr("checked", true);
	}
	
    return true;
}

function changeVisualRadio(input)
{
/*
	������ ��� radio ��� ����� ��������
*/
	var wrapInput = input.parent();
	var nm=input.attr("name");
		
	jQuery(".payment_radio input").each(
	
	function() {
     
		if(jQuery(this).attr("name")==nm)
		{
			jQuery(this).parent().removeClass("radioChecked");
		}
	   
	   
	});

	if(input.attr("checked")) 
	{
		wrapInput.addClass("radioChecked");
	}
}

function changeRadioStart(el)
/* 
	����� ������� �������� ��� <span class="payment_radio"><input type="radio" name="[name radio]" id="[id radio]" [checked="checked"] /></span>
	����� ������� �������� ���� name, id � ������ �������� ��� � ���� � ��������
*/
{

try
{
var el = el,
	radioName = el.attr("name"),
	radioId = el.attr("id"),
	radioChecked = el.attr("checked"),
	radioDisabled = el.attr("disabled"),
	radioTab = el.attr("tabindex");
	radioValue = el.attr("value");
	if(radioChecked)
		el.after("<span class='payment_radio radioChecked'>"+
			"<input type='radio'"+
			"name='"+radioName+"'"+
			"id='"+radioId+"'"+
			"checked='"+radioChecked+"'"+
			"tabindex='"+radioTab+"'"+
            "value='"+radioValue+"' /></span>");
	else
		el.after("<span class='payment_radio'>"+
			"<input type='radio'"+
			"name='"+radioName+"'"+
			"id='"+radioId+"'"+
			"tabindex='"+radioTab+"'"+
	        "value='"+radioValue+"' /></span>");
	
	/* ���� ������� disabled - ��������� �������������� ����� ��� ������� ���� � ��������� ������� disabled ��� ���������� radio */		
	if(radioDisabled)
	{
		el.next().addClass("payment_radioDisabled");
		el.next().find("input").eq(0).attr("disabled","disabled");
	}
	
	/* ������� ����������� ��������������� radio */		
	el.next().bind("mousedown", function(e) { changeRadio(jQuery(this)) });
	el.next().find("input").eq(0).bind("change", function(e) { changeVisualRadio(jQuery(this)) });
	if(jQuery.browser.msie)
	{
		el.next().find("input").eq(0).bind("click", function(e) { changeVisualRadio(jQuery(this)) });	
	}
	el.remove();
}
catch(e)
{
	// ���� ������, ������ �� ������
}

    return true;
}