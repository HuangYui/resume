# 项目示例

## 项目概述

这是一个示例项目，展示了如何在简历网站中嵌入Markdown文件。通过点击项目链接，可以在模态框中查看项目的详细信息。

## 技术栈

- HTML5 / CSS3
- JavaScript
- Markdown
- Font Awesome图标库

## 主要功能

### Markdown渲染

使用marked.js库将Markdown文件渲染为HTML，并在模态框中显示。这使得项目介绍更加结构化和易于阅读。

### 响应式设计

模态框采用响应式设计，可以在不同尺寸的屏幕上正常显示。在移动设备上也能提供良好的用户体验。

### 代码高亮

```javascript
// 加载并渲染Markdown文件
function loadMarkdown(filePath, title) {
  // 创建或获取模态框
  const modal = createMarkdownModal();
  const contentContainer = document.getElementById('markdown-content');
  
  // 显示加载中
  contentContainer.innerHTML = '<div style="text-align: center;"><i class="fa fa-spinner fa-spin" style="font-size: 24px;"></i> 加载中...</div>';
  modal.style.display = 'block';

  // 使用fetch API加载Markdown文件
  fetch(filePath)
    .then(response => {
      if (!response.ok) {
        throw new Error('无法加载文件');
      }
      return response.text();
    })
    .then(markdownText => {
      // 渲染Markdown
      contentContainer.innerHTML = marked.parse(markdownText);
    })
    .catch(error => {
      contentContainer.innerHTML = `<div style="color: red;">加载失败: ${error.message}</div>`;
    });
}
```

## 使用方法

1. 创建Markdown文件并保存在resource目录中
2. 在HTML中添加链接，点击时调用loadMarkdown函数
3. 函数会加载并渲染Markdown文件，在模态框中显示

## 优势

- **易于维护**：项目介绍内容与网站代码分离，便于更新
- **格式丰富**：支持标题、列表、代码块、表格等Markdown格式
- **用户体验**：无需跳转页面，直接在当前页面查看详情

## 未来计划

- 添加更多Markdown格式支持
- 实现代码语法高亮
- 添加图片预览功能
- 支持更多主题样式