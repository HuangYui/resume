/**
 * Markdown Loader
 * 用于加载和渲染Markdown文件
 */

// 创建一个模态框来显示Markdown内容
function createMarkdownModal() {
  // 检查是否已存在模态框
  if (document.getElementById('markdown-modal')) {
    return document.getElementById('markdown-modal');
  }

  // 创建模态框容器
  const modal = document.createElement('div');
  modal.id = 'markdown-modal';
  modal.className = 'markdown-modal';
  modal.style.display = 'none';

  // 创建模态框内容
  const modalContent = document.createElement('div');
  modalContent.className = 'markdown-modal-content';

  // 创建关闭按钮
  const closeBtn = document.createElement('span');
  closeBtn.className = 'markdown-modal-close';
  closeBtn.innerHTML = '&times;';
  closeBtn.onclick = function() {
    modal.style.display = 'none';
  };

  // 创建内容容器
  const contentContainer = document.createElement('div');
  contentContainer.id = 'markdown-content';

  // 组装模态框
  modalContent.appendChild(closeBtn);
  modalContent.appendChild(contentContainer);
  modal.appendChild(modalContent);

  // 点击模态框外部关闭
  window.onclick = function(event) {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  };

  // 添加到文档
  document.body.appendChild(modal);
  return modal;
}

// 检查文件是否存在
function checkFileExists(url) {
  return new Promise((resolve, reject) => {
    fetch(url, { method: 'HEAD' })
      .then(response => {
        if (response.ok) {
          resolve(true);
        } else {
          reject(new Error(`文件不存在 (状态码: ${response.status})`));
        }
      })
      .catch(error => {
        reject(error);
      });
  });
}

// 加载并渲染Markdown文件
function loadMarkdown(filePath, title) {
  // 标准化文件路径
  filePath = normalizePath(filePath);
  
  // 记录加载的文件路径到控制台，方便调试
  console.log('尝试加载Markdown文件:', filePath);

  // 创建URL参数
  const params = new URLSearchParams();
  params.append('path', filePath);
  if (title) {
    params.append('title', title);
  }
  
  // 在新窗口打开页面
  window.open(`markdown-viewer.html?${params.toString()}`, '_blank');
}

// 处理文件路径，确保格式正确
function normalizePath(path) {
  // 如果路径以./开头，保持不变
  if (path.startsWith('./')) {
    return path;
  }
  // 如果路径不以/或./开头，添加./前缀
  if (!path.startsWith('/')) {
    return './' + path;
  }
  return path;
}

// 初始化函数
function initMarkdownLinks() {
  // 创建模态框
  createMarkdownModal();
  console.log('Markdown链接初始化完成');
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
  initMarkdownLinks();
  console.log('Markdown加载器已初始化');
});