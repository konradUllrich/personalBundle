import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface XFILEDATAGROUP244B4CDDAttributes {
    FKSTRID?: string;
    DTINSERT?: Date;
    LORDER?: number;
    LUSERIDINSERT?: number;
    DTEDIT?: Date;
    LUSERID?: number;
    DTLASTMODIFY?: Date;
    STRFILENAME?: string;
    LID: number;
    STRURL?: string;
    STRMETA?: string;
    STRCONTENTTYPE?: string;
}

@Table({
	tableName: "XFILEDATAGROUP244B4CDD",
	timestamps: false 
})
export class XFILEDATAGROUP244B4CDD extends Model<XFILEDATAGROUP244B4CDDAttributes, XFILEDATAGROUP244B4CDDAttributes> implements XFILEDATAGROUP244B4CDDAttributes {

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
    	type: DataType.INTEGER 
    })
    	LORDER?: number;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERIDINSERT?: number;

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
    	type: DataType.DATE(7) 
    })
    	DTLASTMODIFY?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STRFILENAME?: string;

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
    	type: DataType.STRING(2048) 
    })
    	STRMETA?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STRCONTENTTYPE?: string;

}