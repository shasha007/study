<%@page contentType="text/html"%>
<%@page pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>JSP Page</title>
    </head>
    <body>
    	<% 
        //接收参数 
        String code = request.getParameter("code"); 
        String name = request.getParameter("name"); 
        //控制台输出表单数据看看 
        System.out.println("code=" + code + ",name=" + name); 
        //检查code的合法性 
        if (code == null || code.trim().length() == 0) { 
                out.println("code can't be null or empty"); 
        } else if (code != null && code.equals("admin")) { 
                out.println("code can't be admin"); 
        } else { 
                out.println("OK"); 
        } 
%>
           <%
                  out.println("Hello World！");
           %>
 	</body>
</html>