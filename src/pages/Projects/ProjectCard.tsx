import React, { useState } from 'react';
import './ProjectCard.css';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  features: string[];
  imageUrl?: string;
  videoUrl?: string;
  githubUrl?: string;
  liveUrl?: string;
  category: 'hardware' | 'game' | 'web' | 'other';
  status: 'completed' | 'ongoing' | 'planned';
  placeholderIcon?: string;
  placeholderText?: string;
}

const ProjectCard = ({ 
  title, 
  description, 
  technologies, 
  features, 
  imageUrl, 
  videoUrl, 
  githubUrl, 
  liveUrl, 
  category,
  status,
  placeholderIcon,
  placeholderText
}: ProjectCardProps) => {
  const [showVideo, setShowVideo] = useState(false);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'hardware': return '#ff6b6b';
      case 'game': return '#4ecdc4';
      case 'web': return '#45b7d1';
      default: return '#96ceb4';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return '#50c878';
      case 'ongoing': return '#ffd700';
      case 'planned': return '#ff6b6b';
      default: return '#96ceb4';
    }
  };

  return (
    <div className="project-card">
      <div className="project-header">
        <div className="project-title-section">
          <h2>{title}</h2>
          <div className="project-badges">
            <span 
              className="category-badge" 
              style={{ backgroundColor: getCategoryColor(category) }}
            >
              {category.toUpperCase()}
            </span>
            <span 
              className="status-badge" 
              style={{ backgroundColor: getStatusColor(status) }}
            >
              {status.toUpperCase()}
            </span>
          </div>
        </div>
      </div>

      <div className="project-content">
        <div className="project-description">
          <p>{description}</p>
        </div>

        <div className="project-features">
          <h3>Key Features:</h3>
          <ul>
            {features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>

        <div className="project-technologies">
          <h3>Technologies Used:</h3>
          <div className="tech-tags">
            {technologies.map((tech, index) => (
              <span key={index} className="tech-tag">{tech}</span>
            ))}
          </div>
        </div>

        {/* Media Section - Only show if there's media content */}
        {(imageUrl || videoUrl) && (
          <div className="project-media">
            <h3>Project Media:</h3>
            <div className="media-container">
              {imageUrl ? (
                <div className="image-container">
                  <img src={imageUrl} alt={title} />
                </div>
              ) : (
                <div className="media-placeholder">
                  <div className="placeholder-content">
                    <span>{placeholderIcon || '📸'}</span>
                    <p>{placeholderText || 'Project Images'}</p>
                    <small>Add project images here</small>
                  </div>
                </div>
              )}

              {videoUrl ? (
                <div className="video-container">
                  {showVideo ? (
                    <video controls>
                      <source src={videoUrl} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  ) : (
                    <div className="video-placeholder" onClick={() => setShowVideo(true)}>
                      <div className="play-button">▶</div>
                      <p>Click to play video</p>
                    </div>
                  )}
                </div>
              ) : (
                <div className="media-placeholder">
                  <div className="placeholder-content">
                    <span>🎥</span>
                    <p>Project Video</p>
                    <small>Add demonstration video here</small>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Links Section */}
        <div className="project-links">
          {githubUrl && (
            <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="project-link github">
              <span>📁</span> View Code
            </a>
          )}
          {liveUrl && (
            <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="project-link live">
              <span>🌐</span> Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;