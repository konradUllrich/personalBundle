import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface XFILEDATAGROUP4Attributes {
    STRURL?: string;
    LUSERIDINSERT?: number;
    STRID: string;
    STRFILENAME?: string;
    LORDER?: number;
    LUSERID?: number;
    DTINSERT?: Date;
    DTLASTMODIFY?: Date;
    FKSTRID?: string;
    DTEDIT?: Date;
    STRCONTENTTYPE?: string;
    STRMETA?: string;
}

@Table({
	tableName: "XFILEDATAGROUP4",
	timestamps: false 
})
export class XFILEDATAGROUP4 extends Model<XFILEDATAGROUP4Attributes, XFILEDATAGROUP4Attributes> implements XFILEDATAGROUP4Attributes {

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
    	primaryKey: true,
    	type: DataType.STRING(255) 
    })
    	STRID!: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STRFILENAME?: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LORDER?: number;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERID?: number;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTINSERT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTLASTMODIFY?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	FKSTRID?: string;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTEDIT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STRCONTENTTYPE?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(2048) 
    })
    	STRMETA?: string;

}