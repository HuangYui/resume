# 图片测试文档

## 本地图片示例

这是一个包含图片的测试文档，用于演示markdown查看器的图片处理功能。

### 相对路径图片

![用户头像](../images/resource/user.png)
*用户头像示例*

### 网络图片

![在线图片](https://via.placeholder.com/400x200/007bff/ffffff?text=示例图片)
*这是一张在线示例图片*

## 图片功能特点

1. **自适应显示**：图片会自动适应容器宽度
2. **点击放大**：点击图片可以在模态框中查看大图
3. **悬停效果**：鼠标悬停时图片会有轻微放大效果
4. **错误处理**：图片加载失败时会显示错误提示
5. **路径处理**：自动处理相对路径和绝对路径

### 多张图片展示

![Logo](../images/logo.png)
*项目Logo*

![背景图](../images/background/1.jpg)
*背景图片示例*

## 使用说明

在markdown文件中，你可以使用以下语法插入图片：

```markdown
![图片描述](图片路径)
```

支持的图片格式：
- PNG
- JPG/JPEG
- GIF
- SVG
- WebP

图片路径可以是：
- 相对路径：`./images/example.png`
- 绝对路径：`/images/example.png`
- 网络地址：`https://example.com/image.png`