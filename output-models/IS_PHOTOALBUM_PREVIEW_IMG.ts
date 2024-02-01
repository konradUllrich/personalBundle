import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface IS_PHOTOALBUM_PREVIEW_IMGAttributes {
    DTEDIT?: Date;
    LUSERID?: number;
    FKSTRID?: string;
    DTINSERT?: Date;
    STRCONTENTTYPE?: string;
    DTLASTMODIFY?: Date;
    STRMETA?: string;
    LORDER?: number;
    LID: number;
    STRURL?: string;
    LUSERIDINSERT?: number;
    STRFILENAME?: string;
}

@Table({
	tableName: "IS_PHOTOALBUM_PREVIEW_IMG",
	timestamps: false 
})
export class IS_PHOTOALBUM_PREVIEW_IMG extends Model<IS_PHOTOALBUM_PREVIEW_IMGAttributes, IS_PHOTOALBUM_PREVIEW_IMGAttributes> implements IS_PHOTOALBUM_PREVIEW_IMGAttributes {

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTEDIT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERID?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	FKSTRID?: string;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTINSERT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STRCONTENTTYPE?: string;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTLASTMODIFY?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(2048) 
    })
    	STRMETA?: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LORDER?: number;

    @Column({
    	primaryKey: true,
    	type: DataType.INTEGER 
    })
    	LID!: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STRURL?: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERIDINSERT?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STRFILENAME?: string;

}