import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface XPOLL_VOTE00BB5BC6Attributes {
    DTEDIT?: Date;
    DTINSERT?: Date;
    TXT_OPTIONS?: string;
    LID: number;
    LUSERID?: number;
    FKID?: number;
    LUSERIDINSERT?: number;
}

@Table({
	tableName: "XPOLL_VOTE00BB5BC6",
	timestamps: false 
})
export class XPOLL_VOTE00BB5BC6 extends Model<XPOLL_VOTE00BB5BC6Attributes, XPOLL_VOTE00BB5BC6Attributes> implements XPOLL_VOTE00BB5BC6Attributes {

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTEDIT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTINSERT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(-1) 
    })
    	TXT_OPTIONS?: string;

    @Column({
    	primaryKey: true,
    	type: DataType.INTEGER 
    })
    	LID!: number;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERID?: number;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	FKID?: number;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERIDINSERT?: number;

}