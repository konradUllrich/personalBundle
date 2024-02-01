import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface XFILEDATAGROUP341Attributes {
    STRFILENAME?: string;
    DTINSERT?: Date;
    STRCONTENTTYPE?: string;
    LUSERIDINSERT?: number;
    FKSTRID?: string;
    LUSERID?: number;
    DTEDIT?: Date;
    STRURL?: string;
    STRID: string;
    DTLASTMODIFY?: Date;
    LORDER?: number;
    STRMETA?: string;
}

@Table({
	tableName: "XFILEDATAGROUP341",
	timestamps: false 
})
export class XFILEDATAGROUP341 extends Model<XFILEDATAGROUP341Attributes, XFILEDATAGROUP341Attributes> implements XFILEDATAGROUP341Attributes {

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STRFILENAME?: string;

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
    	type: DataType.INTEGER 
    })
    	LUSERIDINSERT?: number;

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
    	type: DataType.STRING(255) 
    })
    	STRURL?: string;

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
    	type: DataType.INTEGER 
    })
    	LORDER?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(2048) 
    })
    	STRMETA?: string;

}