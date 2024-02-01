import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface SF_T_SCHULFERIENAttributes {
    DT_BEGINN?: Date;
    STR_SCHULFERIEN?: string;
    DT_ENDE?: Date;
    DTEDIT?: Date;
    L_JAHR?: number;
    LUSERIDINSERT?: number;
    DT_ENDE2?: Date;
    STRID: string;
    LUSERID?: number;
    DTINSERT?: Date;
}

@Table({
	tableName: "SF_T_SCHULFERIEN",
	timestamps: false 
})
export class SF_T_SCHULFERIEN extends Model<SF_T_SCHULFERIENAttributes, SF_T_SCHULFERIENAttributes> implements SF_T_SCHULFERIENAttributes {

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DT_BEGINN?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_SCHULFERIEN?: string;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DT_ENDE?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTEDIT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	L_JAHR?: number;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERIDINSERT?: number;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DT_ENDE2?: Date;

    @Column({
    	primaryKey: true,
    	type: DataType.STRING(255) 
    })
    	STRID!: string;

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

}