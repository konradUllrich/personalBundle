import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface XFILEDATAGROUP21Attributes {
    DTINSERT?: Date;
    LORDER?: number;
    STRID: string;
    DTLASTMODIFY?: Date;
    STRURL?: string;
    STRCONTENTTYPE?: string;
    STRMETA?: string;
    FKSTRID?: string;
    LUSERID?: number;
    DTEDIT?: Date;
    LUSERIDINSERT?: number;
    STRFILENAME?: string;
}

@Table({
	tableName: "XFILEDATAGROUP21",
	timestamps: false 
})
export class XFILEDATAGROUP21 extends Model<XFILEDATAGROUP21Attributes, XFILEDATAGROUP21Attributes> implements XFILEDATAGROUP21Attributes {

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
    	primaryKey: true,
    	type: DataType.STRING(255) 
    })
    	STRID!: string;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTLASTMODIFY?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STRURL?: string;

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

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	FKSTRID?: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERID?: number;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTEDIT?: Date;

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