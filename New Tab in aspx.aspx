<%@ Page language="c#" AutoEventWireup="false" %>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN" > 

<html>
  <head>
    <title>SessionRedirect</title>
    <meta name="GENERATOR" Content="Microsoft Visual Studio .NET 7.1">
    <meta name="CODE_LANGUAGE" Content="C#">
    <meta name=vs_defaultClientScript content="JavaScript">
    <meta name=vs_targetSchema content="http://schemas.microsoft.com/intellisense/ie5">
  </head>
  <body MS_POSITIONING="GridLayout">

    <form method="post" name="frmRedirect">   
        <input type="hidden" name="email" value="<%=Session["Email"].ToString() %>" />
        <input type="hidden" name="pass" value="<%= Session["PWD"].ToString() %>" />
        <input type="hidden" name="User" value="<%= Session["User"].ToString() %>" />
    </form>

<script type="text/javascript"> 

    if(frmRedirect.User.value == "P")
    {
        window.open("", "Partner", "height=650,width=1075,left=100,top=100,status=1,scrollbars=1,location=1,toolbar=1;resizable=1");
        frmRedirect.target="Partner";           
        frmRedirect.action = "http://pli.cmsstag/partnerzone/index.aspx";
        document.frmRedirect.submit(); 
        location.replace("index.aspx");
    }
    else
    {
        window.open("", "Student", "height=650,width=1075,left=100,top=100,status=1,scrollbars=1,location=1,toolbar=1;resizable=1");
        frmRedirect.target="Student";
        frmRedirect.action = "http://pli.cmsstag/studentzone/index.aspx";
        document.frmRedirect.submit(); 
        location.replace("index.aspx");
    }   

</script>

<%
    Session.Remove("registration");
    Session.Remove("User");
    Session.Remove("UserId");
    Session.Remove("UserLoggedIn");
    Session.Remove("AgentCode");
    Session.Abandon();
%>

  </body>
</html>